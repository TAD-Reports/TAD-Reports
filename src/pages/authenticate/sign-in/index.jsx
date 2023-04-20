import { useState, useRef, useEffect, useContext } from "react";
import "../sign-in.css";
import { Box, Button, TextField } from "@mui/material";
import Logo from "../../../assets/images/philfida.png";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import accountService from "../../../services/account-service";
import Schema from "./Schema";

function Login() {
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");
  const [loading, setLoading] = useState();
  const [errMessage, setError] = useState();

  const { setAuth } = useAuth;
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from?.pathname || "/";

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values, actions) => {
      setLoading(true);
      setError("");
      const creds = {
        username: formik?.values?.username,
        password: formik?.values?.password,
      };
      accountService
        .authenticate(creds)
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((err) => {
          let message = "";
          if (err?.response?.status === 400) {
            message = "Invalid Username / Password";
          } else if (err?.response?.status === 500) {
            message = "Internal Server Error";
          }
          setError(message || err?.message);
        })
        .finally(() => {
          setLoading(false);
          // PARA TANGGALIN ANG NAIIWANG PASSWORD KAPAG NAG LOGIN
          actions?.resetForm({ values: { ...values, password: "" } });
        });
    },
  });

  return (
    <div className="App">
      <Box
        className="logo"
        component="img"
        src={Logo}
        alt="Logo"
        height="8vw"
        width="8vw"
        sx={{ marginTop: "-40px" }}
      />
      <div className="login-form">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            id="uname"
            placeholder="Username"
            value={uname}
            onChange={(evt) => setUname(evt.target.value)}
            disabled={loading}
          />
          <TextField
            id="pword"
            placeholder="Password"
            type="password"
            value={pword}
            onChange={(evt) => setPword(evt.target.value)}
            disabled={loading}
          />
          <Button id="login-btn" type="submit" variant="contained">
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

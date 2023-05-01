import { useState } from "react";
import "../sign-in.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Logo from "../../../assets/images/philfida.png";
// import useAuth from "../../../hooks/useAuth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import accountService from "../../../services/account-service";
// import Schema from "./Schema";

function Login() {
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");
  // const [loading, setLoading] = useState();
  // const [errMessage, setError] = useState();

  // const { setAuth } = useAuth;
  // const userRef = useRef();
  // const errRef = useRef();

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state.from?.pathname || "/";

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: Schema,
  //   onSubmit: (values, actions) => {
  //     setLoading(true);
  //     setError("");
  //     const creds = {
  //       username: formik?.values?.username,
  //       password: formik?.values?.password,
  //     };
  //     accountService
  //       .authenticate(creds)
  //       .then(() => {
  //         navigate(from, { replace: true });
  //       })
  //       .catch((err) => {
  //         let message = "";
  //         if (err?.response?.status === 400) {
  //           message = "Invalid Username / Password";
  //         } else if (err?.response?.status === 500) {
  //           message = "Internal Server Error";
  //         }
  //         setError(message || err?.message);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //         // PARA TANGGALIN ANG NAIIWANG PASSWORD KAPAG NAG LOGIN
  //         actions?.resetForm({ values: { ...values, password: "" } });
  //       });
  //   },
  // });

  return (
    <Box className="App">
      <Box
        className="login-form"
        component="form"
        // onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <Box className="header">
          <Box
            className="logo"
            component="img"
            src={Logo}
            alt="Logo"
            height="100px"
            width="100px"
          />
          <Typography component="h4" variant="h4" sx={{ color: "black", fontWeight: "bolder" }}>
            Philippine Fiber Industry <br /> Development Authority
          </Typography>
        </Box>
        <TextField
          id="uname"
          placeholder="Username"
          variant="standard"
          value={uname}
          onChange={(evt) => setUname(evt.target.value)}
          // disabled={loading}
        />
        <TextField
          id="pword"
          placeholder="Password"
          type="password"
          variant="standard"
          value={pword}
          onChange={(evt) => setPword(evt.target.value)}
          // disabled={loading}
        />
        <Button id="login-btn" type="submit" variant="contained">
          Log in
        </Button>
      </Box>
    </Box>
  );
}

export default Login;

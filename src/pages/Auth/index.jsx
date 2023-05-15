import { useState } from "react";
import "./sign-in.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Logo from "../../assets/images/philfida.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { useFormik } from "formik";
import accountService from "../../services/account-service";
import Schema, { initialLog } from "./schema";

function Login() {
  const { setAuth } = useStateContext();

  const [loading, setLoading] = useState();
  const [errMessage, setError] = useState();

  const formik = useFormik({
    initialValues: initialLog,
    validationSchema: Schema,
    onSubmit: () => {
      setLoading(true);
      setError("");
      accountService
        .authenticate(formik?.values)
        .then((res) => {
          if (res.valid) {
            setAuth(true);
          }
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
        });
    },
  });
  
  return (
    <Box className="App">
      <Box className="stylish-design">
        <form
          className="login-form"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <Box
            className="header"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <Box
              className="logo"
              component="img"
              src={Logo}
              alt="Logo"
              height="150px"
              width="150px"
            />
            <Typography
              component="h4"
              variant="h4"
              sx={{ color: "black", fontWeight: "bolder" }}
            >
              Philippine Fiber Industry <br /> Development Authority
            </Typography>
          </Box>
          <Typography
            sx={{ color: "red", fontWeight: "bolder", fontSize: "20px" }}
          >
            {errMessage}
          </Typography>
          <TextField
            id="username"
            placeholder="Username"
            variant="standard"
            disabled={loading}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ width: "18vw" }}
          />
          <TextField
            id="password"
            placeholder="Password"
            type="password"
            variant="standard"
            fullWidth
            disabled={loading}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ width: "18vw" }}
          />
          <Button id="login-btn" type="submit" variant="contained">
            Log in
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;

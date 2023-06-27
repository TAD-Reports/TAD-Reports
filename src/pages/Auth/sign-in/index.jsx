import { useState } from "react";
import "./sign-in.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/philfida.png";
import { useStateContext } from "../../../contexts/ContextProvider";
import accountService from "../../../services/account-service";
import Schema, { initialLog } from "../../../schemas/login-schema";

function Login() {
  const { setAuth } = useStateContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState();
  const [errMessage, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialLog,
    validationSchema: Schema,
    onSubmit: async () => {
      setLoading(true);
      setError("");
      accountService
        .authenticate(formik?.values)
        .then((res) => {
          if (res.valid) {
            setAuth(res.data);
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          let message = "";
          if (err?.response?.status === 400 || err?.response?.status === 401) {
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
    <Grid
      className="App"
      // sx={{
      //   display: "flex",
      //   position: "relative",
      //   backgroundAttachment: "fixed",
      //   backgroundImage:
      //     "linear-gradient(rgba(4, 30, 5, 0.7), rgba(4, 30, 12, 0.7) 90%, #20571b), url('/public/images/farm.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "50%",
      //   backgroundRepeat: "no-repeat",
      //   height: "100vh",
      //   width: "100vw",
      //   overflow: "hidden",
      //   color: "#fff",
      // }}
    >
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
            type={showPassword ? "text" : "password"}
            variant="standard"
            fullWidth
            disabled={loading}
            value={formik.values.password}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <Box
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowPassword(!showPassword)}
                  onKeyPress={() => setShowPassword(!showPassword)}
                  sx={{ margin: 0, cursor: "pointer" }}
                >
                  {showPassword ? (
                    <VisibilityIcon size={18} />
                  ) : (
                    <VisibilityOffIcon size={18} />
                  )}
                </Box>
              ),
            }}
            onBlur={formik.handleBLur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ width: "18vw" }}
          />

          <Button
            id="login-btn"
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#067a61",
              color: "#fff",
              fontSize: "15px",
              padding: "8px 5px",
              margintop: "15px",
              width: "250px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#0ed145",
                color: "black",
                fontWeight: "bolder",
              },
            }}
          >
            Log in
          </Button>
          <Link to="/">
            <Typography sx={{ color: "blue", fontSize: "14px", m: 0 }}>
              Not a PhilFIDA member? Click Here
            </Typography>
          </Link>
        </form>
      </Box>
    </Grid>
  );
}

export default Login;

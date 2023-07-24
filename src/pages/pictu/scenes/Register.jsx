import { useState } from "react";
import { Box, Button, Grid, TextField, useTheme } from "@mui/material";
import { useFormik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SelectRegion from "components/pictu/Textfields/select-region";
import SelectRole from "components/pictu/Textfields/select-role";
import UserSchema, { initialUsers } from "../../../validation/register";
import Service from "../../../services/account-service";
import themes from "../../../themes/co-theme";
import Header from "../../../components/co/Header";

const { tokens } = themes;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formik = useFormik({
    initialValues: initialUsers,

    validationSchema: UserSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);
      Service.register(formik.values)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err); // Log the entire error object for debugging purposes
          if (err.response && err.response.data && err.response.data.error) {
            setError(err.response.data.error); // Access the error message from the response object
          } else {
            setError("An error occurred"); // Default error message if the error format is unexpected
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <Box sx={{ m: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Header title="Create User" subtitle="Create New Users" />
      </Box>

      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            label="First Name"
            name="firstname"
            variant="filled"
            fullWidth
            sx={{ gridColumn: "span 2" }}
            disabled={loading}
            value={formik?.values?.firstname}
            onChange={formik?.handleChange}
            size="small"
            onBlur={formik?.handleBlur}
            error={formik?.touched?.firstname && formik?.errors?.firstname}
            helperText={formik?.touched?.firstname && formik?.errors?.firstname}
          />
          <TextField
            label="Last Name"
            name="lastname"
            variant="filled"
            fullWidth
            sx={{ gridColumn: "span 2" }}
            disabled={loading}
            value={formik?.values?.lastname}
            onChange={formik?.handleChange}
            size="small"
            onBlur={formik?.handleBlur}
            error={formik?.touched?.lastname && formik?.errors?.lastname}
            helperText={formik?.touched?.lastname && formik?.errors?.lastname}
          />
          <TextField
            label="User Name"
            name="username"
            variant="filled"
            fullWidth
            sx={{ gridColumn: "span 2" }}
            disabled={loading}
            value={formik?.values?.username}
            onChange={formik?.handleChange}
            size="small"
            onBlur={formik?.handleBlur}
            error={formik?.touched?.username && formik?.errors?.username}
            helperText={formik?.touched?.username && formik?.errors?.username}
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="filled"
            fullWidth
            sx={{ gridColumn: "span 2" }}
            disabled={loading}
            value={formik?.values?.password}
            onChange={formik?.handleChange}
            size="small"
            onBlur={formik?.handleBlur}
            error={formik?.touched?.password && formik?.errors?.password}
            helperText={formik?.touched?.password && formik?.errors?.password}
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
          />
        </Box>
        <Grid container spacing={4} mt={1}>
          <Grid item xs={6}>
            <Box>
              <SelectRegion
                name="region"
                value={formik?.values?.region}
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                error={formik?.touched?.region && formik?.errors?.region}
                helperText={formik?.touched?.region && formik?.errors?.region}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <SelectRole
                name="role"
                value={formik?.values?.role}
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                error={formik?.touched?.role && formik?.errors?.role}
                helperText={formik?.touched?.role && formik?.errors?.role}
              />
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="end" mt={8}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: colors.theme[100],
            }}
          >
            Create New User
          </Button>
        </Box>
      </form>
      {error}
    </Box>
  );
}

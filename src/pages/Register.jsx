import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import PageContainer from "../components/LayoutContainers/PageContainer";
import accountService from "../services/account-service";
import SelectRole from "../components/Textfields/select-role";
import RegSchema, { initialAccount } from "../schemas/register-schema";

export default function Register() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: initialAccount,

    validationSchema: RegSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);
      accountService
        .addAccount(formik.values)
        .then(() => {})
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <PageContainer>
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
          Add User
        </Typography>
      </Box>
      <Grid container spacing={2} mb={40}>
        <Grid item xs={12}>
          <TextField
            name="username"
            label="Username"
            size="small"
            disabled={loading}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            variant="outlined"
            sx={{ mb: 4, width: "25%" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            size="small"
            type={showPassword ? "text" : "password"}
            variant="outlined"
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
            sx={{ mb: 4, width: "25%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectRole
            name="role"
            disabled={loading}
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
            sx={{ mb: 4, width: "25%" }}
          />
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{
            height: 50,
            width: 100,
            backgroundColor: "#76a66e",
            color: "#fff",
            fontSize: "15px",
            mx: 4,
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
        >
          Save
        </Button>
      </Box>
      {error}
    </PageContainer>
  );
}

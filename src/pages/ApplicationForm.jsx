import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PreviewIcon from "@mui/icons-material/Preview";
import SaveIcon from "@mui/icons-material/Save";
import BackgroundContainer from "components/LayoutContainers/BackgroundContainer";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import appformService from "services/appform-service";
import Logo from "../assets/images/philfida.png";
import AppFormSchema, { initialAppForm } from "../schemas/appform-schema";

function AppForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClickLandingPage = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: initialAppForm,

    validationSchema: AppFormSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);
      appformService
        .addEmployee(formik.values)
        .then(() => {
          formik?.resetForm();
        })
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <BackgroundContainer>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "65vw",
          overflowY: "auto",
          border: "solid 1px black",
          pt: 2,
          pb: 5,
          px: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: -8,
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ height: "5vw", width: "5vw", mr: 4 }}
          />
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Philippine Fiber Industry Development Authority
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Typography component="h5" variant="h5" sx={{ fontWeight: "bold" }}>
            JOB APPLICATION FORM
          </Typography>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
              <DownloadIcon sx={{ mr: 1 }} />
              Download PDS
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
              <UploadIcon sx={{ mr: 1 }} />
              Upload PDS
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="LAST NAME"
                name="lastName"
                variant="outlined"
                size="small"
                disabled={loading}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="FIRST NAME"
                name="firstName"
                variant="outlined"
                size="small"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="MIDDLE NAME (Optional)"
                name="middleName"
                variant="outlined"
                size="small"
                value={formik.values.middleName}
                onChange={formik.handleChange}
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="SUFFIX (Optional)"
                name="suffix"
                variant="outlined"
                size="small"
                value={formik.values.suffix}
                onChange={formik.handleChange}
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>

            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold", mr: 4 }}
              >
                POSITION APPLIED
              </Typography>
              <TextField
                name="position"
                variant="outlined"
                size="small"
                value={formik.values.positionApplied}
                onChange={formik.handleChange}
                disabled={loading}
                sx={{ width: "50%" }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                size="small"
                sx={{ fontSize: "15px", fontWeight: "bold", mr: 4 }}
              >
                SALARY GRADE
              </Typography>
              <TextField
                name="salary"
                variant="outlined"
                size="small"
                value={formik.values.salaryGrade}
                onChange={formik.handleChange}
                disabled={loading}
                sx={{ width: "50%" }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography component="h5" variant="h5" sx={{ fontWeight: "bold" }}>
            EDUCATIONAL BACKGROUND
          </Typography>
        </Box>
        <Table sx={{ mb: 4, borderCollapse: "collapse", textAlign: "center" }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  SCHOOL NAME
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  YEAR ATTENDED
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  COURSE
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  ATTACH FILE
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  VIEW FILE
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  COLLEGE
                </Typography>
              </TableCell>
              <TableCell>
                <TextField
                  name="college"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeSchool}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="yearAttended"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeYear}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="course"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeCourse}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                  <AttachFileIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                  <PreviewIcon />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  MASTERAL
                </Typography>
              </TableCell>
              <TableCell>
                <TextField
                  name="college"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeSchool}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="yearAttended"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeYear}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="course"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeCourse}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                  <AttachFileIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                  <PreviewIcon />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  DOCTORAL
                </Typography>
              </TableCell>
              <TableCell>
                <TextField
                  name="college"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeSchool}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="yearAttended"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeYear}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="course"
                  variant="outlined"
                  size="small"
                  value={formik.values.collegeCourse}
                  onChange={formik.handleChange}
                  disabled={loading}
                  sx={{ pr: 7 }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                  <AttachFileIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                  <PreviewIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box
          sx={{
            textAlign: "right",
            width: "100%",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            onClick={handleClickLandingPage}
            sx={{ mr: 2, backgroundColor: "#616161" }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{ mr: 2, backgroundColor: "#616161" }}
          >
            <SaveIcon sx={{ mr: 1 }} />
            Save and Apply
          </Button>
        </Box>
      </Card>
      {error}
    </BackgroundContainer>
  );
}

export default AppForm;

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import appformService from "services/appform-service";
import SelectEligibility from "components/Textfields/select-eligibility";
import AttachFileButton from "components/Buttons/AttachFileButton";
import Logo from "../../assets/images/philfida.png";
import AppFormSchema, { initialAppForm } from "../../schemas/appform-schema";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "85vh",
  width: "65vw",
  overflowY: "auto",
  pt: 2,
  pb: 5,
  px: 10,
};

function AppForm({ open, handleClose }) {
  const [pdsFile, setPDS] = useState();
  const [collegeFile, setCollege] = useState();
  const [masteralFile, setMasteral] = useState();
  const [doctoralFile, setDoctoral] = useState();
  const [eligibilityFile, setEligibilityFile] = useState();
  const [eligibilityType, setEligibilityType] = useState("Select Eligibility");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialAppForm,

    validationSchema: AppFormSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);

      if (
        pdsFile &&
        collegeFile &&
        masteralFile &&
        doctoralFile &&
        eligibilityFile
      ) {
        const attachments = {
          pds: pdsFile,
          college: collegeFile,
          masteral: masteralFile,
          doctoral: doctoralFile,
        };

        const eligibility = new FormData();
        eligibility.append("type", eligibilityType);
        eligibility.append("file", eligibilityFile);
        eligibility.append("file_name", eligibilityFile?.name);

        appformService
          .addApplicant(formik.values, attachments, eligibility)
          .then(() => {
            formik?.resetForm();
          })
          .catch((err) => {
            setError(err?.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
  });

  const fileInputRef = useRef(null);

  const importPDS = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setPDS(file);
  };

  React.useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }, [importPDS]);

  const importEligibility = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setEligibilityFile(file);
  };

  const handleEligibilityChange = (newEligibilityType) => {
    setEligibilityType(newEligibilityType);
  };

  const importCollege = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setCollege(file);
  };

  const importMasteral = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setMasteral(file);
  };

  const importDoctoral = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setDoctoral(file);
  };

  const asd = {
    pds: pdsFile,
    college: collegeFile,
    masteral: masteralFile,
    doctoral: doctoralFile,
  };

  console.log(asd);

  return (
    <Modal open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Box sx={style}>
          <Grid container mt={2} mb={6}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{ height: "5vw", width: "5vw", mr: 2 }}
              />
              <Typography component="h5" variant="h5">
                Philippine Fiber Industry <br /> Development Authority
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold" }}
              >
                JOB APPLICATION FORM
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{
                  width: "10vw",
                  backgroundColor: "#616161",
                  color: "#fff",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "#46008B",
                    backgroundColor: "#E0E0E0",
                  },
                }}
              >
                <DownloadIcon sx={{ mr: 1 }} />
                Download PDS
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Button
                onClick={() => fileInputRef?.current?.click()}
                sx={{
                  width: "10vw",
                  backgroundColor: "#616161",
                  color: "#fff",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "#46008B",
                    backgroundColor: "#E0E0E0",
                  },
                }}
              >
                <UploadIcon sx={{ mr: 1 }} />
                Upload PDS
              </Button>
              <input
                id="pdsFile"
                type="file"
                multiple={false}
                onChange={importPDS}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, mb: 8 }}>
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
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  sx={{ pr: 7, mb: 4 }}
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
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
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
            </Grid>

            <Grid container spacing={2} mb={4}>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <TextField
                  name="positionApplied"
                  label="Position Applied"
                  variant="outlined"
                  size="small"
                  value={formik.values.positionApplied}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched.positionApplied &&
                    Boolean(formik.errors.positionApplied)
                  }
                  helperText={
                    formik.touched.positionApplied &&
                    formik.errors.positionApplied
                  }
                  disabled={loading}
                  sx={{ width: "48.5%" }}
                  fullWidth
                />
                <TextField
                  name="salaryGrade"
                  label="Salary Grade"
                  variant="outlined"
                  size="small"
                  value={formik.values.salaryGrade}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched.salaryGrade &&
                    Boolean(formik.errors.salaryGrade)
                  }
                  helperText={
                    formik.touched.salaryGrade && formik.errors.salaryGrade
                  }
                  disabled={loading}
                  sx={{ width: "48.5%" }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <SelectEligibility
                  importFunction={importEligibility}
                  onEligibilityChange={handleEligibilityChange}
                  eligibilityType={eligibilityType}
                />
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* eslint-disable-next-line no-nested-ternary */}
                {eligibilityType === "Select Eligibility"
                  ? null
                  : eligibilityFile?.name === undefined
                  ? "No chosen file. Attach your eligibility file"
                  : `Chosen file: ${eligibilityFile?.name}`}
              </Grid>
            </Grid>
          </Box>
          <Divider>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              EDUCATIONAL BACKGROUND
            </Typography>
          </Divider>

          <Grid container spacing={2} mt={2} mb={8}>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }} />
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                ATTACH FILE
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                VIEW FILE
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                COLLEGE
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="collegeSchool"
                variant="outlined"
                size="small"
                value={formik.values.collegeSchool}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.collegeSchool &&
                  Boolean(formik.errors.collegeSchool)
                }
                helperText={
                  formik.touched.collegeSchool && formik.errors.collegeSchool
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="collegeYear"
                variant="outlined"
                size="small"
                value={formik.values.collegeYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.collegeYear &&
                  Boolean(formik.errors.collegeYear)
                }
                helperText={
                  formik.touched.collegeYear && formik.errors.collegeYear
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="collegeCourse"
                variant="outlined"
                size="small"
                value={formik.values.collegeCourse}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.collegeCourse &&
                  Boolean(formik.errors.collegeCourse)
                }
                helperText={
                  formik.touched.collegeCourse && formik.errors.collegeCourse
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AttachFileButton importFunction={importCollege} />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <VisibilityIcon />
              </Button>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                MASTERAL
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="masteralSchool"
                variant="outlined"
                size="small"
                value={formik.values.masteralSchool}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.masteralSchool &&
                  Boolean(formik.errors.masteralSchool)
                }
                helperText={
                  formik.touched.masteralSchool && formik.errors.masteralSchool
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="masteralYear"
                variant="outlined"
                size="small"
                value={formik.values.masteralYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.masteralYear &&
                  Boolean(formik.errors.masteralYear)
                }
                helperText={
                  formik.touched.masteralYear && formik.errors.masteralYear
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="masteralCourse"
                variant="outlined"
                size="small"
                value={formik.values.masteralCourse}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.masteralCourse &&
                  Boolean(formik.errors.masteralCourse)
                }
                helperText={
                  formik.touched.masteralCourse && formik.errors.masteralCourse
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AttachFileButton importFunction={importMasteral} />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <VisibilityIcon />
              </Button>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                DOCTORAL
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="doctoralSchool"
                variant="outlined"
                size="small"
                value={formik.values.doctoralSchool}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.doctoralSchool &&
                  Boolean(formik.errors.doctoralSchool)
                }
                helperText={
                  formik.touched.doctoralSchool && formik.errors.doctoralSchool
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="doctoralYear"
                variant="outlined"
                size="small"
                value={formik.values.doctoralYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.doctoralYear &&
                  Boolean(formik.errors.doctoralYear)
                }
                helperText={
                  formik.touched.doctoralYear && formik.errors.doctoralYear
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="doctoralCourse"
                variant="outlined"
                size="small"
                value={formik.values.doctoralCourse}
                onChange={formik.handleChange}
                onBlur={formik.handleBLur}
                error={
                  formik.touched.doctoralCourse &&
                  Boolean(formik.errors.doctoralCourse)
                }
                helperText={
                  formik.touched.doctoralCourse && formik.errors.doctoralCourse
                }
                disabled={loading}
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AttachFileButton importFunction={importDoctoral} />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <VisibilityIcon />
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              textAlign: "right",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ mr: 2, backgroundColor: "#616161" }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{ mr: 2, backgroundColor: "#616161" }}
            >
              <SaveIcon sx={{ mr: 1 }} />
              Save and Apply
            </Button>
          </Box>
          {error}
        </Box>
      </form>
    </Modal>
  );
}

AppForm.defaultProps = {
  handleClose: () => {},
};

AppForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
};

export default AppForm;

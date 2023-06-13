import React, { useState } from "react";
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
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import appformService from "services/appform-service";
import SelectEligibility from "components/Textfields/select-eligibility";
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
  const [pds, setPDS] = useState();
  const [college, setCollege] = useState();
  const [masteral, setMasteral] = useState();
  const [doctoral, setDoctoral] = useState();
  //   const [eligibilities, setEligibilities] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialAppForm,

    validationSchema: AppFormSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);

      //   const attachments = new FormData();
      //   attachments.append("pds", pds);
      //   attachments.append("college", college);
      //   attachments.append("masteral", masteral);
      //   attachments.append("doctoral", doctoral);

      const attachments = {
        pds,
        college,
        masteral,
        doctoral,
        // eligibilities: [
        //     {
        //         type: ,
        //         file: ,
        //         file_name: ,
        //     }
        // ]
      };

      appformService
        .addApplicant(formik.values, attachments)
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

  const uploadPDS = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setPDS(file);
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

  console.log(formik.values);

  return (
    <Modal open={open} onClose={handleClose}>
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
            <Typography component="h5" variant="h5" sx={{ fontWeight: "bold" }}>
              JOB APPLICATION FORM
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
              <DownloadIcon sx={{ mr: 1 }} />
              Download PDS
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              htmlFor="pdsFile"
              sx={{ backgroundColor: "#616161" }}
            >
              <UploadIcon sx={{ mr: 1 }} />
              Upload PDS
            </Button>
            <input
              id="pdsFile"
              type="file"
              multiple={false}
              onChange={uploadPDS}
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
                disabled={loading}
                sx={{ width: "48.5%" }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <SelectEligibility
                name="typeOfEligibility"
                disabled={loading}
                value={formik.values.typeOfEligibility}
                onChange={formik.handleChange}
                sx={{ pr: 7, width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              {formik.values.typeOfEligibility ? (
                <Box>
                  <Button
                    variant="contained"
                    htmlFor="eligibilityFile"
                    sx={{ backgroundColor: "#616161" }}
                  >
                    <AttachFileIcon sx={{ mr: 2 }} />
                    Attach Eligibility
                  </Button>
                  <input
                    id="eligibilityFile"
                    type="file"
                    style={{ display: "none" }}
                  />
                </Box>
              ) : null}
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
            <Button
              variant="contained"
              htmlFor="collegeFile"
              sx={{ backgroundColor: "#616161" }}
            >
              <AttachFileIcon />
            </Button>
            <input
              id="collegeFile"
              type="file"
              multiple={false}
              onChange={importCollege}
              style={{ display: "none" }}
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
            <Button
              variant="contained"
              htmlFor="masteralFile"
              sx={{ backgroundColor: "#616161" }}
            >
              <AttachFileIcon />
            </Button>
            <input
              id="masteralFile"
              type="file"
              multiple={false}
              onChange={importMasteral}
              style={{ display: "none" }}
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
            <Button
              variant="contained"
              htmlFor="doctoralFile"
              sx={{ backgroundColor: "#616161" }}
            >
              <AttachFileIcon />
            </Button>
            <input
              id="doctoralFile"
              type="file"
              multiple={false}
              onChange={importDoctoral}
              style={{ display: "none" }}
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
            type="submit"
            variant="contained"
            onClick={handleClose}
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
        {error}
      </Box>
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

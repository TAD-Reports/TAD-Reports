import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import NurserySchema from "../../../schemas/nursery-schema";
import nurseryService from "../../../services/nursery-service";
import TextFieldDatePicker from "../../../components/Textfields/date-picker";
import moment from "moment";

const NurseryUpdateModal = ({ open, onClose, selected }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleClose = () => {
    onClose?.();
  };

  const { uuid: nurseryId, ...nursery } = selected || {};

  console.log(nursery);

  const formik = useFormik({
    initialValues: nursery,

    validationSchema: NurserySchema,
    onSubmit: () => {
      setError("");
      setLoading(true);
      nurseryService
        .updateNursery({ ...formik?.values, uuid: nurseryId })
        .then(() => {})
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  const handleReportDateChange = (evt) => {
    const date = moment(evt); // Convert evt to Moment object
    if (date.isValid()) {
      const formattedDate = date.format("YYYY/MM/DD");
      formik.setFieldValue("report_date", formattedDate);
    }
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              height: "80vh",
              width: "80vw",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "80vw",
                position: "absolute",
                textAlign: "right",
              }}
            >
              <IconButton>
                <CloseIcon
                  color="error"
                  onClick={handleClose}
                  sx={{ cursor: "pointer" }}
                />
              </IconButton>
            </Box>
            <Box>
              <Typography>{nurseryId}</Typography>
            </Box>

            <Grid container spacing={0}>
              <Grid item xs={4}>
                <TextFieldDatePicker
                  label="Report Date"
                  disabled={loading}
                  value={formik.values.report_date}
                  onChange={handleReportDateChange}
                  error={
                    formik.touched.report_date &&
                    Boolean(formik.errors.report_date)
                  }
                  helperText={
                    formik.touched.report_date && formik.errors.report_date
                  }
                />
              </Grid>
              {/* <Grid item xs={4}>
                <TextFieldDatePicker
                  label="Date Established"
                  disabled={loading}
                  value={formik.values.date_established}
                  onChange={(evt) =>
                    formik?.setFieldValue(
                      "date_established",
                      dayjs(evt).format("YYYY-MM-DD")
                    )
                  }
                  error={
                    formik.touched.date_established &&
                    Boolean(formik.errors.date_established)
                  }
                  helperText={
                    formik.touched.date_established &&
                    formik.errors.date_established
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextFieldDatePicker
                  label="Period of MOA"
                  disabled={loading}
                  value={formik.values.period_of_moa}
                  onChange={(evt) =>
                    formik?.setFieldValue(
                      "period_of_moa",
                      dayjs(evt).format("YYYY-MM-DD")
                    )
                  }
                  error={
                    formik.touched.period_of_moa &&
                    Boolean(formik.errors.period_of_moa)
                  }
                  helperText={
                    formik.touched.period_of_moa && formik.errors.period_of_moa
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="region"
                  label="Region"
                  disabled={loading}
                  value={formik.values.region}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={formik.touched.region && Boolean(formik.errors.region)}
                  helperText={formik.touched.region && formik.errors.region}
                  variant="outlined"
                  sx={{ pr: 7 }}
                  size="small"
                  fullWidth
                />
              </Grid> */}
              <Grid item xs={4}>
                <TextField
                  name="lastName"
                  label="Lastname"
                  disabled={loading}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  variant="outlined"
                  sx={{ pr: 7 }}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default NurseryUpdateModal;

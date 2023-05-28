import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import TextFieldDatePicker from "components/Textfields/date-picker";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import NurserySchema from "../../../schemas/nursery-schema";
import nurseryService from "../../../services/nursery-service";

export default function NurseryUpdateModal({
  open,
  onClose,
  selected,
  onSuccess,
}) {
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
      const details = {
        reportDate: formik.values.report_date,
        fundedBy: formik.values.funded_by,
        region: formik.values.region,
        province: formik.values.province,
        district: formik.values.district,
        municipality: formik.values.municipality,
        barangay: formik.values.barangay,
        cooperator: formik.values.complete_name_of_cooperator_organization,
        establishedDate: formik.values.date_established,
        area: formik.values.area_in_hectares_ha,
        variety: formik.values.variety_used,
        moa: formik.values.period_of_moa,
        remarks: formik.values.remarks,
        status: formik.values.status,
      };
      setError("");
      setLoading(true);
      nurseryService
        .updateNursery(nurseryId, details)
        .then(() => {
          onSuccess?.();
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
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowX: "auto",
        }}
      >
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Card
            sx={{
              height: "80vh",
              width: "70vw",
              p: 4,
            }}
          >
            <Box
              sx={{
                width: "70%",
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
              <Typography sx={{ fontSize: 20, my: 3 }}>
                Update Nursery
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "70vh",
                mt: 5,
              }}
            >
              <Box className="modal-content">
                <Grid container spacing={0}>
                  <Grid item xs={4} mb={4}>
                    <TextFieldDatePicker
                      label="Report Date"
                      disabled={loading}
                      value={dayjs(formik.values.report_date)}
                      onChange={(evt) =>
                        formik?.setFieldValue(
                          "report_date",
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
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextFieldDatePicker
                      label="Date Established"
                      disabled={loading}
                      value={dayjs(formik.values.date_established)}
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
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="region"
                      label="Region"
                      disabled={loading}
                      value={formik.values.region}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.region && Boolean(formik.errors.region)
                      }
                      helperText={formik.touched.region && formik.errors.region}
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="area_in_hectares_ha"
                      label="Area In Hectares (Ha)"
                      disabled={loading}
                      value={formik.values.area_in_hectares_ha}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.area_in_hectares_ha &&
                        Boolean(formik.errors.area_in_hectares_ha)
                      }
                      helperText={
                        formik.touched.area_in_hectares_ha &&
                        formik.errors.area_in_hectares_ha
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="barangay"
                      label="Barangay"
                      disabled={loading}
                      value={formik.values.barangay}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.barangay &&
                        Boolean(formik.errors.barangay)
                      }
                      helperText={
                        formik.touched.barangay && formik.errors.barangay
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="complete_name_of_cooperator_organization"
                      label="Name of Cooperator"
                      disabled={loading}
                      value={
                        formik.values.complete_name_of_cooperator_organization
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched
                          .complete_name_of_cooperator_organization &&
                        Boolean(
                          formik.errors.complete_name_of_cooperator_organization
                        )
                      }
                      helperText={
                        formik.touched
                          .complete_name_of_cooperator_organization &&
                        formik.errors.complete_name_of_cooperator_organization
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="funded_by"
                      label="Funded By"
                      disabled={loading}
                      value={formik.values.funded_by}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.funded_by &&
                        Boolean(formik.errors.funded_by)
                      }
                      helperText={
                        formik.touched.funded_by && formik.errors.funded_by
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="municipality"
                      label="Municipality"
                      disabled={loading}
                      value={formik.values.municipality}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.municipality &&
                        Boolean(formik.errors.municipality)
                      }
                      helperText={
                        formik.touched.municipality &&
                        formik.errors.municipality
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="period_of_moa"
                      label="Period of MOA"
                      type="number"
                      disabled={loading}
                      value={formik.values.period_of_moa}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.period_of_moa &&
                        Boolean(formik.errors.period_of_moa)
                      }
                      helperText={
                        formik.touched.period_of_moa &&
                        formik.errors.period_of_moa
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="province"
                      label="Province"
                      disabled={loading}
                      value={formik.values.province}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.province &&
                        Boolean(formik.errors.province)
                      }
                      helperText={
                        formik.touched.province && formik.errors.province
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              {error}
              {open && (
                <Box
                  className="modal-action"
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    height: 100,
                    mt: 20,
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      mr: 5,
                      height: 40,
                      width: 100,
                      backgroundColor: "#76a66e",
                      color: "#fff",
                      "&:hover": {
                        textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                        color: "black",
                        backgroundColor: "#60ec60",
                      },
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    sx={{
                      mr: 5,
                      height: 40,
                      width: 100,
                      backgroundColor: "#76a66e",
                      color: "#fff",
                      "&:hover": {
                        textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                        color: "black",
                        backgroundColor: "#60ec60",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </Box>
          </Card>
        </form>
      </Box>
    </Modal>
  );
}

NurseryUpdateModal.defaultProps = {
  open: false,
  onClose: () => {},
  selected: null,
  onSuccess: () => {},
};
// Typechecking props of the MDAlert
NurseryUpdateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.object,
  onSuccess: PropTypes.func,
};

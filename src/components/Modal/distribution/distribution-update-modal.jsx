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
import DistribSchema from "../../../schemas/distribution-schema";
import distribService from "../../../services/distribution-service";

export default function DistributionUpdateModal({
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

  const { uuid: distribId, ...distribution } = selected || {};

  console.log(distribution);

  const formik = useFormik({
    initialValues: distribution,

    validationSchema: DistribSchema,
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
      distribService
        .updateDistribution(distribId, details)
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
                Update Distribution
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
                      name="type_of_planting_materials"
                      label="Planting Material"
                      disabled={loading}
                      value={formik.values.type_of_planting_materials}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.type_of_planting_materials &&
                        Boolean(formik.errors.type_of_planting_materials)
                      }
                      helperText={
                        formik.touched.type_of_planting_materials &&
                        formik.errors.type_of_planting_materials
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="district"
                      label="District"
                      disabled={loading}
                      value={formik.values.district}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.district &&
                        Boolean(formik.errors.district)
                      }
                      helperText={
                        formik.touched.district && formik.errors.district
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
                      name="name_of_cooperative_individual"
                      label="Name of Cooperator"
                      disabled={loading}
                      value={formik.values.name_of_cooperative_individual}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.name_of_cooperative_individual &&
                        Boolean(formik.errors.name_of_cooperative_individual)
                      }
                      helperText={
                        formik.touched.name_of_cooperative_individual &&
                        formik.errors.name_of_cooperative_individual
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="no_of_pm_available_during_establishment"
                      label="No. of PM Available"
                      disabled={loading}
                      value={
                        formik.values.no_of_pm_available_during_establishment
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched
                          .no_of_pm_available_during_establishment &&
                        Boolean(
                          formik.errors.no_of_pm_available_during_establishment
                        )
                      }
                      helperText={
                        formik.touched
                          .no_of_pm_available_during_establishment &&
                        formik.errors.no_of_pm_available_during_establishment
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
                      name="variety"
                      label="Variety"
                      disabled={loading}
                      value={formik.values.variety}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.variety && Boolean(formik.errors.variety)
                      }
                      helperText={
                        formik.touched.variety && formik.errors.variety
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
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="no_of_pm_distributed"
                      label="No. Of PM Distributed"
                      disabled={loading}
                      value={formik.values.no_of_pm_distributed}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.no_of_pm_distributed &&
                        Boolean(formik.errors.no_of_pm_distributed)
                      }
                      helperText={
                        formik.touched.no_of_pm_distributed &&
                        formik.errors.no_of_pm_distributed
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="name_of_recipient_bene"
                      label="Name of Recipient Benefits"
                      disabled={loading}
                      value={formik.values.name_of_recipient_bene}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.name_of_recipient_bene &&
                        Boolean(formik.errors.name_of_recipient_bene)
                      }
                      helperText={
                        formik.touched.name_of_recipient_bene &&
                        formik.errors.name_of_recipient_bene
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="address_of_beneficiary"
                      label="Address of Beneficiary"
                      disabled={loading}
                      value={formik.values.address_of_beneficiary}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.address_of_beneficiary &&
                        Boolean(formik.errors.address_of_beneficiary)
                      }
                      helperText={
                        formik.touched.address_of_beneficiary &&
                        formik.errors.address_of_beneficiary
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="gender"
                      label="Gender"
                      disabled={loading}
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                      helperText={formik.touched.gender && formik.errors.gender}
                      variant="outlined"
                      size="small"
                      sx={{ width: "20vw" }}
                    />
                  </Grid>
                  <Grid item xs={4} mb={4}>
                    <TextField
                      name="category"
                      label="Category"
                      disabled={loading}
                      value={formik.values.category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.category &&
                        Boolean(formik.errors.category)
                      }
                      helperText={
                        formik.touched.category && formik.errors.category
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
                <>
                  <Box sx={{ mx: 4, mt: 2, mb: 8 }}>
                    <TextField
                      name="remarks"
                      label="Remarks"
                      disabled={loading}
                      value={formik.values.remarks}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.remarks && Boolean(formik.errors.remarks)
                      }
                      helperText={
                        formik.touched.remarks && formik.errors.remarks
                      }
                      variant="outlined"
                      multiline
                      rows={4}
                      maxRows={4}
                      fullWidth
                    />
                  </Box>
                  <Box
                    className="modal-action"
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      height: 100,
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
                </>
              )}
            </Box>
          </Card>
        </form>
      </Box>
    </Modal>
  );
}

DistributionUpdateModal.defaultProps = {
  open: false,
  onClose: () => {},
  selected: null,
  onSuccess: () => {},
};
// Typechecking props of the MDAlert
DistributionUpdateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.object,
  onSuccess: PropTypes.func,
};

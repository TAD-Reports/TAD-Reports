import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/co/Header";

function JobForm() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    location: yup.string().required("required"),
    description: yup.string().required("required"),
    salary: yup.string().required("required"),
    requirements: yup.string().required("required"),
    benefits: yup.string().required("required"),
  });
  const initialValues = {
    title: "",
    location: "",
    description: "",
    salary: "",
    requirements: "",
    benefits: "",
  };

  return (
    <Box m="20px">
      <Header title="CREATE JOB" subtitle="Create a New Job Position" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="Title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="Location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="Description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Salary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="Salary"
                error={!!touched.salary && !!errors.salary}
                helperText={touched.salary && errors.salary}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Requirements"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="Requirements"
                error={!!touched.requirements && !!errors.requirements}
                helperText={touched.requirements && errors.requirements}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Benefits"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.benefits}
                name="Benefits"
                error={!!touched.benefits && !!errors.benefits}
                helperText={touched.benefits && errors.benefits}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Job
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default JobForm;

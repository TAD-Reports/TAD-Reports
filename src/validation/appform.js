import { string, object } from "yup";

const ApplicationFormValidation = object().shape({
  lastName: string().required("Required"),
  firstName: string().required("Required"),
  middleName: string(),
  suffix: string(),
  positionApplied: string().required("Required"),
  salaryGrade: string().required("Required"),
  collegeSchool: string().required("Required"),
  collegeYear: string().required("Required"),
  collegeCourse: string().required("Required"),
  masteralSchool: string().required("Required"),
  masteralYear: string().required("Required"),
  masteralCourse: string().required("Required"),
  doctoralSchool: string().required("Required"),
  doctoralYear: string().required("Required"),
  doctoralCourse: string().required("Required"),
});

export const initialAppForm = {
  lastName: "",
  firstName: "",
  middleName: "",
  suffix: "",
  positionApplied: "",
  salaryGrade: "",
  collegeSchool: "",
  collegeYear: "",
  collegeCourse: "",
  masteralSchool: "",
  masteralYear: "",
  masteralCourse: "",
  doctoralSchool: "",
  doctoralYear: "",
  doctoralCourse: "",
};
export default ApplicationFormValidation;

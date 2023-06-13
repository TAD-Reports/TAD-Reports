import { string, object } from "yup";

const ApplicationFormSchema = object().shape({
  lastName: string().required("Required"),
  firstName: string().required("Required"),
  middleName: string().required("Required"),
  suffix: string().required("Required"),
  positionApplied: string().required("Required"),
  salaryGrade: string().required("Required"),
  typeOfEligibility: string().required("Required"),
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
  typeOfEligibility: "",
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
export default ApplicationFormSchema;

import { string, object } from "yup";

export const RegisterValidation = object().shape({
  username: string().required("Required"),
  password: string().required("Required"),
  role: string().required("Required"),
});

export const initialAccount = {
  username: "",
  password: "",
  role: "",
};
export default RegisterValidation;

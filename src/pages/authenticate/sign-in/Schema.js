import { string, object } from "yup";

export const Schema = object().shape({
  username: string().required("Username is Required"),
  password: string().required("Password is Required"),
});

export default Schema;

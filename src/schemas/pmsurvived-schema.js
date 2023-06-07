import { string, object } from "yup";

const PmsurvivedSchema = object().shape({
  region: string().required("Required"),
  area_in_hectares_ha: string().required("Required"),
  barangay: string().required("Required"),
  complete_name_of_cooperator_organization: string().required("Required"),
  funded_by: string().required("Required"),
  municipality: string().required("Required"),
  period_of_moa: string().required("Required"),
  province: string().required("Required"),
});

export const initialPmsurvived = {
  region: "",
  area_in_hectares_ha: "",
  barangay: "",
  complete_name_of_cooperator_organization: "",
  funded_by: "",
  municipality: "",
  period_of_moa: "",
  province: "",
};
export default PmsurvivedSchema;

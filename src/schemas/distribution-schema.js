import { string, object } from "yup";

const DistributionSchema = object().shape({
  region: string().required("Required"),
  type_of_planting_materials: string().required("Required"),
  barangay: string().required("Required"),
  complete_name_of_cooperator_organization: string().required("Required"),
  funded_by: string().required("Required"),
  municipality: string().required("Required"),
  period_of_moa: string().required("Required"),
  province: string().required("Required"),
});

export const initialDistribution = {
  region: "",
  area_in_hectares_ha: "",
  barangay: "",
  complete_name_of_cooperator_organization: "",
  funded_by: "",
  municipality: "",
  period_of_moa: "",
  province: "",
};
export default DistributionSchema;

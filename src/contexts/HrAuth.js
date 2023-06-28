import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "./ContextProvider";

export default function HrAuth({ allowedRole }) {
  const { auth } = useStateContext();
  const location = useLocation();

  const hasAllowedRole = allowedRole === auth?.role;

  // eslint-disable-next-line no-nested-ternary, react/prop-types
  return hasAllowedRole ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}

HrAuth.defaultProps = {
  allowedRole: "",
};

HrAuth.propTypes = {
  allowedRole: PropTypes.string,
};

import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "./ContextProvider";

export default function RequireAuth({ allowedRoles }) {
  const { auth } = useStateContext();
  const location = useLocation();

  const hasAllowedRole =
    allowedRoles && allowedRoles.some((roleObject) => roleObject[auth.role]);

  // eslint-disable-next-line no-nested-ternary, react/prop-types
  return hasAllowedRole ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}

RequireAuth.defaultProps = {
  allowedRoles: null,
};

RequireAuth.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allowedRoles: PropTypes.object,
};

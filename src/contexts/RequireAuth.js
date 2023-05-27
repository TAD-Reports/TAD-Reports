// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
//     <Outlet />
//   ) : auth?.user ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/sign-in" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;

import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth() {
  const location = useLocation();

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;

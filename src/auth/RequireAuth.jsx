// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "./useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//     const { auth } = useAuth();
//     const location = useLocation();

//     return (
//         auth?.roles?.find(role => allowedRoles?.includes(role))
//             ? <Outlet />
//             : auth?.user
//                 ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//                 : <Navigate to="/login" state={{ from: location }} replace />
//     );
// }

// export default RequireAuth;
import { Outlet, Navigate, useLocation } from "react-router-dom";

import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  // Check if auth.roles is an array before calling the find function
  const isAuthenticated =
    Array.isArray(auth.roles) &&
    auth.roles.find((role) => allowedRoles?.includes(role));

  return isAuthenticated ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

// import { useLocation, Navigate, Outlet } from "react-router-dom"
// import useAuth from "../../hooks/useAuth"

// const RequireAuth = ({ allowedRoles }) => {
//     const location = useLocation()
//     const { roles } = useAuth()

//     const content = (
//         roles.some(role => allowedRoles.includes(role))
//             ? <Outlet />
//             : <Navigate to="/login" state={{ from: location }} replace />
//     )

//     return content
// }
// export default RequireAuth

// ///////////////////////////////////

import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { roles } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <NoAccessMessage onBack={handleBack} />
  );
};

const NoAccessMessage = ({ onBack }) => (
  <div className="flex justify-center items-center h-screen">
    <div>
      <h1 className="text-red-500 font-bold text-2xl">
        You don't have access to this page
      </h1>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onBack}
      >
        Go Back
      </button>
    </div>
  </div>
);

export default RequireAuth;


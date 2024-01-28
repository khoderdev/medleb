// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Navigate } from 'react-router-dom';
// import { selectUserRole } from './app/auth/authSlice';

// const ProtectedRoute = ({ roleRequired, ...rest }) => {
//   const userRole = useSelector(selectUserRole);

//   return (
//     <Route
//       {...rest}
//       element={
//         userRole === roleRequired ? (
//           <Navigate replace to={rest.path} />
//         ) : (
//           <Navigate replace to="/unauthorized" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { selectUserRole } from './app/auth/authSlice';

const ProtectedRoute = ({ roleRequired, ...rest }) => {
  const userRole = useSelector(selectUserRole);

  if (userRole === roleRequired) {
    return <Route {...rest} />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
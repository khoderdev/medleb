// // useAuth.js
// import { useContext } from 'react';
// import AuthContext from './AuthProvider';

// const useAuth = () => {
//   const authContext = useContext(AuthContext);

//   if (!authContext) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return authContext;
// };

// export default useAuth;

// useAuth.js
import { useContext } from 'react';
import AuthContext from './AuthProvider'; // Adjust the path based on your file structure

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;


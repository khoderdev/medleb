// AuthProvider.js
import { useState, createContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ accessToken: null });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;





// import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     // const [auth, setAuth] = useState({});
// const [auth, setAuth] = useState({ accessToken: null });

//     return (
//         <AuthContext.Provider value={{ auth, setAuth }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext;

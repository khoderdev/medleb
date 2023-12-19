import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [UserName, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [UserName, Password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ UserName, Password }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //     withCredentials: true,
      //   }
      // );

// in order to work and access from mobile devices
      const response = await axios.post(
        LOGIN_URL,
        { UserName, Password },
        {
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ UserName, Password, roles, accessToken });
      setUser("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="login-section flex flex-col justify-start self-center m-20 p-4 bg-[#259f83] w-full max-w-[440px] max-h-[480px] rounded-xl">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className="text-3xl text-center">Login In</h1>
      <form
        className="flex flex-col justify-evenly grow pb-6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username:</label>
        <input
          className="w-full mb-4 rounded-full border border-[#259f8359] bg-white px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={UserName}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="w-full rounded-full border border-[#259f8359] bg-white px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
          required
        />
        <button className="w-fit self-center rounded-lg py-2 px-7 my-5 bg-slate-50">
          Log In
        </button>
      </form>
      <p>
        Create an Account
        <br />
        <span className="line">
          <Link className="hover:text-[#10ffc7] " to="/register">
            Sign Up
          </Link>
        </span>
      </p>
    </section>
  );
};

export default Login;



// Login.js
// import React from 'react';
// import api from "../api/axios";

// const Login = () => {
//   const handleLogin = async () => {
//     try {
//       const response = await api.post('/login');
//       console.log(response.data); // Should contain accessToken
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className='w-96 flex  self-center justify-center p-20 items-center'>
//       <h2 className='text-xl'>Login</h2>
//       <button className='bg-blue-500' onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

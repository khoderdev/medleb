import { useRef, useState, useEffect } from "react";
import useAuth from "../context/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";

const LOGIN_URL = "/auth";

const Login = ({ switchToRegister }) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [accessToken, setAccessToken] = useState(null); // New state for accessToken

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("AccessToken:", accessToken); // Log accessToken

    try {
      const response = await axios.post(
        "http://1.1.1.252:3500/api/users/v1.0/authenticate",
        { username, password },
        {
          withCredentials: true,
        }
      );

      const newAccessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      // Save the access token and other authentication details in the context
      setAuth({ username, roles, accessToken: newAccessToken });

      // Save the access token in the component state for reuse
      setAccessToken(newAccessToken);

      // Continue with your existing code
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
    <div className="flex flex-col items-center p-4 pt-16 text-left overflow-hidden bg-white-bg dark:bg-black-bg dark:text-white-text h-[100dvh]">
      <section className="login-section flex flex-col justify-start self-center sm:max-w-[480px] p-4 bg-white-contents dark:bg-black-contents w-full rounded-xl">
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
            className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={username}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <div className="flex justify-end w-full mt-4">
            <button className="med-btn w-fit py-2 px-7 my-2 hover:text-slate-50 hover:bg-green-pri">
              Log In
            </button>
          </div>
        </form>
        <p>
          Create an Account
          <br />
          <span className="line">
            <Link className="text-green-pri hover:text-[#10ffc7]" onClick={switchToRegister}>
              Sign Up
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
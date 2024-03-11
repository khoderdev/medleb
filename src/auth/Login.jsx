import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "./axios";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "./useAuth";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
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
    <section className="w-96 bg-white-contents dark:text-white-text dark:bg-black-contents mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
      <p
        ref={errRef}
        className={`${
          errMsg ? "text-red-500 mb-4" : "offscreen"
        } text-sm italic`}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className="text-3xl text-green-pri text-center mb-4">Log in</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-pri text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Log in
        </button>
      </form>
      <br />
      <p className="text-center">
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register" className="text-green-pri hover:underline">
            Sign Up
          </Link>
        </span>
      </p>
    </section>
  );
};

export default Login;

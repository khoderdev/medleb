import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = ({ switchToLogin }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [UserName, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [Password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Countdown-related state
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USERNAME_REGEX.test(UserName));
  }, [UserName]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(Password));
    setValidMatch(Password === matchPassword);
  }, [Password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [UserName, Password, matchPassword]);

  const startCountdown = () => {
    // Start countdown after successful registration
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Stop countdown after 3 seconds and reset the countdown
    setTimeout(() => {
      clearInterval(countdownTimer);
      setCountdown(3);
      // Redirect to the profile page after the countdown
      // You can use your preferred method for navigation (e.g., react-router-dom)
      window.location.href = "./profile";
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USERNAME_REGEX.test(UserName);
    const v2 = PASSWORD_REGEX.test(Password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ UserName, Password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);

      // Clear state and controlled inputs
      setUser("");
      setPassword("");
      setMatchPassword("");

      // Start the countdown and redirect after 3 seconds
      startCountdown();
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col items-center text-left p-4 pt-16 overflow-hidden bg-white-bg dark:bg-black-bg dark:text-white-text h-[100dvh]">
      {success ? (
        <section className="login-section flex flex-col justify-start self-center sm:max-w-[480px] p-4 bg-white-contents dark:bg-black-contents w-full rounded-xl">
          <h1>Success!</h1>
          <p>
            <a href="auth">Sign In</a>
          </p>
          <div>
            Redirecting to <Link to="/profile">your profile page</Link> in{" "}
            {countdown} seconds.
          </div>
        </section>
      ) : (
        <section className="register-section flex flex-col justify-center self-center p-4 bg-white-contents dark:bg-black-contents w-full sm:max-w-[480px] rounded-xl">
          <p
            ref={errRef}
            className={errMsg ? "offscreen" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="text-3xl text-center mb-2">Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid ml-2" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !UserName ? "hide" : "invalid ml-2"}
              />
            </label>
            <input
              className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={UserName}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={`text-green-pri ${
                userFocus && UserName && !validName
                  ? "instructions"
                  : "offscreen"
              }`}
            >
              {userFocus && UserName && !validName && (
                <>
                  <FontAwesomeIcon
                    className="mr-2 dark:text-white-bg"
                    icon={faInfoCircle}
                  />
                  At least 4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, "_" only allowed.
                </>
              )}
            </p>

            <div className="password-container flex flex-col my-2 sm:mt-4">
              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`${validPassword ? "valid ml-2" : "hide"}`}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={
                    validPassword || !Password ? "hide" : "invalid valid ml-2"
                  }
                />
              </label>
              <div className="relative">
                <input
                  className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={Password}
                  required
                  autoComplete="off"
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="Passwordnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              <p
                id="Passwordnote"
                className={`text-green-pri ${
                  PasswordFocus && !validPassword ? "instructions" : "offscreen"
                }`}
              >
                {PasswordFocus && !validPassword && (
                  <>
                    <FontAwesomeIcon
                      className="mr-2 dark:text-white-bg"
                      icon={faInfoCircle}
                    />
                    Must be at least 8 to 24 characters.
                    <br />
                    Must include upper/lower case letters, number and symbol: ({" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>)
                  </>
                )}
              </p>
            </div>

            <div className="password-container flex flex-col my-2 sm:mt-4">
              <label htmlFor="confirm_Password">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={
                    validMatch && matchPassword ? "valid ml-2" : "hide"
                  }
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={
                    validMatch || !matchPassword ? "hide" : "invalid ml-2"
                  }
                />
              </label>
              <div className="relative">
                <input
                  className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                  type={showPassword ? "text" : "password"}
                  id="confirm_Password"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  value={matchPassword}
                  required
                  autoComplete="off"
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              <p
                id="confirmnote"
                className={`text-green-pri ${
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }`}
              >
                {matchFocus && !validMatch && (
                  <>
                    <FontAwesomeIcon
                      className="mr-2 dark:text-white-bg"
                      icon={faInfoCircle}
                    />
                    Must match the first password above.
                  </>
                )}
              </p>
            </div>

            <div className="flex justify-between items-center pt-6">
              <div className="flex flex-col">
                Already a user?
                <button
                  onClick={switchToLogin}
                  className="med-btn-pri py-2  px-7 my-2 hover:text-slate-50 hover:bg-green-pri"
                >
                  Login
                </button>
              </div>

              <button
                className="med-btn-pri w-fit cursor-pointer self-center py-2 px-7 mt-10 hover:text-slate-50 hover:bg-green-pri border-2 hover:border-2 hover:border-white-text"
                disabled={!validName || !validPassword || !validMatch}
              >
                Register
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default Register;
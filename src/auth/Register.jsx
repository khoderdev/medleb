// import { useRef, useState, useEffect } from "react";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "./axios";
// import { Link } from "react-router-dom";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = "/register";

// const Register = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState("");
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setValidName(USER_REGEX.test(user));
//   }, [user]);

//   useEffect(() => {
//     setValidPwd(PWD_REGEX.test(pwd));
//     setValidMatch(pwd === matchPwd);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd, matchPwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if button enabled with JS hack
//     const v1 = USER_REGEX.test(user);
//     const v2 = PWD_REGEX.test(pwd);
//     if (!v1 || !v2) {
//       setErrMsg("Invalid Entry");
//       return;
//     }
//     try {
//       const response = await axios.post(
//         REGISTER_URL,
//         JSON.stringify({ user, pwd }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       // TODO: remove console.logs before deployment
//       console.log(JSON.stringify(response?.data));
//       //console.log(JSON.stringify(response))
//       setSuccess(true);
//       //clear state and controlled inputs
//       setUser("");
//       setPwd("");
//       setMatchPwd("");
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 409) {
//         setErrMsg("Username Taken");
//       } else {
//         setErrMsg("Registration Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <>
//       {success ? (
//         <section className="text-center mt-16">
//           <h1 className="text-3xl mb-4">Success!</h1>
//           <p>
//             <Link to="/login" className="text-green-500 hover:underline">
//               Sign In
//             </Link>
//           </p>
//         </section>
//       ) : (
//         <section className="max-w-md mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
//           <p
//             ref={errRef}
//             className={errMsg ? "text-red-500 mb-4" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <h1 className="text-3xl mb-4">Register</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="username" className="block mb-1">
//                 Username:
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 ref={userRef}
//                 autoComplete="off"
//                 onChange={(e) => setUser(e.target.value)}
//                 value={user}
//                 required
//                 className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
//                 aria-invalid={validName ? "false" : "true"}
//                 aria-describedby="uidnote"
//                 onFocus={() => setUserFocus(true)}
//                 onBlur={() => setUserFocus(false)}
//               />
//               <p
//                 id="uidnote"
//                 className={
//                   userFocus && user && !validName
//                     ? "text-sm text-gray-500"
//                     : "offscreen"
//                 }
//               >
//                 {validName ? (
//                   <FontAwesomeIcon
//                     icon={faCheck}
//                     className="text-green-500 mr-1"
//                   />
//                 ) : (
//                   <FontAwesomeIcon
//                     icon={faTimes}
//                     className="text-red-500 mr-1"
//                   />
//                 )}
//                 4 to 24 characters. Must begin with a letter. Letters, numbers,
//                 underscores, hyphens allowed.
//               </p>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block mb-1">
//                 pwd:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 onChange={(e) => setPwd(e.target.value)}
//                 value={pwd}
//                 required
//                 className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
//                 aria-invalid={validPwd ? "false" : "true"}
//                 aria-describedby="pwdnote"
//                 onFocus={() => setPwdFocus(true)}
//                 onBlur={() => setPwdFocus(false)}
//               />
//               <p
//                 id="pwdnote"
//                 className={
//                   pwdFocus && !validPwd ? "text-sm text-gray-500" : "offscreen"
//                 }
//               >
//                 8 to 24 characters. Must include uppercase and lowercase
//                 letters, a number and a special character. Allowed special
//                 characters: ! @ # $ %
//               </p>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="confirm_pwd" className="block mb-1">
//                 Confirm pwd:
//               </label>
//               <input
//                 type="password"
//                 id="confirm_pwd"
//                 onChange={(e) => setMatchPwd(e.target.value)}
//                 value={matchPwd}
//                 required
//                 className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
//                 aria-invalid={validMatch ? "false" : "true"}
//                 aria-describedby="confirmnote"
//                 onFocus={() => setMatchFocus(true)}
//                 onBlur={() => setMatchFocus(false)}
//               />
//               <p
//                 id="confirmnote"
//                 className={
//                   matchFocus && !validMatch
//                     ? "text-sm text-gray-500"
//                     : "offscreen"
//                 }
//               >
//                 Must match the first password input field.
//               </p>
//             </div>

//             <button
//               type="submit"
//               disabled={!validName || !validPwd || !validMatch}
//               className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
//             >
//               Sign Up
//             </button>
//           </form>
//           <p className="text-center">
//             Already registered?
//             <br />
//             <Link to="/" className="text-green-500 hover:underline">
//               Sign In
//             </Link>
//           </p>
//         </section>
//       )}
//     </>
//   );
// };

// export default Register;

import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "./axios";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
      setMatchPwd("");
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
        <section className="login-section flex flex-col justify-start self-center sm:max-w-[480px] p-4 bg-white-contents dark:bg-black-contents w-96 rounded-xl">
          <h1 className="text-3xl text-green-pri text-center mb-4">Success!</h1>
          <p>
            <a href="login">Log In</a>
          </p>
          <div>
            Redirecting to <Link to="/profile">your profile page</Link> in
            <span className="mx-1">{countdown}</span> seconds.
          </div>
        </section>
      ) : (
        <section className="register-section flex flex-col justify-center self-center p-4 bg-white-contents dark:bg-black-contents w-full sm:max-w-96 rounded-xl">
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
                className={validName || !user ? "hide" : "invalid ml-2"}
              />
            </label>
            <input
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={`text-green-pri ${
                userFocus && user && !validName ? "instructions" : "offscreen"
              }`}
            >
              {userFocus && user && !validName && (
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
                pwd:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`${validPwd ? "valid ml-2" : "hide"}`}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !pwd ? "hide" : "invalid valid ml-2"}
                />
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  autoComplete="off"
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="Passwordnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              <p
                id="Passwordnote"
                className={`text-green-pri ${
                  pwdFocus && !validPwd ? "instructions" : "offscreen"
                }`}
              >
                {pwdFocus && !validPwd && (
                  <>
                    <FontAwesomeIcon
                      className="mr-2 dark:text-white-bg"
                      icon={faInfoCircle}
                    />
                    Must be at least 8 to 24 characters.
                    <br />
                    Must include upper/lower case letters, number and symbol: (
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>)
                  </>
                )}
              </p>
            </div>

            <div className="password-container flex flex-col my-2 sm:mt-4">
              <label htmlFor="confirm_Password">
                Confirm pwd:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPwd ? "valid ml-2" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPwd ? "hide" : "invalid ml-2"}
                />
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
                  type={showPassword ? "text" : "password"}
                  id="confirm_Password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  autoComplete="off"
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-700"
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
                <span className="line">
                  <Link className="text-green-pri hover:underline" to="/login">
                    Log in
                  </Link>
                </span>
              </div>

              <button
                className="w-fit cursor-pointer px-4 py-2 bg-green-pri text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={!validName || !validPwd || !validMatch}
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

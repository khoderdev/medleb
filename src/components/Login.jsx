import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Login = ({ switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://192.168.10.88:3010/api/users/v1.0/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const responseData = await response.json();
      console.log("Server response:", responseData);

      if (response.ok) {
        const { token } = responseData.userDetails;
        localStorage.setItem("accessToken", token); // Save token to localStorage
        console.log("Token saved to localStorage:", token);
      } else {
        setError("Login failed: Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed: An unexpected error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center text-left p-4 pt-16 overflow-hidden bg-white-bg dark:bg-black-bg dark:text-white-text h-[100dvh]">
      <section className="login-section bg-white shadow-md rounded-xl p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-sm font-medium">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 mb-2 w-full rounded-full border border-[#00a65100] dark:text-white-text dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-[3rem] transform -translate-y-1/2 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-gray-500"
              />
            </button>
            {/* </div> */}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md py-2 hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <button
            onClick={switchToRegister}
            className="text-green-500 hover:underline focus:outline-none"
          >
            Register
          </button>
        </p>
      </section>
    </div>
  );
};

export default Login;

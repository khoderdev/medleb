/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ switchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // Validate and sanitize inputs
    if (!username || !password) {
      setError('Login failed: Invalid credentials');
      return;
    }

    try {
      const response = await fetch('http://85.112.70.8:3010/api/users/v1.0/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        setError('Login failed: Invalid credentials');
        return;
      }

      const responseData = await response.json();
      const { token } = responseData.userDetails;
      localStorage.setItem('accessToken', token); // Save token to localStorage
      console.log('Token saved to localStorage:', token);
      navigate('/'); // Redirect to dashboard on successful login
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed: An unexpected error occurred');
    }
  };

  return (
    <div className="flex justify-center items-center 2xl:mt-[-4rem] h-full">
      <section className="login-section bg-white-bg dark:bg-black-bg dark:text-white-text shadow-md rounded-xl p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4  text-left">
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

          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-sm font-medium">
              Password:
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
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
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
            </button>
            {/* </div> */}
          </div>
          <button
            type="submit"
            className="w-28 bg-green-500 text-white rounded-md py-2 hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-left">
          Don't have an account?
          <button
            onClick={switchToRegister}
            className=" ml-2 text-green-500 hover:underline focus:outline-none"
          >
            Register
          </button>
        </p>
      </section>
    </div>
  );
};

export default Login;

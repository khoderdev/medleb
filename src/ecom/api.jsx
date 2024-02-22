import axios from "axios"; // for making HTTP requests

const Axios = axios;

// config.js
const config = {
  baseURL: "http://localhost:8000", //  API base URL
};

Axios.defaults.baseURL = config.baseURL;

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
      // Handle specific error codes here if needed
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Request setup error:", error.message);
    }
    // Handle other error scenarios as needed
    return Promise.reject(error);
  }
);

export default Axios;

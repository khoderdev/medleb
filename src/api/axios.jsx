import axios from "axios";

// const baseURL = "http://192.168.10.88:3010";
const baseURL = "http://85.112.70.8:3010";
// const baseURL = "http://192.168.10.88:3010";
// const baseURL = "http://localhost:3000";

// Create Axios Instance
const Axios = axios.create({
  baseURL,
});

// Request Interceptor
// this Interceptor is Prevented from Caching
Axios.interceptors.request.use(
  (config) => {
    // Retrieve access token from localStorage
    const accessToken = localStorage.getItem("accessToken");

    // Add the access token to the Authorization header if it exists
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Set default Content-Type header
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "text/plain";

    // Add cache control headers to prevent caching
    config.headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios.interceptors.request.use(
//   (config) => {
//     // Retrieve access token from localStorage
//     const accessToken = localStorage.getItem("accessToken");

//     // Add the access token to the Authorization header if it exists
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }

//     // Set default Content-Type header
//     config.headers["Content-Type"] = "application/json";
//     config.headers["Accept"] = "text/plain";
//     config.headers["Accept"] = "text/plain";

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor
Axios.interceptors.response.use(
  (response) => {
    // Handle response data
    return response.data;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      // Server responded with a status code outside of 2xx
      console.error("Server responded with an error:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error during request setup:", error.message);
    }
    return Promise.reject(error);
  }
);

export default Axios;

// // // USAGE:

// // axios
// //         .post("/api/drugs/v1.0")
// //         .then((response) => {
// //           console.log(response.data);
// //         })
// //         .catch((error) => {
// //           console.log(error);
// //         });

// import axios from "axios";

// // Array of base URLs
// const baseUrls = [
//   "http://85.112.70.8:3010",
//   "http://localhost:3000",
//   "http://192.168.10.88:3010",
// ];

// // Create an array of Axios instances with different base URLs
// const AxiosInstances = baseUrls.map((baseUrl) => {
//   return axios.create({
//     baseURL: baseUrl,
//   });
// });

// // Request Interceptor for each instance
// AxiosInstances.forEach((instance) => {
//   instance.interceptors.request.use(
//     (config) => {
//       // Retrieve access token from localStorage
//       const accessToken = localStorage.getItem("accessToken");

//       // Add the access token to the Authorization header if it exists
//       if (accessToken) {
//         config.headers["Authorization"] = `Bearer ${accessToken}`;
//       }

//       // Set default Content-Type header
//       config.headers["Content-Type"] = "application/json";
//       config.headers["Accept"] = "text/plain";

//       // Add cache control headers to prevent caching
//       config.headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
//       config.headers["Pragma"] = "no-cache";
//       config.headers["Expires"] = "0";

//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
// });

// // Response Interceptor for each instance
// AxiosInstances.forEach((instance) => {
//   instance.interceptors.response.use(
//     (response) => {
//       // Handle response data
//       return response.data;
//     },
//     (error) => {
//       // Handle errors
//       if (error.response) {
//         // Server responded with a status code outside of 2xx
//         console.error("Server responded with an error:", error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("No response received:", error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error("Error during request setup:", error.message);
//       }
//       return Promise.reject(error);
//     }
//   );
// });

// export default AxiosInstances;

// import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://1.1.1.252:3500'
//     // baseURL: 'https://6b3e-85-112-70-8.ngrok-free.app/'
// });

// api.js
import axios from 'axios';

export default axios.create({
  // baseURL: 'https://medleb-api.onrender.com',
  // baseURL: 'http://85.112.70.8:3010/api/users/v1.0/authenticate',
  baseURL: 'http://1.1.1.252:3500',
  withCredentials: true,
});

// export default api;


// ///////////////////////////////////////////



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials } from "../../features/auth/authSlice";

// const baseQuery = fetchBaseQuery({
//   // baseUrl: 'https://MedLeb-api.onrender.com',
//   baseUrl: "http://localhost:3400",
//   credentials: "same-origin",
//   // credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;

//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   // console.log(args) // request url, method, body
//   // console.log(api) // signal, dispatch, getState()
//   // console.log(extraOptions) //custom like {shout: true}

//   let result = await baseQuery(args, api, extraOptions);

//   // If you want, handle other status codes, too
//   if (result?.error?.status === 403) {
//     console.log("sending refresh token");

//     // send refresh token to get new access token
//     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

//     if (refreshResult?.data) {
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data }));

//       // retry original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       if (refreshResult?.error?.status === 403) {
//         refreshResult.error.data.message = "Your login has expired.";
//       }
//       return refreshResult;
//     }
//   }

//   return result;
// };

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithReauth,
//   tagTypes: ["Drug", "User"],
//   endpoints: (builder) => ({}),
// });

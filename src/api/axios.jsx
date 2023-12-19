// import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:3500'
//     // baseURL: 'https://6b3e-85-112-70-8.ngrok-free.app/'
// });

// api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://medleb-api.onrender.com',
  // baseURL: 'http://85.112.70.8:3010/api/users/v1.0/authenticate',
  // baseURL: 'http://localhost:3500',
  withCredentials: true,
});

// export default api;


// import axios from 'axios';

// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6InRlc3R1c2VyIn0sImlhdCI6MTcwMjcwMDY1OSwiZXhwIjoxNzAyNzAxNTU5fQ.mbswNaIeNP89Qyca7DcIqwbqV1-99_gvF9zHz9O4_OY'; // Replace with the actual access token

// export default axios.create({
//   baseURL: 'http://localhost:3500',
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

// // Example request using the access token
// axios.get('/')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error making request:', error);
//   });

import axios from "axios";

axios.defaults.baseURL = "https://medleb.onrender.com";

axios
  .get("/api/users")
  .then((response) => {
    console.log("Users:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default axios;

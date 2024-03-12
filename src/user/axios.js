import axios from "axios";

axios.defaults.baseURL = "http://1.1.1.250:9000";

axios
  .get("/api/users")
  .then((response) => {
    console.log("Users:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default axios;

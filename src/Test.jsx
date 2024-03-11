// import React, { useState } from "react";

// function Test() {
//   const [data, setData] = useState([1, 2, 3, 4]);

//   return (
//     <div className="text-center text-3xl p-10">
//       {/* Mapping over the data array and displaying each item */}
//       {data.map((item, index) => (
//         <div key={index}>Item {item}</div>
//       ))}
//     </div>
//   );
// }

// export default Test;
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios library

function Test() {
  // State to hold the array of users
  const [users, setUsers] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Update the state with the fetched data
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch operation
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="text-xl p-10">
      {/* Mapping over the users array and displaying each user */}
      {users.map((user) => (
        <div key={user.id}>
          {/* Displaying user information */}
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          {/* Displaying address information */}
          <p>
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>
          {/* Displaying company information */}
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Test;

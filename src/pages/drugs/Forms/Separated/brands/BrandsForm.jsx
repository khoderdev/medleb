// import React, { useState } from "react";
// import Axios from "../../../../../api/axios";
// import { v4 as uuidv4 } from "uuid";

// const BrandsForm = () => {
//   const [formData, setFormData] = useState({
//     guid: uuidv4(),
//     name: "",
//     nameAr: "",
//     enabled: true,
//     createdDate: new Date().toISOString(),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await Axios.post("/api/brands/v1.0", formData);
//       alert("Data submitted successfully");
//       // Optionally, clear the form fields after successful submission
//       setFormData({
//         guid: "",
//         name: "",
//         nameAr: "",
//         enabled: true,
//         createdDate: new Date().toISOString(),
//       });
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("An error occurred while submitting data");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="nameAr">Name (Arabic):</label>
//         <input
//           type="text"
//           id="nameAr"
//           name="nameAr"
//           value={formData.nameAr}
//           onChange={handleChange}
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default BrandsForm;

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Axios from "../../../../../api/axios";
// import { v4 as uuidv4 } from "uuid";

// const BrandsForm = () => {
//   const [formData, setFormData] = useState({
//     guid: uuidv4(),
//     countryGuid: "", // Add countryGuid to the formData
//     countryName: "", // Add countryName to the formData
//     countryNameAr: "", // Add countryNameAr to the formData
//     name: "",
//     nameAr: "",
//     enabled: true,
//     createdDate: new Date().toISOString(),
//   });

//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     // Fetch countries data
//     const fetchCountries = async () => {
//       try {
//         const response = await Axios.get("/api/country/v1.0/countries");
//         setCountries(response.data);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };

//     fetchCountries();
//   }, []); // Fetch countries data only once on component mount

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await Axios.post("/api/brands/v1.0", formData);
//       alert("Data submitted successfully");
//       // Optionally, clear the form fields after successful submission
//       setFormData({
//         guid: uuidv4(),
//         countryGuid: "", // Reset countryGuid after submission
//         countryName: "", // Reset countryName after submission
//         countryNameAr: "", // Reset countryNameAr after submission
//         name: "",
//         nameAr: "",
//         enabled: true,
//         createdDate: new Date().toISOString(),
//       });
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("An error occurred while submitting data");
//     }
//   };

//   return (
//     <form className="flex flex-col p-6 py-14 mx-auto gap-6" onSubmit={handleSubmit}>
//       <div className="flex flex-col">
//         <label htmlFor="country">Country:</label>
//         <select
//           id="country"
//           name="countryGuid"
//           value={formData.countryGuid}
//           onChange={handleChange}
//         >
//           <option value="">Select a country</option>
//           {countries.map((country) => (
//             <option key={country.guid} value={country.guid}>
//               {country.name} ({country.nameAr})
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="nameAr">Name (Arabic):</label>
//         <input
//           type="text"
//           id="nameAr"
//           name="nameAr"
//           value={formData.nameAr}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="flex justify-center p-6">
//         <button className="med-btn-pri w-24 self-center" type="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BrandsForm;

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";
import {
  updateFormData,
  updateCountries,
  resetFormData,
} from "../../../../../app/slices/BrandsFormSlice";

const BrandsForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.brandsForm.formData);
  const countries = useSelector((state) => state.brandsForm.countries);

  useEffect(() => {
    // Fetch countries data
    const fetchCountries = async () => {
      try {
        const response = await Axios.get("/api/country/v1.0/countries");
        dispatch(updateCountries(response.data));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("/api/brands/v1.0", formData);
      alert("Data submitted successfully");
      dispatch(resetFormData());
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting data");
    }
  };

  return (
    <form
      className="flex flex-col p-6 py-14 mx-auto gap-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="countryGuid"
          value={formData.countryGuid}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.guid} value={country.guid}>
              {country.name} ({country.nameAr})
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="nameAr">Name (Arabic):</label>
        <input
          type="text"
          id="nameAr"
          name="nameAr"
          value={formData.nameAr}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center p-6">
        <button className="med-btn-pri w-24 self-center" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BrandsForm;

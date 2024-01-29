// import React, { useState } from "react";
// import Axios from "../../../../../api/axios";
// import { v4 as uuidv4 } from "uuid";

// const Geos = () => {
//   const [formData, setFormData] = useState({
//     country: {
//       guid: uuidv4(), //auto-generated uuid key (PR)
//       code: "",
//       name: "",
//       nameAr: "",
//       enabled: true,
//       createdDate: new Date().toISOString(),
//       isNearByCountry: true,
//       isReferenceCountry: true,
//       isComparative: true,
//     },
//     governorate: {
//       guid: "", //auto-generated uuid key
//       staticCountryGuid: "", //generated Counrty guid uuid key (FK)
//       code: "",
//       name: "",
//       nameAr: "",
//       enabled: true,
//       createdDate: new Date().toISOString(),
//     },

//     district: {
//       guid: "", //auto-generated uuid key
//       governorateGuid: "",  //generated Governorate guid uuid key (FK)
//       code: "",
//       name: "",
//       nameAr: "",
//       enabled: true,
//       createdDate: new Date().toISOString(),
//     },

//     city: {
//       guid: "", //auto-generated uuid key
//       staticCountryGuid: "", //generated district guid uuid key (FK)
//       code: "",
//       name: "",
//       nameAr: "",
//       enabled: true,
//       createdDate: new Date().toISOString(),
//     },
//   });

//   const handleSubmit = async (e, tableName) => {
//     e.preventDefault();
//     console.log("Form Name:", tableName); // Log the form name
//     try {
//       const response = await Axios.post(
//         `/api/${tableName}/v1.0/`,
//         formData[tableName]
//       );
//       console.log(response.data);

//       // Check if the response data contains the 'guid' property
//       if (response.data && response.data.guid) {
//         // If the submitted form is country, update staticCountryGuid in governorate form
//         if (tableName === "country") {
//           setFormData((prevFormData) => ({
//             ...prevFormData,
//             governorate: {
//               ...prevFormData.governorate,
//               staticCountryGuid: response.data.guid,
//             },
//           }));
//         }
//       } else {
//         console.error("GUID not found in response data:", response.data);
//       }

//       // Regenerate GUID for the submitted form
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [tableName]: {
//           ...prevFormData[tableName],
//           guid: uuidv4(),
//         },
//       }));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleChange = (e, tableName) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [tableName]: {
//         ...prevFormData[tableName],
//         [name]: type === "checkbox" ? checked : value,
//       },
//     }));
//   };

//   return (
//     <div className="max-w-lg mx-auto">
//       <form name="country" onSubmit={(e) => handleSubmit(e, "country")}>
//         <h2>Country</h2>
//         <input
//           type="text"
//           name="code"
//           value={formData.country.code}
//           onChange={(e) => handleChange(e, "country")}
//           placeholder="Code"
//           minLength={3}
//         />
//         <input
//           type="text"
//           name="name"
//           value={formData.country.name}
//           onChange={(e) => handleChange(e, "country")}
//           placeholder="Name"
//           minLength={3}
//         />
//         <input
//           type="text"
//           name="nameAr"
//           value={formData.country.nameAr}
//           onChange={(e) => handleChange(e, "country")}
//           placeholder="NameAr"
//           minLength={3}
//         />
//         <input
//           type="text"
//           name="countryGuid"
//           value={formData.country.guid}
//           onChange={(e) => handleChange(e, "countryGuid")}
//           disabled
//         />
//         <button className="med-btn-pri" type="submit">
//           Create
//         </button>
//       </form>

//       <form name="governorate" onSubmit={(e) => handleSubmit(e, "governorate")}>
//         <h2>Governorate</h2>
//         <input
//           type="text"
//           name="code"
//           value={formData.governorate.code}
//           onChange={(e) => handleChange(e, "governorate")}
//           placeholder="Code"
//         />
//         <input
//           type="text"
//           name="name"
//           value={formData.governorate.name}
//           onChange={(e) => handleChange(e, "governorate")}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           name="nameAr"
//           value={formData.governorate.nameAr}
//           onChange={(e) => handleChange(e, "governorate")}
//           placeholder="NameAr"
//         />
//         <input
//           type="text"
//           name="staticCountryGuid"
//           value={formData.governorate.staticCountryGuid}
//           onChange={(e) => handleChange(e, "governorate")}
//           placeholder="Static Country Guid"
//           disabled
//         />
//         <button className="med-btn-pri" type="submit">
//           Create
//         </button>
//       </form>

//       <form name="district" onSubmit={(e) => handleSubmit(e, "district")}>
//         <h2>District</h2>
//         <input
//           type="text"
//           name="code"
//           value={formData.district.code}
//           onChange={(e) => handleChange(e, "district")}
//           placeholder="Code"
//         />
//         <input
//           type="text"
//           name="name"
//           value={formData.district.name}
//           onChange={(e) => handleChange(e, "district")}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           name="nameAr"
//           value={formData.district.nameAr}
//           onChange={(e) => handleChange(e, "district")}
//           placeholder="NameAr"
//         />
//         <input
//           type="text"
//           name="governorateGuid"
//           value={formData.district.governorateGuid}
//           onChange={(e) => handleChange(e, "district")}
//           placeholder="Governorate Guid"
//           disabled
//         />
//         <button className="med-btn-pri" type="submit">
//           Create
//         </button>
//       </form>

//       <form name="city" onSubmit={(e) => handleSubmit(e, "city")}>
//         <h2>City</h2>
//         <input
//           type="text"
//           name="code"
//           value={formData.city.code}
//           onChange={(e) => handleChange(e, "district")}
//           placeholder="Code"
//         />
//         <input
//           type="text"
//           name="name"
//           value={formData.city.name}
//           onChange={(e) => handleChange(e, "city")}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           name="nameAr"
//           value={formData.city.nameAr}
//           onChange={(e) => handleChange(e, "city")}
//           placeholder="NameAr"
//         />
//         <input
//           type="text"
//           name="cityGuid"
//           value={formData.city.cityGuid}
//           onChange={(e) => handleChange(e, "city")}
//           placeholder="District Guid"
//           disabled
//         />

//         <button className="med-btn-pri" type="submit">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Geos;

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

import React, { useState } from "react";
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";

const Geos = () => {
  const [formData, setFormData] = useState({
    country: {
      guid: uuidv4(),
      code: "",
      name: "",
      nameAr: "",
      enabled: true,
      createdDate: new Date().toISOString(),
      isNearByCountry: true,
      isReferenceCountry: true,
      isComparative: true,
    },
    governorate: {
      guid: uuidv4(),
      staticCountryGuid: "",
      code: "",
      name: "",
      nameAr: "",
      enabled: true,
      createdDate: new Date().toISOString(),
    },
    district: {
      guid: uuidv4(),
      governorateGuid: "",
      code: "",
      name: "",
      nameAr: "",
      enabled: true,
      createdDate: new Date().toISOString(),
    },
    city: {
      guid: uuidv4(),
      districtGuid: "",
      code: "",
      name: "",
      nameAr: "",
      enabled: true,
      createdDate: new Date().toISOString(),
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit all forms simultaneously
      const responseCountry = await Axios.post(
        "/api/country/v1.0/",
        formData.country
      );
      const responseGovernorate = await Axios.post(
        "/api/governorate/v1.0/",
        formData.governorate
      );
      const responseDistrict = await Axios.post(
        "/api/district/v1.0/",
        formData.district
      );
      const responseCity = await Axios.post("/api/city/v1.0/", formData.city);

      console.log("Country Response:", responseCountry.data);
      console.log("Governorate Response:", responseGovernorate.data);
      console.log("District Response:", responseDistrict.data);
      console.log("City Response:", responseCity.data);

      // Update foreign keys in the state
      setFormData((prevFormData) => ({
        ...prevFormData,
        governorate: {
          ...prevFormData.governorate,
          staticCountryGuid: responseCountry.data.guid,
        },
        district: {
          ...prevFormData.district,
          governorateGuid: responseGovernorate.data.guid,
        },
        city: {
          ...prevFormData.city,
          districtGuid: responseDistrict.data.guid,
        },
      }));

      // Regenerate GUID for the next submission
      setFormData((prevFormData) => ({
        ...prevFormData,
        country: {
          ...prevFormData.country,
          guid: uuidv4(),
        },
        governorate: {
          ...prevFormData.governorate,
          guid: uuidv4(),
        },
        district: {
          ...prevFormData.district,
          guid: uuidv4(),
        },
        city: {
          ...prevFormData.city,
          guid: uuidv4(),
        },
      }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e, tableName) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [tableName]: {
        ...prevFormData[tableName],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  return (
    <div className="max-w-lg mx-auto">
      <form name="country" onSubmit={(e) => handleSubmit(e, "country")}>
        <h2>Country</h2>
        <input
          type="text"
          name="code"
          value={formData.country.code}
          onChange={(e) => handleChange(e, "country")}
          placeholder="Code"
          minLength={3}
        />
        <input
          type="text"
          name="name"
          value={formData.country.name}
          onChange={(e) => handleChange(e, "country")}
          placeholder="Name"
          minLength={3}
        />
        <input
          type="text"
          name="nameAr"
          value={formData.country.nameAr}
          onChange={(e) => handleChange(e, "country")}
          placeholder="NameAr"
          minLength={3}
        />
        <input
          type="text"
          name="countryGuid"
          value={formData.country.guid}
          onChange={(e) => handleChange(e, "countryGuid")}
          disabled
        />
        <button className="med-btn-pri" type="submit">
          Create
        </button>
      </form>

      <form name="governorate" onSubmit={(e) => handleSubmit(e, "governorate")}>
        <h2>Governorate</h2>
        <input
          type="text"
          name="code"
          value={formData.governorate.code}
          onChange={(e) => handleChange(e, "governorate")}
          placeholder="Code"
        />
        <input
          type="text"
          name="name"
          value={formData.governorate.name}
          onChange={(e) => handleChange(e, "governorate")}
          placeholder="Name"
        />
        <input
          type="text"
          name="nameAr"
          value={formData.governorate.nameAr}
          onChange={(e) => handleChange(e, "governorate")}
          placeholder="NameAr"
        />
        <input
          type="text"
          name="staticCountryGuid"
          value={formData.governorate.staticCountryGuid}
          onChange={(e) => handleChange(e, "governorate")}
          placeholder="Static Country Guid"
          disabled
        />
        <button className="med-btn-pri" type="submit">
          Create
        </button>
      </form>

      <form name="district" onSubmit={(e) => handleSubmit(e, "district")}>
        <h2>District</h2>
        <input
          type="text"
          name="code"
          value={formData.district.code}
          onChange={(e) => handleChange(e, "district")}
          placeholder="Code"
        />
        <input
          type="text"
          name="name"
          value={formData.district.name}
          onChange={(e) => handleChange(e, "district")}
          placeholder="Name"
        />
        <input
          type="text"
          name="nameAr"
          value={formData.district.nameAr}
          onChange={(e) => handleChange(e, "district")}
          placeholder="NameAr"
        />
        <input
          type="text"
          name="governorateGuid"
          value={formData.district.governorateGuid}
          onChange={(e) => handleChange(e, "district")}
          placeholder="Governorate Guid"
          disabled
        />
        <button className="med-btn-pri" type="submit">
          Create
        </button>
      </form>

      <form name="city" onSubmit={(e) => handleSubmit(e, "city")}>
        <h2>City</h2>
        <input
          type="text"
          name="code"
          value={formData.city.code}
          onChange={(e) => handleChange(e, "district")}
          placeholder="Code"
        />
        <input
          type="text"
          name="name"
          value={formData.city.name}
          onChange={(e) => handleChange(e, "city")}
          placeholder="Name"
        />
        <input
          type="text"
          name="nameAr"
          value={formData.city.nameAr}
          onChange={(e) => handleChange(e, "city")}
          placeholder="NameAr"
        />
        <input
          type="text"
          name="cityGuid"
          value={formData.city.cityGuid}
          onChange={(e) => handleChange(e, "city")}
          placeholder="District Guid"
          disabled
        />

        <button className="med-btn-pri" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Geos;

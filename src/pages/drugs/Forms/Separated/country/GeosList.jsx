// // // // import React, { useState, useEffect } from "react";
// // // // import Axios from "../../../../../api/axios";
// // // // import { Link, useParams } from "react-router-dom";

// // // // const GeosList = () => {
// // // //   const { guid } = useParams();
// // // //   const [data, setData] = useState([]);
// // // //   const [governoratesData, setGovernoratesData] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         if (guid) {
// // // //           console.log("Fetching data for guid:", guid);
// // // //           const response = await Axios.get(
// // // //             `/api/country/v1.0/Countries?guid=${guid}`
// // // //           );
// // // //           // const response = await Axios.get(`/api/country/v1.0?guid=${guid}`);
// // // //           console.log("Response data:", response.data);
// // // //           setData(Array.isArray(response.data) ? response.data : []);

// // // //           console.log("Fetching governoratesData for guid:", guid);
// // // //           const governoratesResponse = await Axios.get(
// // // //             `/api/governorates/v1.0/governorates?guid=${guid}`
// // // //           );
// // // //           console.log("Response governoratesData:", governoratesResponse.data);
// // // //           setGovernoratesData(
// // // //             Array.isArray(governoratesResponse.data)
// // // //               ? governoratesResponse.data
// // // //               : []
// // // //           );
// // // //         } else {
// // // //           console.log("Fetching all data");
// // // //           const response = await Axios.get("/api/country/v1.0/Countries");
// // // //           console.log("Response data:", response.data);
// // // //           setData(Array.isArray(response.data) ? response.data : []);

// // // //           console.log("Fetching all governoratesData");
// // // //           const governoratesResponse = await Axios.get(
// // // //             "/api/governorates/v1.0/governorates"
// // // //           );
// // // //           console.log("Response governoratesData:", governoratesResponse.data);
// // // //           setGovernoratesData(
// // // //             Array.isArray(governoratesResponse.data)
// // // //               ? governoratesResponse.data
// // // //               : []
// // // //           );
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching data:", error);
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, [guid]);

// // // //   return (
// // // //     <div className="container mx-auto py-14">
// // // //       <div>
// // // //         <h2>Country Table</h2>
// // // //         <table className="min-w-full table-auto">
// // // //           <thead>
// // // //             <tr>
// // // //               {/* <th className="px-4 py-2">ID</th> */}
// // // //               <th className="w-24 px-4 py-2">Code</th>
// // // //               <th className="px-4 py-2">Name</th>
// // // //               <th className="px-4 py-2">Name (Arabic)</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {data.map((item, index) => (
// // // //               <tr key={index} className="hover:bg-gray-100">
// // // //                 {/* <td className="border px-4 py-2">{item.guid}</td> */}
// // // //                 <td className="border px-4 py-2">{item.code}</td>
// // // //                 <td className="border px-4 py-2">{item.name}</td>
// // // //                 <td className="border px-4 py-2">{item.nameAr}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //       <div>
// // // //         <h2>Governorates Table</h2>
// // // //         <table className="min-w-full table-auto">
// // // //           <thead>
// // // //             <tr>
// // // //               <th className="w-24 px-4 py-2">Code</th>
// // // //               <th className="px-4 py-2">Name</th>
// // // //               <th className="px-4 py-2">Name (Arabic)</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {governoratesData.map((item, index) => (
// // // //               <tr key={index} className="hover:bg-gray-100">
// // // //                 <td className="border px-4 py-2">{item.code}</td>
// // // //                 <td className="border px-4 py-2">{item.name}</td>
// // // //                 <td className="border px-4 py-2">{item.nameAr}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default GeosList;

// // // ///////////////////////////////////////////////////////////////////
// // // ///////////////////////////////////////////////////////////////////
// // // ///////////////////////////////////////////////////////////////////

// // // import React, { useState, useEffect } from "react";
// // // import Axios from "../../../../../api/axios";
// // // import { useParams } from "react-router-dom";

// // // const GeosList = () => {
// // //   const { guid } = useParams();
// // //   const [data, setData] = useState([]);
// // //   const [governoratesData, setGovernoratesData] = useState([]);
// // //   const [selectedCountryGuid, setSelectedCountryGuid] = useState(null);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         console.log("Fetching countries data");
// // //         const countriesResponse = await Axios.get("/api/country/v1.0/Countries");
// // //         console.log("Response countries data:", countriesResponse.data);
// // //         setData(Array.isArray(countriesResponse.data) ? countriesResponse.data : []);
// // //       } catch (error) {
// // //         console.error("Error fetching countries data:", error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     const fetchGovernoratesData = async () => {
// // //       try {
// // //         if (selectedCountryGuid) {
// // //           console.log("Fetching governoratesData for country:", selectedCountryGuid);
// // //           const governoratesResponse = await Axios.get(
// // //             `/api/governorates/v1.0/governorates?guid=${selectedCountryGuid}`
// // //           );
// // //           console.log("Response governoratesData:", governoratesResponse.data);
// // //           setGovernoratesData(
// // //             Array.isArray(governoratesResponse.data)
// // //               ? governoratesResponse.data
// // //               : []
// // //           );
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching governorates data:", error);
// // //       }
// // //     };

// // //     fetchGovernoratesData();
// // //   }, [selectedCountryGuid]);

// // //   const handleCountrySelection = async (event) => {
// // //     const selectedCountryName = event.target.value;
// // //     const selectedCountry = data.find(country => country.name === selectedCountryName);
// // //     if (selectedCountry) {
// // //       setSelectedCountryGuid(selectedCountry.guid);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto py-14">
// // //       <div>
// // //         <h2>Country Table</h2>
// // //         <select onChange={handleCountrySelection}>
// // //           <option value="">Select a country</option>
// // //           {data.map((country, index) => (
// // //             <option key={index} value={country.name}>{country.name}</option>
// // //           ))}
// // //         </select>
// // //       </div>
// // //       <div>
// // //         <h2>Governorates Table</h2>
// // //         <table className="min-w-full table-auto">
// // //           <thead>
// // //             <tr>
// // //               <th className="w-24 px-4 py-2">Code</th>
// // //               <th className="px-4 py-2">Name</th>
// // //               <th className="px-4 py-2">Name (Arabic)</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {governoratesData.map((item, index) => (
// // //               <tr key={index} className="hover:bg-gray-100">
// // //                 <td className="border px-4 py-2">{item.code}</td>
// // //                 <td className="border px-4 py-2">{item.name}</td>
// // //                 <td className="border px-4 py-2">{item.nameAr}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default GeosList;

// // // ////////////////////////////////////////
// // // ////////////////////////////////////////
// // // ////////////////////////////////////////
// // // ////////////////////////////////////////

// // import React, { useState, useEffect } from "react";
// // import Axios from "../../../../../api/axios";
// // import { useParams } from "react-router-dom";

// // const GeosList = () => {
// //   const { guid } = useParams();
// //   const [data, setData] = useState([]);
// //   const [governoratesData, setGovernoratesData] = useState([]);
// //   const [selectedCountryGuid, setSelectedCountryGuid] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         console.log("Fetching countries data");
// //         const countriesResponse = await Axios.get("/api/country/v1.0/Countries");
// //         console.log("Response countries data:", countriesResponse.data);
// //         setData(Array.isArray(countriesResponse.data) ? countriesResponse.data : []);
// //       } catch (error) {
// //         console.error("Error fetching countries data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     const fetchGovernoratesData = async () => {
// //       try {
// //         if (selectedCountryGuid) {
// //           console.log("Fetching governoratesData for country:", selectedCountryGuid);
// //           const governoratesResponse = await Axios.get(
// //             `/api/governorates/v1.0/governorates/${selectedCountryGuid}?Enabled=true&sortOrder=desc`
// //           );
// //           console.log("Response governoratesData:", governoratesResponse.data);
// //           setGovernoratesData(
// //             Array.isArray(governoratesResponse.data)
// //               ? governoratesResponse.data
// //               : []
// //           );
// //         }
// //       } catch (error) {
// //         console.error("Error fetching governorates data:", error);
// //       }
// //     };

// //     fetchGovernoratesData();
// //   }, [selectedCountryGuid]);

// //   const handleCountrySelection = async (event) => {
// //     const selectedCountryName = event.target.value;
// //     const selectedCountry = data.find(country => country.name === selectedCountryName);
// //     if (selectedCountry) {
// //       setSelectedCountryGuid(selectedCountry.guid);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto py-14">
// //       <div>
// //         <h2>Country Table</h2>
// //         <select onChange={handleCountrySelection}>
// //           <option value="">Select a country</option>
// //           {data.map((country, index) => (
// //             <option key={index} value={country.name}>{country.name}</option>
// //           ))}
// //         </select>
// //       </div>
// //       <div>
// //         <h2>Governorates Table</h2>
// //         <table className="min-w-full table-auto">
// //           <thead>
// //             <tr>
// //               <th className="w-24 px-4 py-2">Code</th>
// //               <th className="px-4 py-2">Name</th>
// //               <th className="px-4 py-2">Name (Arabic)</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {governoratesData.map((item, index) => (
// //               <tr key={index} className="hover:bg-gray-100">
// //                 <td className="border px-4 py-2">{item.code}</td>
// //                 <td className="border px-4 py-2">{item.name}</td>
// //                 <td className="border px-4 py-2">{item.nameAr}</td>
// //                 <td className="border px-4 py-2">{item.nameAr}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GeosList;

// import React, { useState, useEffect } from "react";
// import Axios from "../../../../../api/axios";
// import { useParams } from "react-router-dom";

// const GeosList = () => {
//   const { guid } = useParams();
//   const [data, setData] = useState([]);
//   const [governoratesData, setGovernoratesData] = useState([]);
//   const [selectedCountryGuid, setSelectedCountryGuid] = useState(null);
//   const [selectedCountryName, setSelectedCountryName] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Fetching countries data");
//         const countriesResponse = await Axios.get(
//           "/api/country/v1.0/Countries"
//         );
//         console.log("Response countries data:", countriesResponse.data);
//         setData(
//           Array.isArray(countriesResponse.data) ? countriesResponse.data : []
//         );
//       } catch (error) {
//         console.error("Error fetching countries data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchGovernoratesData = async () => {
//       try {
//         if (selectedCountryGuid) {
//           console.log(
//             "Fetching governoratesData for country:",
//             selectedCountryGuid
//           );
//           const governoratesResponse = await Axios.get(
//             `/api/governorates/v1.0/governorates/${selectedCountryGuid}?Enabled=true&sortOrder=desc`
//           );
//           console.log("Response governoratesData:", governoratesResponse.data);
//           setGovernoratesData(
//             Array.isArray(governoratesResponse.data)
//               ? governoratesResponse.data
//               : []
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching governorates data:", error);
//       }
//     };

//     fetchGovernoratesData();
//   }, [selectedCountryGuid]);

//   const handleCountrySelection = async (event) => {
//     const selectedCountryName = event.target.value;
//     const selectedCountry = data.find(
//       (country) => country.name === selectedCountryName
//     );
//     if (selectedCountry) {
//       setSelectedCountryGuid(selectedCountry.guid);
//       setSelectedCountryName(selectedCountry.name);
//     }
//   };

//   return (
//     <div className="container mx-auto py-14">
//       <div>
//         <h2>Country Table</h2>
//         <select onChange={handleCountrySelection}>
//           <option value="">Select a country</option>
//           {data.map((country, index) => (
//             <option key={index} value={country.name}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedCountryName && (
//         <div className="p-4">
//           <h3>Selected Country: {selectedCountryName}</h3>
//         </div>
//       )}
//       <div>
//         {/* <h2>Governorates Table</h2> */}
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="w-24 px-4 py-2">Code</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Name (Arabic)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {governoratesData.map((item, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="border px-4 py-2">{item.code}</td>
//                 <td className="border px-4 py-2">{item.name}</td>
//                 <td className="border px-4 py-2">{item.nameAr}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GeosList;



import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { useParams } from "react-router-dom";

const GeosList = () => {
  const { guid } = useParams();
  const [data, setData] = useState([]);
  const [governoratesData, setGovernoratesData] = useState([]);
  const [selectedCountryGuid, setSelectedCountryGuid] = useState(null);
  const [selectedCountryName, setSelectedCountryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching countries data");
        const countriesResponse = await Axios.get("/api/country/v1.0/Countries");
        console.log("Response countries data:", countriesResponse.data);
        setData(Array.isArray(countriesResponse.data) ? countriesResponse.data : []);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchGovernoratesData = async () => {
      try {
        if (selectedCountryGuid) {
          console.log("Fetching governoratesData for country:", selectedCountryGuid);
          const governoratesResponse = await Axios.get(
            `/api/governorates/v1.0/governorates/${selectedCountryGuid}?Enabled=true&sortOrder=desc`
          );
          console.log("Response governoratesData:", governoratesResponse.data);
          setGovernoratesData(
            Array.isArray(governoratesResponse.data)
              ? governoratesResponse.data
              : []
          );
        }
      } catch (error) {
        console.error("Error fetching governorates data:", error);
      }
    };

    fetchGovernoratesData();
  }, [selectedCountryGuid]);

  const handleCountrySelection = async (event) => {
    const selectedCountryName = event.target.value;
    const selectedCountry = data.find(country => country.name === selectedCountryName);
    if (selectedCountry) {
      setSelectedCountryGuid(selectedCountry.guid);
      setSelectedCountryName(selectedCountry.name);
    }
  };

  return (
    <div className="container mx-auto py-14">
      <div>
        <h2>Country Table</h2>
        <select onChange={handleCountrySelection}>
          <option value="">Select a country</option>
          {data.map((country, index) => (
            <option key={index} value={country.name}>{country.name}</option>
          ))}
        </select>
      </div>
      {selectedCountryName && (
        <div>
          <h3>Selected Country: {selectedCountryName}</h3>
        </div>
      )}
      <div>
        <h2>Governorates Table</h2>
        {governoratesData.length > 0 ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="w-24 px-4 py-2">Code</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Name (Arabic)</th>
              </tr>
            </thead>
            <tbody>
              {governoratesData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{item.code}</td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.nameAr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-500">No Data available for the selected country.</p>
        )}
      </div>
    </div>
  );
};

export default GeosList;

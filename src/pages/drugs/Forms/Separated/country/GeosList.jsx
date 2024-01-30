// import React, { useState, useEffect } from "react";
// import Axios from "../../../../../api/axios";

// const GeosList = () => {
//   const [countriesData, setCountriesData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true); // Track loading status

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get("/api/country/v1.0/countries");
//         const countries = response.data;
//         const updatedCountries = await Promise.all(
//           countries.map(async (country) => {
//             try {
//               const governoratesResponse = await Axios.get(
//                 `/api/Governorates/v1.0/Governorates/${country.guid}`
//               );
//               const governoratesData = governoratesResponse.data;
//               const staticCountryGuid = country.staticCountryGuid;

//               // Fetch and add district data to governorates
//               const updatedGovernorates = await Promise.all(
//                 governoratesData.map(async (governorate) => {
//                   try {
//                     const districtsResponse = await Axios.get(
//                       `/api/District/v1.0/district/${governorate.guid}`
//                     );
//                     const districtsData = districtsResponse.data;

//                     // Add the fetched districts data to the governorate object
//                     return {
//                       ...governorate,
//                       districtsData,
//                     };
//                   } catch (error) {
//                     console.log(
//                       `Error fetching districts data for governorate ${governorate.code}:`,
//                       error
//                     );
//                     // Return the governorate object without districts data
//                     return governorate;
//                   }
//                 })
//               );

//               // Add the updated governorates data to the country object
//               return {
//                 ...country,
//                 governoratesData: updatedGovernorates,
//                 staticCountryGuid,
//               };
//             } catch (error) {
//               console.log(
//                 `Error fetching governorates data for country ${country.code}:`,
//                 error
//               );
//               // Return the country object without governorates data
//               return country;
//             }
//           })
//         );
//         setCountriesData(updatedCountries);
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.log("Error fetching countries data:", error);
//         setLoading(false); // Set loading to false on error
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredCountries = countriesData.filter(
//     (country) =>
//       country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       country.code.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Countries Info List</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="border border-gray-500 p-2 mb-4"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
//         </div>
//       ) : (
//         <table className="border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 p-2">Name</th>
//               <th className="border border-gray-500 p-2">Code</th>
//               <th className="border border-gray-500 p-2">Name (Arabic)</th>
//               <th className="border border-gray-500 p-2">Governorate Code</th>
//               <th className="border border-gray-500 p-2">Governorate Name</th>
//               <th className="border border-gray-500 p-2">
//                 Governorate Name (Arabic)
//               </th>
//               <th className="border border-gray-500 p-2">District Code</th>
//               <th className="border border-gray-500 p-2">District Name</th>
//               <th className="border border-gray-500 p-2">
//                 District Name (Arabic)
//               </th>
//               {/* Add more headers for additional fields as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCountries.map((country, index) => (
//               <React.Fragment key={index}>
//                 {country.governoratesData &&
//                   country.governoratesData.map((governorate, idx) => (
//                     <React.Fragment key={idx}>
//                       {governorate.districtsData &&
//                         governorate.districtsData.map((district, dIdx) => (
//                           <tr key={dIdx}>
//                             <td className="border-b border-gray-500 p-2">
//                               {country.name}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {country.code}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {country.nameAr || "N/A"}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {governorate.code}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {governorate.name}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {governorate.nameAr || "N/A"}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {district.code}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {district.name}
//                             </td>
//                             <td className="border-b border-gray-500 p-2">
//                               {district.nameAr || "N/A"}
//                             </td>
//                             {/* Add more columns for additional fields as needed */}
//                           </tr>
//                         ))}
//                     </React.Fragment>
//                   ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default GeosList;

// ///////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import Axios from "../../../../../api/axios";
// import { useTable, useSortBy } from "react-table";
// import { Link } from "react-router-dom";

// const GeosList = () => {
//   const [countriesData, setCountriesData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Retrieve accessToken from localStorage
//   const accessToken = localStorage.getItem("accessToken");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get("/api/country/v1.0/countries", {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         const countries = response.data;
//         const updatedCountries = await Promise.all(
//           countries.map(async (country) => {
//             try {
//               const governoratesResponse = await Axios.get(
//                 `/api/Governorates/v1.0/Governorates/${country.guid}`
//               );
//               const governoratesData = governoratesResponse.data;
//               const staticCountryGuid = country.staticCountryGuid;

//               const updatedGovernorates = await Promise.all(
//                 governoratesData.map(async (governorate) => {
//                   try {
//                     const districtsResponse = await Axios.get(
//                       `/api/District/v1.0/district/${governorate.guid}`
//                     );
//                     const districtsData = districtsResponse.data;
//                     return {
//                       ...governorate,
//                       districtsData,
//                     };
//                   } catch (error) {
//                     console.log(
//                       `Error fetching districts data for governorate ${governorate.code}:`,
//                       error
//                     );
//                     return governorate;
//                   }
//                 })
//               );

//               return {
//                 ...country,
//                 governoratesData: updatedGovernorates,
//                 staticCountryGuid,
//               };
//             } catch (error) {
//               console.log(
//                 `Error fetching governorates data for country ${country.code}:`,
//                 error
//               );
//               return country;
//             }
//           })
//         );
//         setCountriesData(updatedCountries);
//         setLoading(false);
//       } catch (error) {
//         console.log("Error fetching countries data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [accessToken]);

//   const columns = React.useMemo(
//     () => [
//       { Header: "Name", accessor: "name" },
//       { Header: "Code", accessor: "code" },
//       { Header: "Name (Arabic)", accessor: "nameAr" },
//       { Header: "Governorate Code", accessor: "governoratesData[0].code" },
//       { Header: "Governorate Name", accessor: "governoratesData[0].name" },
//       {
//         Header: "Governorate Name (Arabic)",
//         accessor: "governoratesData[0].nameAr",
//       },
//       {
//         Header: "District Code",
//         accessor: "governoratesData[0].districtsData[0].code",
//       },
//       {
//         Header: "District Name",
//         accessor: "governoratesData[0].districtsData[0].name",
//       },
//       {
//         Header: "District Name (Arabic)",
//         accessor: "governoratesData[0].districtsData[0].nameAr",
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data: countriesData }, useSortBy);

//   const filteredCountries = countriesData.filter(
//     (country) =>
//       country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       country.code.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className=" w-full mx-auto p-4 overflow-x-auto">
//       <h2 className="text-2xl font-bold mb-4">Countries Info List</h2>
//       <div className="flex justify-between items-center p-6">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-500 p-2 mb-4"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Link to="/geo/new" className=" med-btn-pri">
//           Go back
//         </Link>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-pri absolute top-80 right-50 h-20 w-20"></div>
//         </div>
//       ) : (
//         <table
//           {...getTableProps()}
//           className="border-collapse border border-gray-500 w-full"
//         >
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     {...column.getHeaderProps(column.getSortByToggleProps())}
//                     className="border border-gray-500 p-2"
//                   >
//                     {column.render("Header")}
//                     <span>
//                       {column.isSorted
//                         ? column.isSortedDesc
//                           ? " 🔽"
//                           : " 🔼"
//                         : ""}
//                     </span>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr
//                   {...row.getRowProps()}
//                   className="border-b text-center border-gray-500"
//                 >
//                   {row.cells.map((cell) => {
//                     return (
//                       <td
//                         {...cell.getCellProps()}
//                         className="border-b border-gray-500 p-2"
//                       >
//                         {cell.render("Cell")}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default GeosList;

// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////

/*  

import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { useTable, useSortBy } from "react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa"; // Import the icons
import { Link } from "react-router-dom";

const STORAGE_KEY = "countriesData"; // Define a storage key

const GeosList = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Retrieve accessToken from localStorage
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let cachedData = localStorage.getItem(STORAGE_KEY); // Load cached data from local storage
        if (cachedData) {
          // If cached data exists, parse and set it
          setCountriesData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await Axios.get("/api/country/v1.0/countries", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const countries = response.data;
          const updatedCountries = await Promise.all(
            countries.map(async (country) => {
              try {
                const governoratesResponse = await Axios.get(
                  `/api/Governorates/v1.0/Governorates/${country.guid}`
                );
                const governoratesData = governoratesResponse.data;
                const staticCountryGuid = country.staticCountryGuid;

                const updatedGovernorates = await Promise.all(
                  governoratesData.map(async (governorate) => {
                    try {
                      const districtsResponse = await Axios.get(
                        `/api/District/v1.0/district/${governorate.guid}`
                      );
                      const districtsData = districtsResponse.data;
                      return {
                        ...governorate,
                        districtsData,
                      };
                    } catch (error) {
                      console.log(
                        `Error fetching districts data for governorate ${governorate.code}:`,
                        error
                      );
                      return governorate;
                    }
                  })
                );

                return {
                  ...country,
                  governoratesData: updatedGovernorates,
                  staticCountryGuid,
                };
              } catch (error) {
                console.log(
                  `Error fetching governorates data for country ${country.code}:`,
                  error
                );
                return country;
              }
            })
          );
          setCountriesData(updatedCountries);
          setLoading(false);
          // Cache fetched data to local storage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCountries));
        }
      } catch (error) {
        console.log("Error fetching countries data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Code", accessor: "code" },
      { Header: "Name (Arabic)", accessor: "nameAr" },
      { Header: "Governorate Code", accessor: "governoratesData[0].code" },
      { Header: "Governorate Name", accessor: "governoratesData[0].name" },
      {
        Header: "Governorate Name (Arabic)",
        accessor: "governoratesData[0].nameAr",
      },
      {
        Header: "District Code",
        accessor: "governoratesData[0].districtsData[0].code",
      },
      {
        Header: "District Name",
        accessor: "governoratesData[0].districtsData[0].name",
      },
      {
        Header: "District Name (Arabic)",
        accessor: "governoratesData[0].districtsData[0].nameAr",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: countriesData }, useSortBy);

  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full mx-auto p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Countries Info List</h2>
      <div className="flex justify-between items-center p-6">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-500 p-2 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/geo/new" className=" med-btn-pri">
          Add New
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-pri absolute top-80 right-50 h-20 w-20"></div>
        </div>
      ) : (
        <table
          {...getTableProps()}
          className="border-collapse border border-gray-500 w-full"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border border-gray-500 p-2"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b text-center border-gray-500"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="border-b border-gray-500 p-2"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GeosList;


*/
// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////

import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import localforage from "localforage";
import { useTable, useSortBy } from "react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa"; // Import the icons
import { Link } from "react-router-dom";

const STORAGE_KEY = "countriesData"; // Define a storage key

const GeosList = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Retrieve accessToken from localStorage
  const accessToken = localStorage.getItem("accessToken");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let cachedData = localStorage.getItem(STORAGE_KEY); // Load cached data from local storage
  //       if (cachedData) {
  //         // If cached data exists, parse and set it
  //         setCountriesData(JSON.parse(cachedData));
  //         setLoading(false);
  //       } else {
  //         const response = await Axios.get("/api/country/v1.0/countries", {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         });
  //         const countries = response.data;
  //         const updatedCountries = await Promise.all(
  //           countries.map(async (country) => {
  //             try {
  //               const governoratesResponse = await Axios.get(
  //                 `/api/Governorates/v1.0/Governorates/${country.guid}`
  //               );
  //               const governoratesData = governoratesResponse.data;
  //               const staticCountryGuid = country.staticCountryGuid;

  //               const updatedGovernorates = await Promise.all(
  //                 governoratesData.map(async (governorate) => {
  //                   try {
  //                     const districtsResponse = await Axios.get(
  //                       `/api/District/v1.0/district/${governorate.guid}`
  //                     );
  //                     const districtsData = districtsResponse.data;
  //                     return {
  //                       ...governorate,
  //                       districtsData,
  //                     };
  //                   } catch (error) {
  //                     console.log(
  //                       `Error fetching districts data for governorate ${governorate.code}:`,
  //                       error
  //                     );
  //                     return governorate;
  //                   }
  //                 })
  //               );

  //               return {
  //                 ...country,
  //                 governoratesData: updatedGovernorates,
  //                 staticCountryGuid,
  //               };
  //             } catch (error) {
  //               console.log(
  //                 `Error fetching governorates data for country ${country.code}:`,
  //                 error
  //               );
  //               return country;
  //             }
  //           })
  //         );
  //         setCountriesData(updatedCountries);
  //         setLoading(false);
  //         // Cache fetched data to local storage
  //         localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCountries));
  //       }
  //     } catch (error) {
  //       localforage.setItem("countriesData", updatedCountries);
  //       console.log("Error fetching countries data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [accessToken]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/api/country/v1.0/countries");
        const countries = response.data;
        const updatedCountries = await Promise.all(
          countries.map(async (country) => {
            try {
              const governoratesResponse = await Axios.get(
                `/api/Governorates/v1.0/Governorates/${country.guid}`
              );
              const governoratesData = governoratesResponse.data;
              const staticCountryGuid = country.staticCountryGuid;

              const updatedGovernorates = await Promise.all(
                governoratesData.map(async (governorate) => {
                  try {
                    const districtsResponse = await Axios.get(
                      `/api/District/v1.0/district/${governorate.guid}`
                    );
                    const districtsData = districtsResponse.data;
                    return {
                      ...governorate,
                      districtsData,
                    };
                  } catch (error) {
                    console.log(
                      `Error fetching districts data for governorate ${governorate.code}:`,
                      error
                    );
                    return governorate;
                  }
                })
              );

              return {
                ...country,
                governoratesData: updatedGovernorates,
                staticCountryGuid,
              };
            } catch (error) {
              console.log(
                `Error fetching governorates data for country ${country.code}:`,
                error
              );
              return country;
            }
          })
        );
        setCountriesData(updatedCountries);
        setLoading(false);

        // Store the fetched data in localforage
        localforage.setItem("countriesData", updatedCountries);

        // Store the fetched data in sessionStorage
        sessionStorage.setItem(
          "countriesData",
          JSON.stringify(updatedCountries)
        );
      } catch (error) {
        console.log("Error fetching countries data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const response = await Axios.get("/api/country/v1.0/countries");
  //       const countries = response.data;
  //       const updatedCountries = await Promise.all(
  //         countries.map(async (country) => {
  //           try {

  //             const governoratesResponse = await Axios.get(
  //               `/api/Governorates/v1.0/Governorates/${country.guid}`
  //             );
  //             const governoratesData = governoratesResponse.data;
  //             const staticCountryGuid = country.staticCountryGuid;

  //             const updatedGovernorates = await Promise.all(
  //               governoratesData.map(async (governorate) => {
  //                 try {
  //                   const districtsResponse = await Axios.get(
  //                     `/api/District/v1.0/district/${governorate.guid}`
  //                   );
  //                   const districtsData = districtsResponse.data;
  //                   return {
  //                     ...governorate,
  //                     districtsData,
  //                   };
  //                 } catch (error) {
  //                   console.log(
  //                     `Error fetching districts data for governorate ${governorate.code}:`,
  //                     error
  //                   );
  //                   return governorate;
  //                 }
  //               })
  //             );

  //             return {
  //               ...country,
  //               governoratesData: updatedGovernorates,
  //               staticCountryGuid,
  //             };
  //           } catch (error) {
  //             console.log(
  //               `Error fetching governorates data for country ${country.code}:`,
  //               error
  //             );
  //             return country;
  //           }
  //         })
  //       );
  //       setCountriesData(updatedCountries);
  //       setLoading(false);

  //       // Store the fetched data in localforage
  //       localforage.setItem("countriesData", updatedCountries);
  //     } catch (error) {
  //       console.log("Error fetching countries data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Code", accessor: "code" },
      { Header: "Name (Arabic)", accessor: "nameAr" },
      { Header: "Governorate Code", accessor: "governoratesData[0].code" },
      { Header: "Governorate Name", accessor: "governoratesData[0].name" },
      {
        Header: "Governorate Name (Arabic)",
        accessor: "governoratesData[0].nameAr",
      },
      {
        Header: "District Code",
        accessor: "governoratesData[0].districtsData[0].code",
      },
      {
        Header: "District Name",
        accessor: "governoratesData[0].districtsData[0].name",
      },
      {
        Header: "District Name (Arabic)",
        accessor: "governoratesData[0].districtsData[0].nameAr",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: countriesData }, useSortBy);

  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full mx-auto p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Countries Info List</h2>
      <div className="flex justify-between items-center p-6">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-500 p-2 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/geo/new" className=" med-btn-pri">
          Add New
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-pri absolute top-80 right-50 h-20 w-20"></div>
        </div>
      ) : (
        <table
          {...getTableProps()}
          className="border-collapse border border-gray-500 w-full"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border border-gray-500 p-2"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b text-center border-gray-500"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="border-b border-gray-500 p-2"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GeosList;

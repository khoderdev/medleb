// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { FaSortDown, FaSortUp } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AddIcon } from "../AddIcon";

// const CurrenciesTable = () => {
//   const [currencies, setCurrencies] = useState([]);
//   const [loading, setLoading] = useState(true); // Initially set to true to show loading state
//   const [error, setError] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const currencyResponse = await axios.get(
//           "http://localhost:3000/currency/currencies"
//         );
//         const currencyData = Array.isArray(currencyResponse.data)
//           ? currencyResponse.data
//           : [];
//         console.log("Fetched currency data:", currencyData); // Log fetched data
//         setCurrencies(currencyData);
//       } catch (error) {
//         setError("Error fetching data. Please try again later."); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//       }
//     };

//     fetchData();
//   }, []);

//   const requestSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedData = useMemo(() => {
//     if (sortConfig.key !== null) {
//       return [...currencies].sort((a, b) => {
//         const valueA = a[sortConfig.key] ? a[sortConfig.key] : "";
//         const valueB = b[sortConfig.key] ? b[sortConfig.key] : "";
//         return sortConfig.direction === "asc"
//           ? valueA.localeCompare(valueB)
//           : valueB.localeCompare(valueA);
//       });
//     }
//     return currencies;
//   }, [currencies, sortConfig]);

//   const filteredData = useMemo(() => {
//     const data = sortedData.filter((currency) => {
//       const code = currency.code ? currency.code.toLowerCase() : "";
//       const name = currency.name ? currency.name.toLowerCase() : "";
//       const symbol = currency.symbol ? currency.symbol.toLowerCase() : "";
//       return (
//         code.includes(searchTerm.toLowerCase()) ||
//         name.includes(searchTerm.toLowerCase()) ||
//         symbol.includes(searchTerm.toLowerCase())
//       );
//     });

//     console.log("Sample Currency Object:", data[0]); // Log the structure of the first currency object
//     return data;
//   }, [sortedData, searchTerm]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto h-screen p-4 text-black-text dark:text-white-text">
//       <h2 className="text-[1.750rem] text-center text-green-pri font-medium">
//         Currency Data
//       </h2>
//       <div className="flex justify-between items-center pb-4 py-6">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Link to={"/currency/new"} className="icon-hovered button-with-icon">
//           <AddIcon />
//         </Link>
//       </div>
//       {filteredData.length === 0 ? (
//         <div>No data available.</div>
//       ) : (
//         <div className="overflow-x-auto max-h-[calc(100vh-284px)]">
//           <table className="w-full table-auto border border-collapse">
//             <thead className="select-none h-10 sticky top-0 z-20 bg-gray-200 dark:bg-black-input font-normal">
//               <tr>
//                 <th className="relative" onClick={() => requestSort("code")}>
//                   Code
//                   <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
//                     {sortConfig.key === "code" &&
//                       (sortConfig.direction === "asc" ? (
//                         <FaSortDown />
//                       ) : (
//                         <FaSortUp />
//                       ))}
//                   </div>
//                 </th>
//                 <th className="relative" onClick={() => requestSort("name")}>
//                   Name
//                   <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
//                     {sortConfig.key === "name" &&
//                       (sortConfig.direction === "asc" ? (
//                         <FaSortDown />
//                       ) : (
//                         <FaSortUp />
//                       ))}
//                   </div>
//                 </th>
//                 <th className="relative" onClick={() => requestSort("symbol")}>
//                   Symbol
//                   <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
//                     {sortConfig.key === "symbol" &&
//                       (sortConfig.direction === "asc" ? (
//                         <FaSortDown />
//                       ) : (
//                         <FaSortUp />
//                       ))}
//                   </div>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-center overflow-y-auto z-0">
//               {filteredData.map((currency, index) => (
//                 <tr
//                   key={index}
//                   className="border-b hover:bg-white-contents dark:hover:bg-black-contents"
//                 >
//                   <td className="py-2 px-4">{currency.Code}</td>
//                   <td className="py-2 px-4">{currency.Name}</td>
//                   <td className="py-2 px-4">{currency.NameAr}</td>
//                   {/* Add more columns as needed */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CurrenciesTable;

// ///////////////////
// ///////////////////
// ///////////////////
// ///////////////////

import axios from "axios";
import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const CurrenciesTable = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [editedCurrency, setEditedCurrency] = useState(null);

 

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleEdit = (currency) => {
    setEditedCurrency(currency);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://192.168.10.88:3010/api/currency/edit/${editedCurrency.Guid}`,
        editedCurrency
      );
      const updatedCurrencyResponse = await axios.get(
        `http://localhost:3000/currencies/${editedCurrency.Guid}`
      );
      const updatedCurrency = updatedCurrencyResponse.data;
      const updatedCurrencies = currencies.map((c) =>
        c.Guid === updatedCurrency.Guid ? updatedCurrency : c
      );
      setCurrencies(updatedCurrencies);
      setEditedCurrency(null);
    } catch (error) {
      console.error("Error updating currency:", error);
    }
  };

  const handleCancel = () => {
    setEditedCurrency(null);
  };

  const handleDelete = async (currency) => {
    try {
      await axios.delete(`http://localhost:3000/currencies/${currency.Guid}`);
      const updatedCurrencies = currencies.filter(
        (c) => c.Guid !== currency.Guid
      );
      setCurrencies(updatedCurrencies);
    } catch (error) {
      console.error("Error deleting currency:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto h-screen p-4 text-black-text dark:text-white-text">
      <h2 className="text-[1.750rem] text-center text-green-pri font-medium">
        Currency Data
      </h2>
      <div className="flex justify-between items-center pb-4 py-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/currency/new" className="icon-hovered button-with-icon">
          <AddIcon />
        </Link>
      </div>
      {filteredData.length === 0 ? (
        <div>No data available.</div>
      ) : (
        <div className="overflow-x-auto max-h-[calc(100vh-284px)]">
          <table className="w-full table-auto border border-collapse">
            <thead className="select-none h-10 sticky top-0 z-20 bg-gray-200 dark:bg-black-input font-normal">
              <tr>
                <th className="relative" onClick={() => requestSort("Code")}>
                  Code
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    {sortConfig.key === "Code" &&
                      (sortConfig.direction === "asc" ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      ))}
                  </div>
                </th>
                <th className="relative" onClick={() => requestSort("name")}>
                  Name
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "asc" ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      ))}
                  </div>
                </th>
                <th className="relative" onClick={() => requestSort("NameAr")}>
                  Name Ar
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    {sortConfig.key === "NameAr" &&
                      (sortConfig.direction === "asc" ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      ))}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-center overflow-y-auto z-0">
              {filteredData.map((currency, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-white-contents dark:hover:bg-black-contents"
                >
                  <td className="py-2 px-4">
                    {editedCurrency === currency ? (
                      <input
                        type="text"
                        value={currency.Code}
                        onChange={(e) =>
                          setEditedCurrency({
                            ...editedCurrency,
                            Code: e.target.value,
                          })
                        }
                      />
                    ) : (
                      currency.Code
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editedCurrency === currency ? (
                      <input
                        type="text"
                        value={currency.Name}
                        onChange={(e) =>
                          setEditedCurrency({
                            ...editedCurrency,
                            Name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      currency.Name
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editedCurrency === currency ? (
                      <input
                        type="text"
                        value={currency.NameAr}
                        onChange={(e) =>
                          setEditedCurrency({
                            ...editedCurrency,
                            NameAr: e.target.value,
                          })
                        }
                      />
                    ) : (
                      currency.NameAr
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editedCurrency === currency ? (
                      <div>
                        <button
                          onClick={handleSave}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(currency)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleDelete(currency)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody className="text-center overflow-y-auto z-0">
              {filteredData.map((currency, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-white-contents dark:hover:bg-black-contents"
                >
                  <td className="py-2 px-4">{currency.Code}</td>
                  <td className="py-2 px-4">{currency.Name}</td>
                  <td className="py-2 px-4">{currency.NameAr}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEdit(currency)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleDelete(currency)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrenciesTable;

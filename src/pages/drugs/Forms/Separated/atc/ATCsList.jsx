// import React, { useState, useEffect, useMemo } from "react";
// import Axios from "../../../../../api/axios";
// import { Link, useParams } from "react-router-dom";
// import { useTable, useSortBy } from "react-table";
// import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

// const ATCsList = () => {
//   const { guid } = useParams();
//   const [data, setData] = useState([]);
//   const [atcCodeData, setAtcCodeData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const response = await Axios.get(
//           guid ? `/api/atc/v1.0?guid=${guid}` : "/api/atc/v1.0"
//         );
//         setData(Array.isArray(response.data) ? response.data : []);
//         localStorage.setItem("data", JSON.stringify(response.data));

//         // const atcCodeResponse = await Axios.get(
//         //   guid ? `/api/atccodes/codes/v1.0/${guid}` : "/api/atccodes/codes/v1.0"
//         // );
//         // setAtcCodeData(
//         //   Array.isArray(atcCodeResponse.data) ? atcCodeResponse.data : []
//         // );
//         // localStorage.setItem(
//         //   "atcCodeData",
//         //   JSON.stringify(atcCodeResponse.data)
//         // );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [guid]);

//   useEffect(() => {
//     const localData = localStorage.getItem("data");
//     const localAtcCodeData = localStorage.getItem("atcCodeData");

//     if (localData) {
//       setData(JSON.parse(localData));
//     }

//     if (localAtcCodeData) {
//       setAtcCodeData(JSON.parse(localAtcCodeData));
//     }
//   }, []);

//   const columns = React.useMemo(
//     () => [
//       // { Header: "ID", accessor: "guid" },
//       { Header: "Code", accessor: "code" },
//       { Header: "Level Name", accessor: "levelName" },
//       { Header: "Level Name (Arabic)", accessor: "levelNameAr" },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data }, useSortBy);

//   const filteredRows = React.useMemo(() => {
//     const filteredData = data.filter((row) =>
//       row.code.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     return filteredData;
//   }, [data, searchTerm]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="container mx-auto pt-6 md:px-10 text-black-text dark:text-white-text">
//       <div>
//         <h2 className="text-2xl text-center font-bold mb-4">ATCs Table</h2>
//         <input
//           type="text"
//           placeholder="Search by code"
//           value={searchTerm}
//           onChange={handleChange}
//           className="rounded-md dark:border-white-text text-black-text dark:text-white-text mb-4 bg-white-bg dark:bg-black-bg shadow-md dark:shadow-black-shadow dark:focus:border-transparent outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
//         />
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="overflow-x-auto ">
//             <table {...getTableProps()} className="w-full table-auto">
//               <thead>
//                 {headerGroups.map((headerGroup) => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                       <th
//                         {...column.getHeaderProps(
//                           column.getSortByToggleProps()
//                         )}
//                         className="px-4 py-2 border font-normal w-20"
//                       >
//                         {column.render("Header")}
//                         <span>
//                           {column.isSorted ? (
//                             column.isSortedDesc ? (
//                               <FaSortDown />
//                             ) : (
//                               <FaSortUp />
//                             )
//                           ) : (
//                             <FaSort />
//                           )}
//                         </span>
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody {...getTableBodyProps()}>
//                 {rows.map((row) => {
//                   prepareRow(row);
//                   return (
//                     <tr
//                       {...row.getRowProps()}
//                       className="hover:bg-gray-100 dark:hover:bg-black-contents"
//                     >
//                       {row.cells.map((cell) => (
//                         <td
//                           {...cell.getCellProps()}
//                           className="border-b px-4 py-2"
//                         >
//                           {cell.render("Cell")}
//                         </td>
//                       ))}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ATCsList;

import React, { useState, useEffect, useMemo } from "react";
import Axios from "../../../../../api/axios";
import { Link, useParams } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const ATCsList = () => {
  const { guid } = useParams();
  const [data, setData] = useState([]);
  const [atcCodeData, setAtcCodeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await Axios.get(
          guid ? `/api/atc/v1.0?guid=${guid}` : "/api/atc/v1.0"
        );
        setData(Array.isArray(response.data) ? response.data : []);
        localStorage.setItem("data", JSON.stringify(response.data));

        // const atcCodeResponse = await Axios.get(
        //   guid ? `/api/atccodes/codes/v1.0/${guid}` : "/api/atccodes/codes/v1.0"
        // );
        // setAtcCodeData(
        //   Array.isArray(atcCodeResponse.data) ? atcCodeResponse.data : []
        // );
        // localStorage.setItem(
        //   "atcCodeData",
        //   JSON.stringify(atcCodeResponse.data)
        // );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [guid]);

  useEffect(() => {
    const localData = localStorage.getItem("data");
    const localAtcCodeData = localStorage.getItem("atcCodeData");

    if (localData) {
      setData(JSON.parse(localData));
    }

    if (localAtcCodeData) {
      setAtcCodeData(JSON.parse(localAtcCodeData));
    }
  }, []);

  const columns = React.useMemo(
    () => [
      // { Header: "ID", accessor: "guid" },
      { Header: "Code", accessor: "code" },
      { Header: "Level Name", accessor: "levelName" },
      { Header: "Level Name (Arabic)", accessor: "levelNameAr" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const filteredRows = useMemo(() => {
    return data.filter((row) =>
      row.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const handleChange = (event, newValue) => {
    setSearchTerm(newValue ? newValue : "");
  };

  return (
    <div className="container mx-auto pt-6 md:px-10 text-black-text dark:text-white-text">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">ATCs Table</h2>
        <Autocomplete
          disablePortal
          id="search"
          options={filteredRows.map((row) => row.code)} // Assuming 'code' is the property to search
          sx={{ width: 250 }}
          value={searchTerm}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="ATC Codes" autoComplete="off" />
          )}
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto ">
            <table {...getTableProps()} className="w-full table-auto">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="px-4 py-2 border font-normal w-20"
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
                {filteredRows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr
                      key={rowIndex}
                      {...row.getRowProps()}
                      className="hover:bg-gray-100 dark:hover:bg-black-contents"
                    >
                      {row.cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          {...cell.getCellProps()}
                          className="border-b px-4 py-2"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ATCsList;

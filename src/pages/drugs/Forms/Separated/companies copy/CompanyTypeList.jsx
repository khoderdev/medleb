import React, { useEffect, useMemo, useState } from "react";
import Axios from "../../../../../api/axios";
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";

const CompanyTypeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "/api/CompanyType/v1.0/CompanyTypes?Enabled=true&sortOrder=desc"
        );
        setData(response.data.data); // Corrected the function name
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  const columns = useMemo(
    () => [
      {
        Header: "GUID",
        accessor: "guid",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Arabic Name",
        accessor: "nameAr",
      },
      {
        Header: "Enabled",
        accessor: "enabled",
      },
      {
        Header: "Created Date",
        accessor: "createdDate",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data },
      useFilters,
      useGlobalFilter,
      useSortBy // Place useSortBy after useGlobalFilter
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CompanyTypeList;

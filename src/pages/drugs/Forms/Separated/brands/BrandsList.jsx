// import React, { useState, useEffect, useMemo } from "react";
// import Axios from "../../../../../api/axios";
// import StaticDataTable from "../StaticDataTable";
// import { useNavigate } from "react-router-dom";

// const BrandsList = () => {
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const initialSortConfig = { key: "name", direction: "asc" };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [brandsResponse, countriesResponse] = await Promise.all([
//           Axios.get("/api/brands/v1.0/brands"),
//           Axios.get("/api/country/v1.0/countries"),
//         ]);
//         const brandsItems = Array.isArray(brandsResponse.data)
//           ? brandsResponse.data
//           : [];
//         const countriesMap = new Map(
//           countriesResponse.data.map((country) => [country.guid, country])
//         );
//         const brandsWithCountries = brandsItems.map((brand) => ({
//           ...brand,
//           countryName: countriesMap.get(brand.countryGuid)?.name || "",
//           countryNameAr: countriesMap.get(brand.countryGuid)?.nameAr || "",
//         }));
//         setBrands(brandsWithCountries);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCreateBrand = () => {
//     // Navigate to the create brand page
//     navigate("/brands/new");
//   };

//   const columns = [
//     { name: "Brand Name", key: "name" },
//     { name: "Brand Name ar", key: "nameAr" },
//     { name: "Country Name", key: "countryName" },
//     { name: "Country Name ar", key: "countryNameAr" },
//   ];

//   const requestSort = (key) => {
//     const direction =
//       sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
//     setSortConfig({ key, direction });
//   };

//   const [sortConfig, setSortConfig] = useState(initialSortConfig);

//   const sortedData = useMemo(() => {
//     const sortedBrands = [...brands].sort((a, b) => {
//       const valueA = a[sortConfig.key]?.toLowerCase() || "";
//       const valueB = b[sortConfig.key]?.toLowerCase() || "";
//       return sortConfig.direction === "asc"
//         ? valueA.localeCompare(valueB)
//         : valueB.localeCompare(valueA);
//     });
//     return sortedBrands;
//   }, [brands, sortConfig]);

//   return (
//     <div className="py-10">
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <StaticDataTable
//           title="Brands Table"
//           createBtnLabel=""
//           createBtnUrl="/brands/new"
//           onCreateBtnClick={handleCreateBrand}
//           data={sortedData}
//           columns={columns}
//           initialSortConfig={initialSortConfig}
//           tableClasses="my-custom-table-class"
//           headerClasses="my-custom-header-class"
//           rowClasses="my-custom-row-class"
//           requestSort={requestSort}
//         />
//       )}
//     </div>
//   );
// };

// export default BrandsList;

import React, { useState } from "react";
import Axios from "../../../../../api/axios";
import StaticDataTable from "../StaticDataTable";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query"; // Import useQuery hook

const BrandsList = () => {
  const navigate = useNavigate();

  // Prefetch countries data
  const { data: countriesData } = useQuery("countries", async () => {
    const countriesResponse = await Axios.get("/api/country/v1.0/countries");
    return countriesResponse.data;
  });

  // Prefetch brands data
  const { data: brandsData } = useQuery("brands", async () => {
    const brandsResponse = await Axios.get("/api/brands/v1.0/brands");
    return brandsResponse.data;
  });

  const handleCreateBrand = () => {
    // Navigate to the create brand page
    navigate("/brands/new");
  };

  const columns = [
    { name: "Brand Name", key: "name" },
    { name: "Brand Name ar", key: "nameAr" },
    { name: "Country Name", key: "countryName" },
    { name: "Country Name ar", key: "countryNameAr" },
  ];

  const combinedData =
    brandsData && countriesData
      ? brandsData.map((brand) => ({
          ...brand,
          countryName:
            countriesData.find((country) => country.guid === brand.countryGuid)
              ?.name || "",
          countryNameAr:
            countriesData.find((country) => country.guid === brand.countryGuid)
              ?.nameAr || "",
        }))
      : [];

  return (
    <div className="py-10">
      <StaticDataTable
        title="Brands Table"
        createBtnLabel=""
        createBtnUrl="/brands/new"
        onCreateBtnClick={handleCreateBrand}
        data={combinedData}
        columns={columns}
        tableClasses="my-custom-table-class"
        headerClasses="my-custom-header-class"
        rowClasses="my-custom-row-class"
      />
    </div>
  );
};

export default BrandsList;

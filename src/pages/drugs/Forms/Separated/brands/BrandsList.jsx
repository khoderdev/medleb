// import React, { useState, useEffect } from "react";
// import Axios from "../../../../../api/axios";
// import StaticDataTable from "../StaticDataTable";

// const BrandsList = () => {
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);

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

//   const columns = [
//     { name: "Brand Name", key: "name" },
//     { name: "Brand Name ar", key: "nameAr" },
//     { name: "Country Name", key: "countryName" },
//     { name: "Country Name ar", key: "countryNameAr" },
//   ];

//   return (
//     <div>
//       <h3>Brands Table</h3>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <StaticDataTable
//           title="Brands Data"
//           createBtnLabel="Create Brand"
//           onCreateBtnClick={handleCreateBrand}
//           data={brands}
//           columns={columns}
//           initialSortConfig={{ key: "name", direction: "asc" }}
//           tableClasses="my-custom-table-class"
//           headerClasses="my-custom-header-class"
//           rowClasses="my-custom-row-class"
//         />
//       )}
//     </div>
//   );
// };

// export default BrandsList;

import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import StaticDataTable from "../StaticDataTable";
import { useNavigate } from "react-router-dom";

const BrandsList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [brandsResponse, countriesResponse] = await Promise.all([
          Axios.get("/api/brands/v1.0/brands"),
          Axios.get("/api/country/v1.0/countries"),
        ]);
        const brandsItems = Array.isArray(brandsResponse.data)
          ? brandsResponse.data
          : [];
        const countriesMap = new Map(
          countriesResponse.data.map((country) => [country.guid, country])
        );
        const brandsWithCountries = brandsItems.map((brand) => ({
          ...brand,
          countryName: countriesMap.get(brand.countryGuid)?.name || "",
          countryNameAr: countriesMap.get(brand.countryGuid)?.nameAr || "",
        }));
        setBrands(brandsWithCountries);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <StaticDataTable
          title="Brands Data"
          createBtnLabel=""
          createBtnUrl="/brands/new"
          onCreateBtnClick={handleCreateBrand}
          data={brands}
          columns={columns}
          initialSortConfig={{ key: "name", direction: "asc" }}
          tableClasses="my-custom-table-class"
          headerClasses="my-custom-header-class"
          rowClasses="my-custom-row-class"
        />
      )}
    </div>
  );
};

export default BrandsList;

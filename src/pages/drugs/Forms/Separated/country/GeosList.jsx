import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { Link, useParams } from "react-router-dom";

const GeosList = () => {
  const { guid } = useParams();
  const [data, setData] = useState([]);
  const [governoratesAndDistrictsData, setGovernoratesAndDistrictsData] =
    useState([]);
  const [selectedCountryGuid, setSelectedCountryGuid] = useState(null);
  const [selectedCountryName, setSelectedCountryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching countries data");
        const countriesResponse = await Axios.get(
          "/api/country/v1.0/Countries"
        );
        console.log("Response countries data:", countriesResponse.data);
        setData(
          Array.isArray(countriesResponse.data) ? countriesResponse.data : []
        );
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchGovernoratesAndDistrictsData = async () => {
      try {
        if (selectedCountryGuid) {
          console.log(
            "Fetching governorates for country:",
            selectedCountryGuid
          );
          const governoratesResponse = await Axios.get(
            `/api/governorates/v1.0/governorates/${selectedCountryGuid}`
          );
          console.log("Response governorates data:", governoratesResponse.data);

          const governorates = Array.isArray(governoratesResponse.data)
            ? governoratesResponse.data
            : [];

          // Fetch districts for each governorate
          const promises = governorates.map(async (governorate) => {
            const districtsResponse = await Axios.get(
              `/api/District/v1.0/District/${governorate.guid}`
            );
            console.log(
              "Response districts data for governorate:",
              governorate.guid,
              districtsResponse.data
            );
            return {
              governorate: governorate,
              districts: Array.isArray(districtsResponse.data)
                ? districtsResponse.data
                : [],
            };
          });

          const governoratesAndDistricts = await Promise.all(promises);
          setGovernoratesAndDistrictsData(governoratesAndDistricts);
        }
      } catch (error) {
        console.error("Error fetching governorates and districts data:", error);
      }
    };

    fetchGovernoratesAndDistrictsData();
  }, [selectedCountryGuid]);

  const handleCountrySelection = async (event) => {
    const selectedCountryName = event.target.value;
    const selectedCountry = data.find(
      (country) => country.name === selectedCountryName
    );
    if (selectedCountry) {
      setSelectedCountryGuid(selectedCountry.guid);
      setSelectedCountryName(selectedCountry.name);
    }
  };

  return (
    <div className="container mx-auto h-screen border-2">
      <h2 className="text-center mb-4">Country Table</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="selection-col">
          <select className="mb-2" onChange={handleCountrySelection}>
            <option value="">Select a country</option>
            {data.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          {selectedCountryName && (
            <div className="">
              <h3>
                Selected Country:
                <span className="text-green-pri font-semibold ml-2">
                  {selectedCountryName}
                </span>
              </h3>
            </div>
          )}
        </div>

        <div className="goback-col">
          <Link
            to="/geo/new"
            className="bg-green-pri hover:bg-green-sec text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Back
          </Link>
        </div>
      </div>

      <div>
        {governoratesAndDistrictsData.length > 0 ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Governorate Code</th>
                <th className="text-left px-4 py-2">Governorate Name</th>
                <th className="text-left px-4 py-2">District Code</th>
                <th className="text-left px-4 py-2">District Name</th>
              </tr>
            </thead>
            <tbody>
              {governoratesAndDistrictsData.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-gray-300">
                    <td colSpan="4">{item.governorate.name}</td>
                  </tr>
                  {item.districts.map((district, idx) => (
                    <tr key={`${index}-${idx}`} className="hover:bg-gray-100">
                      <td className="border-b font-bold px-4 py-2">
                        {item.governorate.code}
                      </td>
                      <td className="border-b font-bold px-4 py-2">
                        {item.governorate.name}
                      </td>
                      <td className="border-b font-bold px-4 py-2">
                        {district.code}
                      </td>
                      <td className="border-b font-bold px-4 py-2">
                        {district.name}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-500">
            No Data available for the selected country.
          </p>
        )}
      </div>
    </div>
  );
};

export default GeosList;

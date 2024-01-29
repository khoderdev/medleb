import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { Link, useParams, useNavigate } from "react-router-dom";

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
    const fetchGovernoratesData = async () => {
      try {
        if (selectedCountryGuid) {
          console.log(
            "Fetching governoratesData for country:",
            selectedCountryGuid
          );
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
      <div className="flex justify-between items-center mb-2 border-2 border-yellow-500">
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
          <p className="text-red-500">
            No Data available for the selected country.
          </p>
        )}
      </div>
    </div>
  );
};

export default GeosList;

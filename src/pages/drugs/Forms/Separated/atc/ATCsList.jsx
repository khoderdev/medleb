import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { Link, useParams } from "react-router-dom";

const ATCsList = () => {
  const { guid } = useParams();
  const [data, setData] = useState([]);
  const [atcCodeData, setAtcCodeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (guid) {
          console.log("Fetching data for guid:", guid);
          const response = await Axios.get(`/api/atc/v1.0?guid=${guid}`);
          console.log("Response data:", response.data);
          setData(Array.isArray(response.data) ? response.data : []);

          console.log("Fetching atcCodeData for guid:", guid);
          const atcCodeResponse = await Axios.get(
            `/api/atccodes/codes/v1.0/${guid}`
          );
          console.log("Response atcCodeData:", atcCodeResponse.data);
          setAtcCodeData(
            Array.isArray(atcCodeResponse.data) ? atcCodeResponse.data : []
          );
        } else {
          console.log("Fetching all data");
          const response = await Axios.get("/api/atc/v1.0");
          console.log("Response data:", response.data);
          setData(Array.isArray(response.data) ? response.data : []);

          console.log("Fetching all atcCodeData");
          const atcCodeResponse = await Axios.get("/api/atccodes/codes/v1.0");
          console.log("Response atcCodeData:", atcCodeResponse.data);
          setAtcCodeData(
            Array.isArray(atcCodeResponse.data) ? atcCodeResponse.data : []
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [guid]);

  return (
    <div className="container mx-auto">
      <div>
        <h2>ATCs Table</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Level Name</th>
              <th className="px-4 py-2">Level Name (Arabic)</th>
              {/* <th className="px-4 py-2">ATC Related Label</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{item.guid}</td>
                <td className="border px-4 py-2">{item.code}</td>
                <td className="border px-4 py-2">{item.levelName}</td>
                <td className="border px-4 py-2">{item.levelNameAr}</td>
                {/* <td className="border px-4 py-2">{item.atcRelatedLabel}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
        <h2>Secondary Table</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">ATC Guid</th>
              <th className="px-4 py-2">Level Name</th>
              <th className="px-4 py-2">Level Name (Arabic)</th>
              <th className="px-4 py-2">Level Number</th>
              <th className="px-4 py-2">ATC Related Label</th>
            </tr>
          </thead>
          <tbody>
            {atcCodeData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{item.guid}</td>
                <td className="border px-4 py-2">{item.code}</td>
                <td className="border px-4 py-2">{item.atcGuid}</td>
                <td className="border px-4 py-2">{item.levelName}</td>
                <td className="border px-4 py-2">{item.levelNameAr}</td>
                <td className="border px-4 py-2">{item.levelNumber}</td>
                <td className="border px-4 py-2">{item.atcRelatedLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ATCsList;

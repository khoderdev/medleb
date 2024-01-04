import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import panadol from "../../../images/panadol.png";
import lebflag from "../../../images/lebflag.png";
import subs2 from "../../../images/subs2.png";
import "../../../index.css";

function List() {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadDrugs() {
    try {
      const res = await axios.get("http://192.168.43.138:3500/drugs");
      setDrugs(res.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error("There's a problem listing the medications:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await loadDrugs();
    };

    fetchData();
  }, []);

  function deleteDrug(id) {
    axios
      .delete(`http://192.168.43.138:3500/drugs/${id}`)
      .then(() => loadDrugs());
  }

  return (
    <div className="flex flex-col sm:p-4">
      {loading ? (
        <p>Loading...</p>
      ) : drugs.length === 0 ? (
        <p className="mb-4 text-2xl text-gray-600">
          No Drugs Data Available. Click
          <Link
            to="/add"
            className="font-semibold text-teal-600 hover:underline mx-2"
          >
            Add
          </Link>
          to create a new drug.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          {drugs.map((data, index) => {
            console.log("Data:", data);
            console.log("_id:", data._id);

            return (
              <div
                key={index}
                className="card w-full overflow-hidden bg-white-fg dark:bg-black-input rounded-3xl border-2 border-[#259F83] p- shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl dark:text-white-text dark:shadow-lg dark:shadow-[#24382ab0]" // Adjust the width here
              >
                <Link
                  to={data._id ? `/viewdrug/${data._id}` : "/"}
                  className="text-black-text no-underline bg-black-bg dark:bg-black-bg dark:text-white-text"
                >
                  <div className="flex">
                    <div className="flex w-2/5 flex-col">
                      {/* Adjust the width here */}
                      <div className=" w-full">
                        <img
                          src={panadol}
                          alt="Drug"
                          className="h-44 w-full object-contain"
                        />
                      </div>
                      <div className="w-full pr-8 sm:pr-12 md:pr-[70px] lg:pr-5 xl:pr-[72px]">
                        <p className="text-md text-right text-[#259F83]">
                          {data.convertToLBP} LBP
                        </p>
                      </div>
                      <div className="w-full pr-8 sm:pr-12  md:pr-[70px] lg:pr-5 xl:pr-[72px]">
                        <p className="text-md text-right text-[#259F83]">
                          {data.convertToUSD} USD
                        </p>
                      </div>
                      <div className="w-full pr-8 sm:pr-12  md:pr-[70px] lg:pr-5 xl:pr-[72px]">
                        <p className="text-md text-right text-[#259F83]">
                          {data.pillPriceLB} LBP/Pill
                        </p>
                      </div>
                    </div>

                    <div className="w-3/5 p-4 text-left">
                      {/* Adjust the width here */}
                      <h2 className="mb-2 text-2xl font-semibold">
                        {data.drugName}
                      </h2>
                      <p className="mb-2 text-sm italic text-gray-600 dark:text-gray-400">
                        {data.ingredientsAndstrength}
                        <span className="ml-1">
                          <span className="mr-1">{data.dosageValueN}</span>
                          <span className="">{data.dosageUnitN}</span>
                        </span>
                      </p>
                      <p className="font-bold">
                        <span className="font-normal mr-1">Dose:</span>
                        <span className="mr-1">{data.dosageValueN}</span>
                        <span className="">{data.dosageUnitN}</span>
                      </p>
                      <p className="font-bold">
                        <span className="font-normal mr-1">Presentation: </span>
                        {data.presentationContentQty}
                      </p>
                      <p className="font-bold">
                        <span className="font-normal mr-1">Form: </span>
                        {data.form}
                      </p>
                      <p className="font-bold">
                        <span className="font-normal mr-1">Route: </span>
                        {data.route}
                      </p>
                      <p className="font-bold">
                        <span className="font-normal mr-1">Type: </span>
                        {data.type}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center w-full justify-between bg-white-contents p-1 sm:px-3">
                  <div className="edit-delete flex flex-col sm:flex-row">
                    <Link
                      to={data._id ? `/editdrug/${data._id}` : "/"}
                      className={`text-teal-600 hover:underline ${
                        !data._id ? "cursor-not-allowed" : ""
                      }`}
                    >
                      <HiPencilAlt className="mr-2 inline-block" />
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteDrug(data._id)}
                      className="ml-2 text-red-600 hover:underline"
                    >
                      <HiTrash className="mr-2 inline-block" />
                      Delete
                    </button>
                  </div>
                  <div className="flex items-center justify-around">
                    <Link to="/Substitute">
                      <img
                        src={subs2}
                        className="w-[110px] cursor-pointer"
                        alt=""
                      ></img>
                    </Link>
                  </div>
                  <div className="flex flex-col-reverse sm:flex-row w-fit items-center justify-center gap-1">
                    <p className=" text-xs dark:text-black">Made in Lebanon</p>
                    <img className="w-[50px]" src={lebflag} alt=""></img>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default List;

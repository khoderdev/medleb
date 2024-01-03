/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable tailwindcss/no-custom-classname */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import panadol from "../../../images/panadol.png";
import nexium from "../../../images/nexium.png";
import zoloft from "../../../images/zoloft.png";
import risperdal from "../../../images/risperdal.png";
import lebflag from "../../../images/lebflag.png";
import subs2 from "../../../images/subs2.png";
import "../../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    width: "100%",
    maxWidth: 400, // You can adjust the max width as needed
    margin: "0 auto", // Center the search bar
  },
  searchInput: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#259F83", // Your desired background color
  },
}));

function List() {
  const [drugs, setDrugs] = useState([]);

  function loadDrugs() {
    axios.get("http://localhost:3500/drugs").then((res) => {
      setDrugs(res.data.reverse());
    });
  }

  useEffect(() => {
    loadDrugs();
  }, []);

  function deleteDrug(id) {
    axios.delete(`http://localhost:3500/drugs/${id}`).then(() => loadDrugs());
  }

  return (
    <div className="container mx-auto flex flex-col px-6 pb-20 pt-16 ">
      {drugs.length === 0 ? (
        <p className="mb-4 text-2xl text-gray-600">
          No Drugs Data Available. Click{" "}
          <Link
            to="/add"
            className="font-semibold text-teal-600 hover:underline"
          >
            Add
          </Link>{" "}
          to add a new drug.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
          {drugs.map((data, index) => (
            <div
              key={index}
              // eslint-disable-next-line tailwindcss/no-contradicting-classname
              className="card w-full overflow-hidden bg-white-fg dark:bg-black-input rounded-3xl border-2 border-[#259F83] p-5 shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl dark:text-white-text dark:shadow-lg dark:shadow-[#24382ab0]" // Adjust the width here
            >
              <Link
                to={`/viewdrug/${data.id}`}
                className="text-black-text no-underline bg-white-bg dark:bg-black-bg dark:text-white-text"
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
                    {" "}
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
              <div className="flex items-center justify-between bg-gray-100 p-2">
                <div className="m-0">
                  <Link
                    to={`/editdrug/${data.id}`}
                    className="display-none ml-2  text-blue-600 hover:underline"
                  >
                    <HiPencilAlt className=" mr-2 inline-block" />
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDrug(data.id)}
                    className="ml-2 text-red-600 hover:underline"
                  >
                    <HiTrash className="mr-2 inline-block" />
                    Delete
                  </button>
                </div>
                <div className="flex w-[65%] items-center justify-around">
                  <img src={subs2} className="w-[110px]" alt=""></img>
                  <div className="flex w-[25%] items-center justify-between">
                    <p className=" text-xs dark:text-black ">Made in Lebanon</p>
                    <img
                      className="mr-[-30px] w-[40px]"
                      src={lebflag}
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;

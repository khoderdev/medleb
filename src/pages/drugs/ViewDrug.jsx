/* eslint-disable tailwindcss/no-contradicting-classname */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBack from '@mui/icons-material/ArrowBack';
import panadol from '../../images/panadol.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Drugs() {
  const { id } = useParams();

  const [drug, setDrug] = useState([]);

  // useEffect(() => {
  //   axios.get(`"http://localhost:3500/drugs"${id}`).then((res) => {
  //     setDrug(res.data);
  //   });
  // }, [id]);

  console.log(drug);
  return (
    <div className="min-h-screen p-4 dark:text-white sm:p-8">
      <div className="mx-auto max-w-[95%] text-left  ">
        <Link
          to={`/list`}
          className="mb-4 inline-block self-start p-3 text-lg text-teal-600 "
        >
          <ArrowBackIosIcon fontSize="medium" className="inline align-middle" />
          Back
        </Link>

        {drug && (
          <div className="rounded-xl bg-[#e0e0e0] p-4 shadow-lg shadow-[#0000006e] dark:bg-black sm:p-8">
            <div className="flex flex-row justify-between">
              <h2 className="mb-4  border-b border-gray-300 pb-2 text-3xl font-bold">
                {drug.drugname}
              </h2>
              <h2 className="mb-4 pb-2 text-2xl font-bold text-teal-600">
                {drug.priceLB} L.L.
              </h2>
              <h2 className="mb-4 pb-2 text-2xl font-bold text-teal-600">
                {drug.priceForeign}
                {drug.currencyForeign}
                <br />
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
              <div>
                <img
                  // src={drug.drugImage}
                  src={panadol} // static import for testing the view drug layouts
                  alt="Drug"
                  className="sticky top-3 h-auto w-[400px] rounded-lg p-10 text-center sm:w-[500px] md:w-[500px] lg:w-[500px]"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">Ingredients</h3>
                    <p>{drug.ingredients}</p>
                  </div>
                  {/* <div>
                    <h3 className="text-xl font-semibold">Price</h3>
                    <p>{drug.priceLB}</p>
                  </div> */}
                  <div>
                    <h3 className="text-xl font-semibold">Dosage</h3>
                    <p>{drug.dosage}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Presentation</h3>
                    <p>{drug.presentation}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Form</h3>
                    <p>{drug.form}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Route</h3>
                    <p>{drug.route}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Type</h3>
                    <p>{drug.type}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Country</h3>
                    <p>{drug.country}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Agent</h3>
                    <p>{drug.agent}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Manufacturer</h3>
                    <p>{drug.manufacturer}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Manufacturer Country
                    </h3>
                    <p>{drug.manufacturerCountry}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Subsidy Percentage
                    </h3>
                    <p>{drug.subsidyPercentage}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Stratum</h3>
                    <p>{drug.stratum}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ATC</h3>
                    <p>{drug.atc}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Code</h3>
                    <p>{drug.code}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Cargo & Shipping Terms
                    </h3>
                    <p>{drug.cargoShippingTerms}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Registration Number
                    </h3>
                    <p>{drug.registrationNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drugs;

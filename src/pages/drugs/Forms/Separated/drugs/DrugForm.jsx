import React, { useState } from "react";
import Axios from "../../../../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DrugForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const [drugData, setDrugData] = useState({
    // Initialize with default values
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDrugData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server endpoint
      console.log("Drug Data:", drugData);

      Axios
        .post("/api/drugs/v1.0")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // Modify the API endpoint to match your server's endpoint
      // const response = await Axios.post(
      //   "http://192.168.10.88:3010/api/drugs/v1.0",
      //   drugData
      // );

      console.log("Server Response:", response);
      console.log("Drug added successfully:", response.data);

      // Reset the form after successful submission
      setDrugData({});

      // Display a success toast notification
      toast.success("Drug added successfully");
    } catch (error) {
      console.error("Error adding drug:", error);
      toast.error("Error adding drug");
    }
  };

  return (
    <form
      className="flex flex-col items-center w-full mx-auto pt-10 pb-6 text-black-text dark:text-white-text bg-[#fff] dark:bg-black-bg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full xl:w-fit items-center gap-8 mx-auto px-8 bg-white rounded">
        <div className="col-1">
          <label
            className="font-medium block mb-2"
            htmlFor="registrationNumber"
          >
            Registration Number
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={drugData.registrationNumber}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="SubsidyPercentage">
            Subsidy Percentage
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="SubsidyPercentage"
            name="SubsidyPercentage"
            value={drugData.SubsidyPercentage}
            onChange={handleChange}
            // required
          />

          <div className="col-2 flex flex-col">
            <label className="font-medium block" htmlFor="repDate">
              repDate
            </label>
            <input
              className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
              type="date"
              id="repDate"
              name="repDate"
              value={drugData.repDate}
              onChange={handleChange}
              // required
            />
          </div>

          <label className="font-medium block" htmlFor="bg">
            B/G
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="bg"
            name="bg"
            value={drugData.bg}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-2">
          <label className="font-medium block" htmlFor="dateDc">
            dateDc
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="date"
            id="dateDc"
            name="dateDc"
            value={drugData.dateDc}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="lasteffectiveDate">
            Last effective Date
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="date"
            id="lasteffectiveDate"
            name="lasteffectiveDate"
            value={drugData.lasteffectiveDate}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="cifFob">
            CIF/FOB
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="cifFob"
            name="cifFob"
            value={drugData.cifFob}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="lastpublicAbp">
            Last public Abp
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="number"
            id="lastpublicAbp"
            name="lastpublicAbp"
            value={drugData.lastpublicAbp}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-3">
          <label className="font-medium block" htmlFor="ljFobValueUsd">
            lj Fob Value Usd
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="number"
            id="ljFobValueUsd"
            name="ljFobValueUsd"
            value={drugData.ljFobValueUsd}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block mt-3" htmlFor="wjLebPubPriceHos">
            wjLeb Pub Price Hos
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="wjLebPubPriceHos"
            name="wjLebPubPriceHos"
            value={drugData.wjLebPubPriceHos}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="seq">
            Seq
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="seq"
            name="seq"
            value={drugData.seq}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="sideEffect">
            Side Effect
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="sideEffect"
            name="sideEffect"
            value={drugData.sideEffect}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-">
          <label className="font-medium block" htmlFor="webcifFob">
            Web cif/Fob
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="webcifFob"
            name="webcifFob"
            value={drugData.webcifFob}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="webpublicAbp">
            Web public Abp
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="number"
            id="webpublicAbp"
            name="webpublicAbp"
            value={drugData.webpublicAbp}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="webcurrency">
            Web currency
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            id="webcurrency"
            name="webcurrency"
            value={drugData.webcurrency}
            onChange={handleChange}
            // required
          />

          <label className="font-medium block" htmlFor="posology">
            Posology
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="posology"
            name="posology"
            value={drugData.posology}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-2 flex flex-col">
          <label className="font-medium block" htmlFor="gtin">
            GTIN
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="gtin"
            name="gtin"
            value={drugData.gtin}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="notes">
            Notes
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="notes"
            name="notes"
            value={drugData.notes}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="ingredientLabel">
            Ingredient Label
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="ingredientLabel"
            name="ingredientLabel"
            value={drugData.ingredientLabel}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-5">
          <label className="font-medium block" htmlFor="description">
            Description
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="description"
            name="description"
            value={drugData.description}
            onChange={handleChange}
            // required
          />
          <label
            className="font-medium block"
            htmlFor="activeInactiveIngredient"
          >
            Active Inactive Ingredient
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="activeInactiveIngredient"
            name="activeInactiveIngredient"
            value={drugData.activeInactiveIngredient}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="indication">
            Indication
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="indication"
            name="indication"
            value={drugData.indication}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-">
          <label className="font-medium block" htmlFor="methodOfAdministration">
            Method Of Administration
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="methodOfAdministration"
            name="methodOfAdministration"
            value={drugData.methodOfAdministration}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="contraindications">
            Contraindications
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="contraindications"
            name="contraindications"
            value={drugData.contraindications}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="precautionForUse">
            Precaution For Use
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="precautionForUse"
            name="precautionForUse"
            value={drugData.precautionForUse}
            onChange={handleChange}
            // required
          />
        </div>

        <div className="col-">
          <label className="font-medium block" htmlFor="toxicity">
            Toxicity
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="toxicity"
            name="toxicity"
            value={drugData.toxicity}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="storageCondition">
            Storage Condition
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="storageCondition"
            name="storageCondition"
            value={drugData.storageCondition}
            onChange={handleChange}
            // required
          />
          <label className="font-medium block" htmlFor="shelfLife">
            Shelf Life
          </label>
          <input
            className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
            type="text"
            id="shelfLife"
            name="shelfLife"
            value={drugData.shelfLife}
            onChange={handleChange}
            // required
          />
        </div>
      </div>

      <div className="checkboxes flex flex-wrap border-2 w-fit mb-4 justify-center gap-10 p-4">
        <div>
          <label className="font-medium block" htmlFor="hospPricing">
            Hosp Pricing
          </label>
          <input
            className="mb-4 cursor-pointer border rounded"
            type="checkbox"
            id="hospPricing"
            name="hospPricing"
            value={drugData.hospPricing}
            onChange={handleChange}
            // required
          />
        </div>

        <div>
          <label className="font-medium block" htmlFor="isDouanes">
            isDouanes:
          </label>
          <input
            className="mb-4 border cursor-pointer rounded"
            type="checkbox"
            id="isDouanes"
            name="isDouanes"
            value={drugData.isDouanes}
            onChange={handleChange}
            // required
          />
        </div>

        <div>
          <label className="font-medium block" htmlFor="nm">
            None Marketed
          </label>
          <input
            className="cursor-pointer border rounded"
            type="checkbox"
            id="nm"
            name="nm"
            value={drugData.nm}
            onChange={handleChange}
            // required
          />
        </div>
        <div>
          <label className="font-medium block" htmlFor="isOtc">
            is Otc
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isOtc"
            name="isOtc"
            value={drugData.isOtc}
            onChange={handleChange}
            // required
          />
        </div>

        <div>
          <label className="font-medium block" htmlFor="isNssf">
            is Nssf
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isNssf"
            name="isNssf"
            value={drugData.isNssf}
            onChange={handleChange}
            // required
          />
        </div>

        <div>
          <label className="font-medium block" htmlFor="isNarcotis">
            is Narcotis
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isNarcotis"
            name="isNarcotis"
            value={drugData.isNarcotis}
            onChange={handleChange}
            // required
          />
        </div>

        <div>
          <label className="font-medium block" htmlFor="isBiological">
            is Biological
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isBiological"
            name="isBiological"
            value={drugData.isBiological}
            onChange={handleChange}
            // required
          />
        </div>
      </div>
      <div className="btn-col flex-shrink">
        <button
          className="med-btn-pri"
          // className="inline-block cursor-pointer rounded-md bg-teal-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-teal-400"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DrugForm;

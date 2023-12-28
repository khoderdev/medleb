import React, { useState } from "react";
import axios from "../../../../api/axios";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DrugForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [drugData, setDrugData] = useState({
    Guid: uuidv4(),
    ATCGuid: uuidv4(),
    DosageGuid: uuidv4(),
    PresentationGuid: uuidv4(),
    FormGuid: uuidv4(),
    RouteGuid: uuidv4(),
    StratumGuid: uuidv4(),
    StratumTypeGuid: uuidv4(),
    AgentGuid: uuidv4(),
    BrandGuid: uuidv4(),
    ManufacturerGuid: uuidv4(),
    CountryGuid: uuidv4(),
    ResponsiblePartyGuid: uuidv4(),
    DrugLabelGuid: uuidv4(),
    Code: "123", // Assuming this should be a unique identifier
    RegistrationNumber: "123",
    REP_date: currentDate,
    IsDouanes: true,
    Date_dc: currentDate,
    LASTEffective_Date: currentDate,
    CIF_FOB: "FOB",
    LASTPublicABP: 10,
    LASTCurrencyGuid: uuidv4(),
    SubsidyLabel: "",
    SubsidyPercentage: 0,
    LJ_FOB_ValueUSD: 100,
    HospPricing: true,
    WJ_Leb_PubPriceHos: "90000",
    Seq: "Seq123",
    B_G: "Brand",
    Substitutable: false,
    WEBCIF_FOB: "92000",
    WEBPublicABP: 1000,
    WEBCurrency: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    NM: true,
    GTIN: "1111111111111",
    Notes: "Drug Note Test",
    Description: "Drug Description Test",
    ActiveInactiveIngredient: "Paracetamol",
    Indication: "Drug Indication",
    Posology: "Drug posology Test",
    MethodOfAdministration: "Drug method Of Administration Text",
    Contraindications: "Drug contraindications Test",
    PrecautionForUse: "Drug precaution For Use Test",
    EffectOnFGN: "Drug effect On Fgn Test",
    SideEffect: "Drug Side Effect Test",
    Toxicity: "drug toxicity Test",
    StorageCondition: "good",
    ShelfLife: "3edai",
    IngredientLabel: "Paracetamol 500",
    IsBiological: true,
    IsNarcotis: true,
    IsOTC: true,
    IsNSSF: true,
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
      const response = await axios.post(
        "http://localhost:3030/api/drugs/v1.0",
        drugData,
        { withCredentials: true }
      );
      console.log("Server Response:", response);
      // Handle the response as needed
      console.log("Drug added successfully:", response.data);

      // Clear the form after successful submission
      setDrugData({
        Guid: uuidv4(),
        ATCGuid: uuidv4(),
        DosageGuid: uuidv4(),
        PresentationGuid: uuidv4(),
        FormGuid: uuidv4(),
        RouteGuid: uuidv4(),
        StratumGuid: uuidv4(),
        StratumTypeGuid: uuidv4(),
        AgentGuid: uuidv4(),
        BrandGuid: uuidv4(),
        ManufacturerGuid: uuidv4(),
        CountryGuid: uuidv4(),
        ResponsiblePartyGuid: uuidv4(),
        DrugLabelGuid: uuidv4(),
        Code: "",
        RegistrationNumber: "",
        REP_date: currentDate,
        IsDouanes: true,
        Date_dc: currentDate,
        LASTEffective_Date: currentDate,
        CIF_FOB: "FOB",
        LASTPublicABP: 0,
        LASTCurrencyGuid: uuidv4(),
        SubsidyLabel: "",
        SubsidyPercentage: 0,
        LJ_FOB_ValueUSD: 0,
        HospPricing: true,
        WJ_Leb_PubPriceHos: "90000",
        Seq: "Seq123",
        B_G: "Brand",
        Substitutable: false,
        WEBCIF_FOB: "92000",
        WEBPublicABP: 1000,
        WEBCurrency: "",
        NM: true,
        GTIN: "",
        Notes: "",
        Description: "",
        ActiveInactiveIngredient: "",
        Indication: "",
        Posology: "",
        MethodOfAdministration: "",
        Contraindications: "",
        PrecautionForUse: "",
        EffectOnFGN: "",
        SideEffect: "",
        Toxicity: "",
        StorageCondition: "",
        ShelfLife: "",
        IngredientLabel: "",
        IsBiological: false,
        IsNarcotis: false,
        IsOTC: false,
        IsNSSF: false,
      });

      // Display a success toast notification
      toast.success("Drug added successfully");
    } catch (error) {
      // Handle errors and display an error toast notification
      console.error("Error adding drug:", error);
      toast.error("Error adding drug");
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      {/* <div className="col-1 flex flex-col">
        <label className="block mb-2" htmlFor="guid">
          Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="guid"
          name="guid"
          value={drugData.guid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="atcGuid">
          ATC Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="atcGuid"
          name="atcGuid"
          value={drugData.atcGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="dosageGuid">
          Dosage Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="dosageGuid"
          name="dosageGuid"
          value={drugData.dosageGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="presentationGuid">
          Presentation Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="presentationGuid"
          name="presentationGuid"
          value={drugData.presentationGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="formGuid">
          Form Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="formGuid"
          name="formGuid"
          value={drugData.formGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="routeGuid">
          Route Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="routeGuid"
          name="routeGuid"
          value={drugData.routeGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="stratumGuid">
          Stratum Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="stratumGuid"
          name="stratumGuid"
          value={drugData.stratumGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="stratumTypeGuid">
          Stratum Type Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="stratumTypeGuid"
          name="stratumTypeGuid"
          value={drugData.stratumTypeGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="agentGuid">
          Agent Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="agentGuid"
          name="agentGuid"
          value={drugData.agentGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="brandGuid">
          Brand Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="brandGuid"
          name="brandGuid"
          value={drugData.brandGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="manufacturerGuid">
          Manufacturer Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="manufacturerGuid"
          name="manufacturerGuid"
          value={drugData.manufacturerGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="countryGuid">
          Country Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="countryGuid"
          name="countryGuid"
          value={drugData.countryGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="responsiblePartyGuid">
          Responsible Party Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="responsiblePartyGuid"
          name="responsiblePartyGuid"
          value={drugData.responsiblePartyGuid}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="drugLabelGuid">
          Drug Label Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="drugLabelGuid"
          name="drugLabelGuid"
          value={drugData.drugLabelGuid}
          onChange={handleChange}
          required
        />
      </div> */}
      <label className="block mb-2" htmlFor="registrationNumber">
        Registration Number
      </label>
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="text"
        id="registrationNumber"
        name="registrationNumber"
        value={drugData.registrationNumber}
        onChange={handleChange}
        required
      />

      <label className="block mb-2" htmlFor="SubsidyPercentage">
        Subsidy Percentage
      </label>
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="text"
        id="SubsidyPercentage"
        name="SubsidyPercentage"
        value={drugData.SubsidyPercentage}
        onChange={handleChange}
        required
      />

      <div className="col-2 flex flex-col">
        <label className="block mb-2" htmlFor="repDate">
          repDate
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="date"
          id="repDate"
          name="repDate"
          value={drugData.repDate}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="isDouanes">
          isDouanes:
        </label>
        <input
          className="mb-4 border cursor-pointer rounded"
          type="checkbox"
          id="isDouanes"
          name="isDouanes"
          value={drugData.isDouanes}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="dateDc">
          dateDc
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="date"
          id="dateDc"
          name="dateDc"
          value={drugData.dateDc}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="lasteffectiveDate">
          Last effective Date
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="date"
          id="lasteffectiveDate"
          name="lasteffectiveDate"
          value={drugData.lasteffectiveDate}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="cifFob">
          CIF/FOB
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="cifFob"
          name="cifFob"
          value={drugData.cifFob}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="lastpublicAbp">
          Last public Abp
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="number"
          id="lastpublicAbp"
          name="lastpublicAbp"
          value={drugData.lastpublicAbp}
          onChange={handleChange}
          required
        />

        {/* <label className="block mb-2" htmlFor="lastcurrencyGuid">
          Last Currency Guid
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="lastcurrencyGuid"
          name="lastcurrencyGuid"
          value={drugData.lastcurrencyGuid}
          onChange={handleChange}
          required
        /> */}

        <label className="block mb-2" htmlFor="ljFobValueUsd">
          lj Fob Value Usd
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="number"
          id="ljFobValueUsd"
          name="ljFobValueUsd"
          value={drugData.ljFobValueUsd}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="hospPricing">
          Hosp Pricing
        </label>
        <input
          className="mb-4 cursor-pointer border rounded"
          type="checkbox"
          id="hospPricing"
          name="hospPricing"
          value={drugData.hospPricing}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="wjLebPubPriceHos">
          wjLeb Pub Price Hos
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="wjLebPubPriceHos"
          name="wjLebPubPriceHos"
          value={drugData.wjLebPubPriceHos}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="seq">
          Seq
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="seq"
          name="seq"
          value={drugData.seq}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="bg">
          B/G
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="bg"
          name="bg"
          value={drugData.bg}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="webcifFob">
          Web cif/Fob
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="webcifFob"
          name="webcifFob"
          value={drugData.webcifFob}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="webpublicAbp">
          Web public Abp
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="number"
          id="webpublicAbp"
          name="webpublicAbp"
          value={drugData.webpublicAbp}
          onChange={handleChange}
          required
        />

        <label className="block mb-2" htmlFor="webcurrency">
          Web currency
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          id="webcurrency"
          name="webcurrency"
          value={drugData.webcurrency}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-3 flex flex-col">
        <label className="block mb-2" htmlFor="nm">
          None Marketed
        </label>
        <input
          className="cursor-pointer border rounded"
          type="checkbox"
          id="nm"
          name="nm"
          value={drugData.nm}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="gtin">
          GTIN
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="gtin"
          name="gtin"
          value={drugData.gtin}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="notes">
          Notes
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="notes"
          name="notes"
          value={drugData.notes}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="ingredientLabel">
          Ingredient Label
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="ingredientLabel"
          name="ingredientLabel"
          value={drugData.ingredientLabel}
          onChange={handleChange}
          required
        />
        <div className="checkboxes-row flex items-center justify-between my-4">
          <label className="block mb-2" htmlFor="isOtc">
            is Otc
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isOtc"
            name="isOtc"
            value={drugData.isOtc}
            onChange={handleChange}
            required
          />
          <label className="block mb-2" htmlFor="isNssf">
            is Nssf
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isNssf"
            name="isNssf"
            value={drugData.isNssf}
            onChange={handleChange}
            required
          />
          <label className="block mb-2" htmlFor="isNarcotis">
            is Narcotis
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isNarcotis"
            name="isNarcotis"
            value={drugData.isNarcotis}
            onChange={handleChange}
            required
          />
          <label className="block mb-2" htmlFor="isBiological">
            is Biological
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isBiological"
            name="isBiological"
            value={drugData.isBiological}
            onChange={handleChange}
            required
          />
        </div>
        <label className="block mb-2" htmlFor="description">
          Description
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="description"
          name="description"
          value={drugData.description}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="activeInactiveIngredient">
          Active Inactive Ingredient
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="activeInactiveIngredient"
          name="activeInactiveIngredient"
          value={drugData.activeInactiveIngredient}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="indication">
          Indication
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="indication"
          name="indication"
          value={drugData.indication}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="posology">
          Posology
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="posology"
          name="posology"
          value={drugData.posology}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="methodOfAdministration">
          Method Of Administration
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="methodOfAdministration"
          name="methodOfAdministration"
          value={drugData.methodOfAdministration}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="contraindications">
          Contraindications
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="contraindications"
          name="contraindications"
          value={drugData.contraindications}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="precautionForUse">
          Precaution For Use
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="precautionForUse"
          name="precautionForUse"
          value={drugData.precautionForUse}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="sideEffect">
          Side Effect
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="sideEffect"
          name="sideEffect"
          value={drugData.sideEffect}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="toxicity">
          Toxicity
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="toxicity"
          name="toxicity"
          value={drugData.toxicity}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="storageCondition">
          Storage Condition
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="storageCondition"
          name="storageCondition"
          value={drugData.storageCondition}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="shelfLife">
          Shelf Life
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="shelfLife"
          name="shelfLife"
          value={drugData.shelfLife}
          onChange={handleChange}
          required
        />
      </div>

      <div className="btn-col fflex">
        <button
          className="inline-block cursor-pointer rounded-md bg-teal-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-teal-400"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DrugForm;

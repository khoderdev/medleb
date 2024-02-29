import React, { useState } from "react";
import {
  useAddDrugMutation,
  useAddPharmacyDrugMutation,
} from "../../../../../app/slices/apiSlice";
import { v4 as uuidv4 } from "uuid";

const generateGUID = () => uuidv4();

const exchangeRates = {
  USD: 1,
  CAD: 0.72,
  EUR: 1.08,
  CHF: 1.11,
  DKK: 0.72,
  GBP: 1.21,
  SAR: 0.27,
  JOD: 1.41,
  LBP: 90000,
};

const currencySymbols = {
  USD: "$",
  CAD: "C$",
  EUR: "€",
  CHF: "CHF",
  DKK: "kr",
  GBP: "£",
  SAR: "SAR",
  JOD: "JD",
  LBP: "LBP",
};

const AddDrugForm = () => {
  const [formData, setFormData] = useState({
    // Guid: "3FA85F64-5717-4562-B3FC-2C963F66AFA2",
    ATCGuid: "16A38FB1-7933-4EAA-BCF7-E3015A065FB9",
    DosageGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    PresentationGuid: "AED5855A-BEAE-43AA-BF94-472AFCE9D16F",
    FormGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    RouteGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA7",
    StratumGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    StratumTypeGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    AgentGuid: "91647149-F532-488F-ACDF-C1FBC9A0945C",
    BrandGuid: "584E3660-95D8-4BEB-AD23-7C8CE2C1BDE5",
    ManufacturerGuid: "91647149-F532-488F-ACDF-C1FBC9A0945C",
    CountryGuid: "DE1C8F8D-775E-45D1-90AD-115076F14C6C",
    ResponsiblePartyGuid: "91647149-F532-488F-ACDF-C1FBC9A0945C",
    DrugLabelGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA2",
    Code: "1234",
    RegistrationNumber: "1234",
    REP_date: "2024-02-01",
    IsDouanes: true,
    Date_dc: "2024-02-01",
    LASTEffective_Date: "2024-02-01",
    CIF_FOB: "any",
    LASTPublicABP: "23",
    LASTCurrencyGuid: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    SubsidyLabel: "na",
    SubsidyPercentage: "18",
    LJ_FOB_ValueUSD: "400",
    HospPricing: true,
    WJ_Leb_PubPriceHos: "300",
    Seq: "seq1",
    B_G: "sa",
    Substitutable: true,
    WEBCIF_FOB: "na",
    WEBPublicABP: "18",
    WEBCurrency: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    NM: true,
    GTIN: "544",
    Notes: "Note for test",
    Description: "desc1",
    ActiveInactiveIngredient: "Para",
    Indication: "Ind1",
    Posology: "Pos1",
    MethodOfAdministration: "meth1",
    Contraindications: "cont",
    PrecautionForUse: "precau",
    EffectOnFGN: "effe",
    SideEffect: "sideeffe",
    Toxicity: "Tox1",
    StorageCondition: "good",
    ShelfLife: "36",
    IngredientLabel: "Ingedient Label 1",
    IsBiological: true,
    IsNarcotis: true,
    IsOTC: true,
    IsNSSF: true,
    CreatedBy: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    UpdatedBy: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    // Guid: "",
    // ATCGuid: generateGUID(),
    // // ATCGuid: null,
    // DosageGuid: generateGUID(),
    // // DosageGuid: generateGUID(),
    // PresentationGuid: generateGUID(),
    // // PresentationGuid: generateGUID(),
    // FormGuid: generateGUID(),
    // // FormGuid: generateGUID(),
    // RouteGuid: generateGUID(),
    // // RouteGuid: generateGUID(),
    // StratumGuid: generateGUID(),
    // // StratumGuid: generateGUID(),
    // StratumTypeGuid: generateGUID(),
    // // StratumTypeGuid: generateGUID(),
    // // AgentGuid: generateGUID(),
    // AgentGuid: generateGUID(),
    // BrandGuid: generateGUID(),
    // // BrandGuid: generateGUID(),
    // ManufacturerGuid: generateGUID(),
    // // ManufacturerGuid: generateGUID(),
    // CountryGuid: generateGUID(),
    // // CountryGuid: generateGUID(),
    // ResponsiblePartyGuid: generateGUID(),
    // // ResponsiblePartyGuid: generateGUID(),
    // DrugLabelGuid: generateGUID(),
    // // DrugLabelGuid: generateGUID(),
    // LASTCurrencyGuid: generateGUID(),
    // // LASTCurrencyGuid: generateGUID(),
    // ATCName: "atc1",
    // DosageName: "mg",
    // PresentationName: "34",
    // FormName: "Tablet",
    // RouteName: "oral",
    // StratumName: "Strat1",
    // StratumTypeName: "StartType1",
    // AgentName: "Mersaco",
    // BrandName: "Nexium",
    // ManufacturerName: "Bayer",
    // CountryName: "germany",
    // ResponsiblePartyName: "",
    // DrugLabelName: "",
    // Code: "",
    // RegistrationNumber: "1234",
    // CIF_FOB: "CIF",
    // B_G: "Brand",
    // Seq: "seq1",
    // NM: true,
    // REP_date: "2024-02-01",
    // SubsidyPercentage: "10",
    // LJ_FOB_ValueUSD: "1",
    // LASTPublicABP: "1",
    // LASTEffective_Date: "2024-02-01",
    // WEBCIF_FOB: "FOB",
    // WEBPublicABP: "1",
    // WEBCurrency: "dollar",
    // Date_dc: "2024-02-01",
    // GTIN: "1234567891111",
    // Notes: "Note for test",
    // Description: "desc1",
    // ActiveInactiveIngredient: "Para",
    // Indication: "Ind1",
    // Posology: "Pos1",
    // WJ_Leb_PubPriceHos: "1",
    // HospPricing: true,
    // MethodOfAdministration: "meth1",
    // Contraindications: "cont",
    // PrecautionForUse: "precau",
    // EffectOnFGN: "effe",
    // SideEffect: "sideeffe",
    // Toxicity: "Tox1",
    // StorageCondition: "good",
    // ShelfLife: "36",
    // IngredientLabel: "Ingedient Label 1",
    // IsDouanes: true,
    // IsBiological: true,
    // IsNarcotis: true,
    // IsOTC: true,
    // IsNSSF: true,
    // PriceFOREIGN: "7",
    // currencyForeign: "",
    // PriceUSD: "2",
    // PriceLBP: "180000",
    // ImagesPath: "",
    // ImageDefault: "",
    // InteractionIngredientName: "int drug 1",
    // UpdatedDate: "2024-02-01",
  });

  const [addDrug] = useAddDrugMutation(); // Use the generated hook for adding drug
  const [addPharmacyDrug] = useAddPharmacyDrugMutation(); // Use the generated hook for adding pharmacy drug
  const [atcCodes, setAtcCodes] = useState();
  const [selectedATC, setSelectedATC] = useState();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pharmacyDrugResult = await addPharmacyDrug(formData); // Call addPharmacyDrug mutation first
      const pharmacyDrugData = pharmacyDrugResult.data; // Get the data from the result of addPharmacyDrug

      // If addPharmacyDrug was successful and returned data
      if (pharmacyDrugResult.isSuccess && pharmacyDrugData) {
        // Call addDrug mutation only if addPharmacyDrug succeeded
        await addDrug(formData);
      } else {
        // Handle the case where addPharmacyDrug failed or did not return data
        console.error(
          "Failed to add pharmacy drug or no data returned:",
          pharmacyDrugResult.error
        );
      }
    } catch (error) {
      // Handle errors if necessary
    }
  };

  return (
    <>
      <form
        className="w-full h-auto my-16 flex flex-col mx-auto"
        onSubmit={handleSubmit}
      >
        <div className=" mx-auto p-3 rounded-2xl border border-blue-500">
          <h2>Add Drug</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-10 pt-6">
              {/* <label htmlFor="atc" className="labels text-md block text-left">
                ATC
              </label>
              <select value={selectedATC} onChange={handleInputChange}>
                <option value="">Select ATC Code</option>
                {atcCodes &&
                  atcCodes.map((atcCode, index) => (
                    <option key={index} value={atcCode.code}>
                      {atcCode.code}
                    </option>
                  ))}
              </select> */}

              <div className="input-container relative">
                <label
                  htmlFor="BrandName"
                  className="labels text-md block text-left"
                >
                  Drug Name
                </label>
                <input
                  name="BrandName"
                  value={formData.BrandName}
                  onChange={handleInputChange}
                  type="text"
                  autoComplete="off"
                  placeholder="name"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="inline-">
                <label
                  htmlFor="PriceFOREIGN"
                  className="labels text-md block text-left"
                >
                  Foreign Price
                </label>
                <input
                  name="PriceFOREIGN"
                  type="number"
                  value={formData.PriceFOREIGN}
                  onChange={handleInputChange}
                />

                <select
                  name="currencyForeign"
                  value={formData.currencyForeign}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select currency
                  </option>
                  {/* Iterate over currencySymbols to generate options */}
                  {Object.entries(currencySymbols).map(([currency, symbol]) => (
                    <option key={currency} value={currency}>
                      {`${symbol} ${currency}`}{" "}
                      {/* Display symbol and currency code */}
                    </option>
                  ))}
                </select>
              </div>

              {/* Converted price inputs */}

              <div className="input-container flex">
                <label className="labels text-md block text-left">
                  Foreign Price in USD
                  <input
                    name="PriceUSD"
                    value={formData.PriceUSD}
                    readOnly /* Make the input read-only */
                  />
                </label>

                <label className="labels text-md block text-left">
                  Foreign Price in LBP
                  <input name="PriceLBP" value={formData.PriceLBP} readOnly />
                </label>
              </div>
            </div>

            <div className="col-1">
              <label className="font-medium block mb-2" htmlFor="Code">
                Code
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Code"
                name="Code"
                value={formData.Code}
                onChange={handleInputChange}
                // required
              />

              <label
                className="font-medium block mb-2"
                htmlFor="RegistrationNumber"
              >
                Registration Number
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="RegistrationNumber"
                name="RegistrationNumber"
                value={formData.RegistrationNumber}
                onChange={handleInputChange}
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
                value={formData.SubsidyPercentage}
                onChange={handleInputChange}
                // required
              />

              <div className="col-2 flex flex-col">
                <label className="font-medium block" htmlFor="REP_date">
                  repDate
                </label>
                <input
                  className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                  type="date"
                  id="REP_date"
                  name="REP_date"
                  value={formData.REP_date}
                  onChange={handleInputChange}
                  // required
                />
              </div>

              <label className="font-medium block" htmlFor="B_G">
                B/G
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="B_G"
                name="B_G"
                value={formData.B_G}
                onChange={handleInputChange}
                // required
              />

              {/* <label
                className="font-medium block"
                htmlFor="ResponsiblePartyName"
              >
                Responsible Party
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="ResponsiblePartyName"
                name="ResponsiblePartyName"
                value={formData.ResponsiblePartyGuid}
                onChange={handleInputChange}
                // required
              /> */}
            </div>
            <div className="col-2">
              <label className="font-medium block" htmlFor="Date_dc">
                Date dc
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="date"
                id="Date_dc"
                name="Date_dc"
                value={formData.Date_dc}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="LASTEffective_Date">
                Last effective Date
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="date"
                id="LASTEffective_Date"
                name="LASTEffective_Date"
                value={formData.LASTEffective_Date}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="UpdatedDate">
                Updated Date
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="date"
                id="UpdatedDate"
                name="UpdatedDate"
                value={formData.UpdatedDate}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="CIF_FOB">
                CIF/FOB
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="CIF_FOB"
                name="CIF_FOB"
                value={formData.CIF_FOB}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="LASTPublicABP">
                Last public Abp
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="LASTPublicABP"
                name="LASTPublicABP"
                value={formData.LASTPublicABP}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div className="col-3">
              <label className="font-medium block" htmlFor="LJ_FOB_ValueUSD">
                lj Fob Value Usd
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="number"
                id="LJ_FOB_ValueUSD"
                name="LJ_FOB_ValueUSD"
                value={formData.LJ_FOB_ValueUSD}
                onChange={handleInputChange}
                // required
              />

              <label
                className="font-medium block mt-3"
                htmlFor="WJ_Leb_PubPriceHos"
              >
                wjLeb Pub Price Hos
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="WJ_Leb_PubPriceHos"
                name="WJ_Leb_PubPriceHos"
                value={formData.WJ_Leb_PubPriceHos}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="Seq">
                Seq
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Seq"
                name="Seq"
                value={formData.Seq}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="EffectOnFGN">
                Effect on FGN
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="EffectOnFGN"
                name="EffectOnFGN"
                value={formData.EffectOnFGN}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="SideEffect">
                Side Effect
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="SideEffect"
                name="SideEffect"
                value={formData.SideEffect}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div className="col-">
              <label className="font-medium block" htmlFor="WEBCIF_FOB">
                Web cif/Fob
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="WEBCIF_FOB"
                name="WEBCIF_FOB"
                value={formData.WEBCIF_FOB}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="WEBPublicABP">
                Web public Abp
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="number"
                id="WEBPublicABP"
                name="WEBPublicABP"
                value={formData.WEBPublicABP}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="WEBCurrency">
                Web currency
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                id="WEBCurrency"
                name="WEBCurrency"
                value={formData.WEBCurrency}
                onChange={handleInputChange}
                // required
              />

              <label className="font-medium block" htmlFor="Posology">
                Posology
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Posology"
                name="Posology"
                value={formData.Posology}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div className="col-2 flex flex-col">
              <label className="font-medium block" htmlFor="GTIN">
                GTIN
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="GTIN"
                name="GTIN"
                value={formData.GTIN}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="Notes">
                Notes
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Notes"
                name="Notes"
                value={formData.Notes}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="IngredientLabel">
                Ingredient Label
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="IngredientLabel"
                name="IngredientLabel"
                value={formData.IngredientLabel}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div className="col-5">
              <label className="font-medium block" htmlFor="Description">
                Description
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleInputChange}
                // required
              />
              <label
                className="font-medium block"
                htmlFor="ActiveInactiveIngredient"
              >
                Active Inactive Ingredient
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="ActiveInactiveIngredient"
                name="ActiveInactiveIngredient"
                value={formData.ActiveInactiveIngredient}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="Indication">
                Indication
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Indication"
                name="Indication"
                value={formData.Indication}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div className="col-">
              <label
                className="font-medium block"
                htmlFor="MethodOfAdministration"
              >
                Method Of Administration
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="MethodOfAdministration"
                name="MethodOfAdministration"
                value={formData.MethodOfAdministration}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="Contraindications">
                Contraindications
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Contraindications"
                name="Contraindications"
                value={formData.Contraindications}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="PrecautionForUse">
                Precaution For Use
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="PrecautionForUse"
                name="PrecautionForUse"
                value={formData.PrecautionForUse}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div className="col-">
              <label className="font-medium block" htmlFor="Toxicity">
                Toxicity
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="Toxicity"
                name="Toxicity"
                value={formData.Toxicity}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="StorageCondition">
                Storage Condition
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="StorageCondition"
                name="StorageCondition"
                value={formData.StorageCondition}
                onChange={handleInputChange}
                // required
              />
              <label className="font-medium block" htmlFor="ShelfLife">
                Shelf Life
              </label>
              <input
                className="w-full mb-4 px-3 py-2 border rounded bg-white-bg dark:bg-black-input"
                type="text"
                id="ShelfLife"
                name="ShelfLife"
                value={formData.ShelfLife}
                onChange={handleInputChange}
                // required
              />
            </div>
          </div>

          <div className="checkboxes w-full flex flex-wrap justify-center items-center border border-gray-500 mb-4 gap-6 p-4">
            <div>
              <label className="font-medium block" htmlFor="HospPricing">
                Hosp Pricing
              </label>
              <input
                className=" cursor-pointer border rounded"
                type="checkbox"
                id="HospPricing"
                name="HospPricing"
                value={formData.HospPricing}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div>
              <label className="font-medium block" htmlFor="IsDouanes">
                is Douanes:
              </label>
              <input
                className=" border cursor-pointer rounded"
                type="checkbox"
                id="IsDouanes"
                name="IsDouanes"
                value={formData.IsDouanes}
                onChange={handleInputChange}
                // required
              />
            </div>
            <div>
              <label className="font-medium block" htmlFor="NM">
                None Marketed
              </label>
              <input
                className="cursor-pointer border rounded"
                type="checkbox"
                id="NM"
                name="NM"
                value={formData.NM}
                onChange={handleInputChange}
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
                value={formData.IsOTC}
                onChange={handleInputChange}
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
                value={formData.IsNSSF}
                onChange={handleInputChange}
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
                value={formData.IsNarcotis}
                onChange={handleInputChange}
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
                value={formData.IsBiological}
                onChange={handleInputChange}
                // required
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <button type="submit" className="med-btn-pri-sm">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddDrugForm;

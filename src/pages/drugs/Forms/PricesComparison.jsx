/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { CountriesInputClass } from '../../../utils/styles';
import { usePricesComparisonData } from '../../../context/PricesComparisonContext';
import {
  KsaFlag,
  UaeFlag,
  OmanFlag,
  ItalyFlag,
  QatarFlag,
  SpainFlag,
  FranceFlag,
  JordanFlag,
  KuwaitFlag,
  BahrainFlag,
  BelgiumFlag,
  EnglandFlag,
  PortugalFlag,
  SwitzerlandFlag,
} from '../../../images/flags';

function CountryComparison({ countryName, countryPrice, countryFlag, currencySymbol }) {
  const { PricesComparisonData, handleInputChange } = usePricesComparisonData(); // Access form data and handleInputChange function
  const inputValue = PricesComparisonData[countryPrice];

  const handleChange = (e) => {
    handleInputChange(countryPrice, e.target.value);
  };

  return (
    <div className="col-span-1">
      <label className="labels text-md block text-left ml-2">{countryName}</label>
      <div className="relative w-full md:w-1/2">
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          className={CountriesInputClass}
          placeholder="price"
        />
        <span className="absolute inset-y-0 left-2 flex items-center justify-center ml-2">
          <img src={countryFlag} alt="Country Icon" className="w-5 h-4 pointer-events-none" />
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 font-semibold text-sm">
          {currencySymbol}
        </span>
      </div>
    </div>
  );
}

function PricesComparison({ PricesComparisonData, handleInputChange }) {
  return (
    <div className="flex w-full h-full text-black-text dark:text-white-text justify-center border-2 border-red-500">
      <div className="grid grid-cols-1 gap-6 p-4 w-full border-red-500 border">
        <CountryComparison
          countryName="Jordan"
          countryPrice="jordanPrice"
          countryFlag={JordanFlag}
          currencySymbol="JOD"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="KSA"
          countryPrice="ksaPrice"
          countryFlag={KsaFlag}
          currencySymbol="SAR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Kuwait"
          countryPrice="kuwaitPrice"
          countryFlag={KuwaitFlag}
          currencySymbol="KWD"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Oman"
          countryPrice="omanPrice"
          countryFlag={OmanFlag}
          currencySymbol="OMR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="UAE"
          countryPrice="uaePrice"
          countryFlag={UaeFlag}
          currencySymbol="AED"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Bahrain"
          countryPrice="bahrainPrice"
          countryFlag={BahrainFlag}
          currencySymbol="BHD"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Qatar"
          countryPrice="qatarPrice"
          countryFlag={QatarFlag}
          currencySymbol="QAR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 w-full border-red-500 border">
        <CountryComparison
          countryName="France"
          countryPrice="francePrice"
          countryFlag={FranceFlag}
          currencySymbol="EUR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="England"
          countryPrice="englandPrice"
          countryFlag={EnglandFlag}
          currencySymbol="GBP"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Belgium"
          countryPrice="belgiumPrice"
          countryFlag={BelgiumFlag}
          currencySymbol="EUR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Switzerland"
          countryPrice="switzerlandPrice"
          countryFlag={SwitzerlandFlag}
          currencySymbol="CHF"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Italy"
          countryPrice="italyPrice"
          countryFlag={ItalyFlag}
          currencySymbol="EUR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Spain"
          countryPrice="spainPrice"
          countryFlag={SpainFlag}
          currencySymbol="EUR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
        <CountryComparison
          countryName="Portugal"
          countryPrice="portugalPrice"
          countryFlag={PortugalFlag}
          currencySymbol="EUR"
          PricesComparisonData={PricesComparisonData}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default PricesComparison;

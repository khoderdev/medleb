/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { CountriesInputClass } from '../../../utils/styles';
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

function CountryComparison({ countryName, countryIcon, currencySymbol }) {
  return (
    <div className="col-span-1">
      <label className="labels text-md block text-left ml-2">{countryName}</label>
      <div className="relative w-full md:w-1/2">
        <input type="number" className={CountriesInputClass} placeholder="amount" />
        <span className="absolute inset-y-0 left-2 flex items-center justify-center ml-2">
          <img src={countryIcon} alt="Country Icon" className="w-5 h-4 pointer-events-none" />
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 font-semibold text-sm">
          {currencySymbol}
        </span>
      </div>
    </div>
  );
}

function PricesComparison() {
  return (
    <div className="flex w-full h-full text-black-text dark:text-white-text justify-center border-2 border-red-500">
      <div className="grid grid-cols-1 gap-6 p-4 w-full border-red-500 border">
        <CountryComparison countryName="Jordan" countryIcon={JordanFlag} currencySymbol="JOD" />
        <CountryComparison countryName="KSA" countryIcon={KsaFlag} currencySymbol="SAR" />
        <CountryComparison countryName="Kuwait" countryIcon={KuwaitFlag} currencySymbol="KWD" />
        <CountryComparison countryName="Oman" countryIcon={OmanFlag} currencySymbol="OMR" />
        <CountryComparison countryName="UAE" countryIcon={UaeFlag} currencySymbol="AED" />
        <CountryComparison countryName="Bahrain" countryIcon={BahrainFlag} currencySymbol="BHD" />
        <CountryComparison countryName="Qatar" countryIcon={QatarFlag} currencySymbol="QAR" />
      </div>
      <div className="grid grid-cols-1 gap-6 p-4 w-full border-red-500 border">
        <CountryComparison countryName="France" countryIcon={FranceFlag} currencySymbol="EUR" />
        <CountryComparison countryName="England" countryIcon={EnglandFlag} currencySymbol="GBP" />
        <CountryComparison countryName="Belgium" countryIcon={BelgiumFlag} currencySymbol="EUR" />
        <CountryComparison
          countryName="Switzerland"
          countryIcon={SwitzerlandFlag}
          currencySymbol="CHF"
        />
        <CountryComparison countryName="Italy" countryIcon={ItalyFlag} currencySymbol="EUR" />
        <CountryComparison countryName="Spain" countryIcon={SpainFlag} currencySymbol="EUR" />
        <CountryComparison countryName="Portugal" countryIcon={PortugalFlag} currencySymbol="EUR" />
      </div>
    </div>
  );
}

export default PricesComparison;

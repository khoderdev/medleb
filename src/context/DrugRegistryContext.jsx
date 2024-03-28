/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext, createContext } from 'react';

// Create a context
const DrugRegistryContext = createContext();

// Custom hook to use the context
export const useDrugRegistry = () => useContext(DrugRegistryContext);

const exchangeRates = {
  USD: 1,
  CAD: 0.72,
  EUR: 1.06,
  CHF: 1.11,
  DKK: 0.72,
  GBP: 1.21,
  SAR: 0.27,
  JOD: 1.41,
  LBP: 900,
};

const currencySymbols = {
  USD: '$',
  CAD: 'C$',
  EUR: '€',
  CHF: 'CHF',
  DKK: 'kr',
  GBP: '£',
  SAR: 'SAR',
  JOD: 'JD',
  LBP: 'LBP',
};

// Provider component to wrap your application
export const DrugRegistryProvider = ({ children }) => {
  const [selectedInput, setSelectedInput] = useState('');
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editInputValue, setEditInputValue] = useState('');
  const [formDataStep1, setFormDataStep1] = useState({
    BrandName: '',
    PriceFOREIGN: 0,
    currencyForeign: 'USD',
    RegistrationNumber: '',
    Code: '',
    REP_date: '',
    LASTEffective_Date: '',
  });

  function convertToUSD() {
    if (formDataStep1 && formDataStep1.PriceFOREIGN && formDataStep1.currencyForeign) {
      const convertedPrice =
        formDataStep1.PriceFOREIGN / exchangeRates[formDataStep1.currencyForeign];
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return '';
  }

  function convertToLBP() {
    if (formDataStep1 && formDataStep1.PriceFOREIGN && formDataStep1.currencyForeign) {
      const priceInUSD = convertToUSD();
      const convertedPrice = (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
      return convertedPrice.toFixed(2);
    }
    return '';
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const openAddModal = (inputName) => {
    setSelectedInput(inputName);
    setAddModalOpen(true);
  };

  const openEditModal = (inputName, initialValue) => {
    setSelectedInput(inputName);
    setEditInputValue(initialValue);
    setEditModalOpen(true);
  };

  const handleAdd = (value) => {
    console.log(`Added new ${selectedInput}:`, value);
    setAddModalOpen(false);
  };

  const handleEdit = (value) => {
    console.log(`Edited ${selectedInput}:`, value);
    setEditModalOpen(false);
  };

  const handleCancel = () => {
    console.log('Modal cancelled');
    setAddModalOpen(false);
    setEditModalOpen(false);
  };

  const contextValue = {
    selectedInput,
    isAddModalOpen,
    isEditModalOpen,
    setEditModalOpen,
    setAddModalOpen,
    editInputValue,
    formDataStep1,
    handleInputChange,
    openAddModal,
    openEditModal,
    handleAdd,
    handleEdit,
    handleCancel,
    exchangeRates,
    currencySymbols,
    convertToUSD,
    convertToLBP,
  };

  return (
    <DrugRegistryContext.Provider value={contextValue}>{children}</DrugRegistryContext.Provider>
  );
};

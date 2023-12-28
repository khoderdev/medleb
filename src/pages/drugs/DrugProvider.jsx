// DrugProvider.jsx

import React, { createContext, useContext, useReducer } from "react";

const DrugContext = createContext();

const initialState = {
  drugs: [], // Your initial state for drugs
  // Other relevant state properties
};

const drugReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DRUG":
      return {
        ...state,
        drugs: [...state.drugs, action.payload],
      };
    // Other cases as needed
    default:
      return state;
  }
};

const DrugProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drugReducer, initialState);

  const addDrug = (drug) => {
    dispatch({ type: "ADD_DRUG", payload: drug });
  };

  // Other context provider values and functions

  return (
    <DrugContext.Provider value={{ state, addDrug }}>
      {children}
    </DrugContext.Provider>
  );
};

const useDrugContext = () => {
  const context = useContext(DrugContext);
  if (!context) {
    throw new Error("useDrugContext must be used within a DrugProvider");
  }
  return context;
};

export { DrugProvider, useDrugContext };

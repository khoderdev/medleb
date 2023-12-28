// import { createContext, useState , useContext} from 'react';

// const DrugContext = createContext();
// const useDrugContext = () => {
//   const context = useContext(DrugContext);
//   if (!context) {
//     throw new Error('useDrugContext must be used within a DrugContextProvider');
//   }
//   return context;
// };
// const DrugProvider = ({ children }) => {
//   const [drugs, setDrugs] = useState([]);

//   const value = {
//     drugs,
//     setDrugs,
//   };

//   return <DrugContext.Provider value={value}>{children}</DrugContext.Provider>;
// };

// export { DrugContext, DrugProvider, useDrugContext  };



// DrugContext.js
import { createContext, useContext, useState } from 'react';

const DrugContext = createContext();

const useDrugContext = () => {
  const context = useContext(DrugContext);
  if (!context) {
    throw new Error('useDrugContext must be used within a DrugContextProvider');
  }
  return context;
};

const DrugProvider = ({ children }) => {
  const [drugs, setDrugs] = useState([]);
  const [imageState, setImageState] = useState(Array(6).fill([]));

  const updateImageState = (index, newImageState) => {
    setImageState((prevImageState) => {
      const newImageList = [...prevImageState];
      newImageList[index] = newImageState;
      return newImageList;
    });
  };

  const value = {
    drugs,
    setDrugs,
    imageState,
    updateImageState,
  };

  return <DrugContext.Provider value={value}>{children}</DrugContext.Provider>;
};

export { DrugContext, DrugProvider, useDrugContext };

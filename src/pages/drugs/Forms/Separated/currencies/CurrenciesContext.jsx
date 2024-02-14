import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";
import Axios from "../../../../../api/axios";

const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const fetchCurrencies = async () => {
    try {
      setLoading(true);
      const response = await Axios.get("/api/currency/v1.0/currencies");
      setCurrencies(response.data);
    } catch (error) {
      setMsg("Failed to fetch currencies.");
    } finally {
      setLoading(false);
    }
  };

  const addCurrency = async (currencyData, callback) => {
    try {
      setLoading(true);

      if (!currencyData.code || !currencyData.name) {
        throw new Error("Code and Name are required.");
      }

      const response = await Axios.post("/api/currency/v1.0", currencyData);

      if (
        response.data &&
        response.data.message &&
        response.data.message.trim().toLowerCase() ===
          "currency added successfully"
      ) {
        const newCurrency = {
          ...currencyData,
          guid: uuidv4(),
        };

        setCurrencies((prevCurrencies) => [...prevCurrencies, newCurrency]);
        alert("Currency created successfully!");

        if (callback && typeof callback === "function") {
          callback(); // Execute the callback function
        }

        // Fetch currencies after adding a new currency
        fetchCurrencies(); // <--- Make sure to call fetchCurrencies here
      } else {
        throw new Error("Failed to add currency.");
      }
    } catch (error) {
      console.error("Error adding currency:", error);
    } finally {
      setLoading(false);
    }
  };

  // const addCurrency = async (currencyData, callback) => {
  //   try {
  //     setLoading(true);

  //     if (!currencyData.code || !currencyData.name) {
  //       throw new Error("Code and Name are required.");
  //     }

  //     const response = await Axios.post("/api/currency/v1.0", currencyData);

  //     if (
  //       response.data &&
  //       response.data.message &&
  //       response.data.message.trim().toLowerCase() ===
  //         "currency added successfully"
  //     ) {
  //       const newCurrency = {
  //         ...currencyData,
  //         guid: uuidv4(), // Assuming the server returns the updated currency with a unique identifier
  //       };

  //       console.log("New Currency:", newCurrency); // Log the new currency data

  //       setCurrencies((prevCurrencies) => [...prevCurrencies, newCurrency]); // Update local state with the new currency
  //       alert("Currency created successfully!");

  //       if (callback && typeof callback === "function") {
  //         callback(); // Execute the callback function
  //       }
  //     } else {
  //       throw new Error("Failed to add currency.");
  //     }
  //   } catch (error) {
  //     console.error("Error adding currency:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const editCurrency = async (guid, updatedData) => {
    try {
      setLoading(true);
      setMsg(null);

      // Include the guid in the updatedData object
      updatedData.guid = guid;

      const response = await Axios.put(`/api/currency/v1.0/`, updatedData);

      if (
        response.data &&
        response.data.message &&
        response.data.message.trim().toLowerCase() ===
          "currency updated successfully"
      ) {
        fetchCurrencies();
        alert("Currency updated successfully!");
      } else {
        throw new Error("Failed to update currency.");
      }
    } catch (error) {
      // console.error("Error editing currency:", error);
      setMsg(error.message || "Failed to update currency.");
    } finally {
      setLoading(false);
    }
  };
  // const editCurrency = async (guid, updatedData) => {
  //   try {
  //     setLoading(true);
  //     setMsg(null);

  //     // Include the guid in the updatedData object
  //     updatedData.guid = guid;

  //     const response = await Axios.put(`/api/currency/v1.0/`, updatedData);

  //     if (
  //       response.data &&
  //       response.data.message &&
  //       response.data.message.trim().toLowerCase() ===
  //         "currency updated successfully"
  //     ) {
  //       fetchCurrencies();
  //       alert("Currency updated successfully!");
  //     } else {
  //       throw new Error("Failed to update currency.");
  //     }
  //   } catch (error) {
  //     // console.error("Error editing currency:", error);
  //     setMsg(error.message || "Failed to update currency.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const contextValue = useMemo(
    () => ({
      currencies,
      setCurrencies,
      editCurrency,
      loading,
      msg,
      addCurrency,
    }),
    [currencies, editCurrency, loading, msg]
  );

  useEffect(() => {
    fetchCurrencies(); // Fetch currencies on component mount
  }, []);

  // // Event listener to fetch currencies when user clicks anywhere on the screen
  // useEffect(() => {
  //   const handleClick = () => {
  //     fetchCurrencies();
  //   };

  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <CurrenciesContext.Provider value={contextValue}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export const useCurrenciesContext = () => {
  return useContext(CurrenciesContext);
};

import React, { useState, useEffect } from "react";
import { useCurrenciesContext } from "./CurrenciesContext";
import CurrencyForm from "./CurrencyForm"; // Import CurrencyForm component

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black-bg bg-opacity-50">
      <div className="relative p-8 bg-white-bg rounded-lg max-w-md">
        <div
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};

const CurrencyTable = () => {
  const { currencies, setCurrencies, editCurrency, addCurrency, loading } =
    useCurrenciesContext();
  const [editingRow, setEditingRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCurrency, setNewCurrency] = useState({
    code: "",
    name: "",
    nameAr: "",
    enabled: true,
    createdDate: new Date().toISOString(),
  });

  useEffect(() => {
    if (!loading) {
      setEditingRow(null); // Reset editing row after loading is finished
    }
  }, [loading]);

  const handleEdit = (currency) => {
    setEditingRow(currency.guid);
    // setLoading(false); // Remove loading state
  };

  const handleSave = async (guid, updatedData) => {
    try {
      const updatedCurrencies = currencies.map((currency) => {
        if (currency.guid === guid) {
          return {
            ...currency,
            ...updatedData,
          };
        }
        return currency;
      });

      await editCurrency(guid, updatedData);
      setCurrencies(updatedCurrencies);
      setEditingRow(null);
    //   fetchCurrencies(); // <--- Add this line to reload the currency table
    } catch (error) {
      console.error("Failed to edit currency:", error);
    }
  };

  //   const handleSave = async (guid, updatedData) => {
  //     try {
  //       const updatedCurrencies = currencies.map((currency) => {
  //         if (currency.guid === guid) {
  //           return {
  //             ...currency,
  //             ...updatedData,
  //           };
  //         }
  //         return currency;
  //       });

  //       await editCurrency(guid, updatedData);
  //       setCurrencies(updatedCurrencies);
  //       setEditingRow(null);
  //     } catch (error) {
  //       console.error("Failed to edit currency:", error);
  //     }
  //   };

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setNewCurrency({ ...newCurrency, [fieldName]: value });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full overflow-x-auto">
      <button onClick={toggleModal}>Create New Currency</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <CurrencyForm onClose={toggleModal} />
      </Modal>
      <table className="w-full">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Name Arabic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.guid}>
              {editingRow === currency.guid ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="code"
                      value={newCurrency.code}
                      onChange={(e) => handleChange(e, "code")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={newCurrency.name}
                      onChange={(e) => handleChange(e, "name")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="nameAr"
                      value={newCurrency.nameAr}
                      onChange={(e) => handleChange(e, "nameAr")}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleSave(currency.guid, newCurrency)}
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{currency.code}</td>
                  <td>{currency.name}</td>
                  <td>{currency.nameAr}</td>
                  <td>
                    <button onClick={() => handleEdit(currency)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;

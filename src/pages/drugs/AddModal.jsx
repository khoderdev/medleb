import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ModalStyles.css";

const AddModal = ({ closeModal, title, onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleAddButtonClick = () => {
    onAdd(inputValue);
    closeModal();
  };

  const handleCancelButtonClick = () => {
    onCancel();
    closeModal();
  };

  return (
    <div className="overlay fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto z-50 dark:text-white ">
      <div className="relative bg-white dark:bg-[#1e1e1e] border border-[#259f8359] w-72 sm:w-96 rounded-xl p-4 shadow-lg dark:shadow-[#259f8338]">
        <label htmlFor="modalInput" className="mb-2 block text-lg">
          {title}
        </label>
        <input
          type="text"
          id="modalInput"
          onClick={handleInputClick}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full rounded-full border border-[#259f8359] bg-white/10 px-4 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-black"
        />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleAddButtonClick}
            className="bg-[#259F83] text-white px-4 py-2 rounded-lg mr-2 hover:bg-[#45bda1] focus:outline-none focus:shadow-outline-blue"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleCancelButtonClick}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

AddModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddModal;

// MainComponent.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import CountryForm from "./CountryForm";

const MainComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <CountryForm />
      <button onClick={handleModalOpen}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
        <h2>Add Governorate</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="governorateCode">Governorate Code:</label>
            <input type="text" id="governorateCode" />
          </div>
          <div>
            <label htmlFor="governorateName">Governorate Name (English):</label>
            <input type="text" id="governorateName" />
          </div>
          <div>
            <label htmlFor="governorateNameAr">
              Governorate Name (Arabic):
            </label>
            <input type="text" id="governorateNameAr" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default MainComponent;

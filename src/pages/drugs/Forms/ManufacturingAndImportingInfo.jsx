import React, { useState } from "react";
import AddModal from "../AddModal";

function ManufacturingAndImportingInfo(props) {
  const { formDataStep5, handleInputChange } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAdd = (value) => {
    console.log("Adding value:", value);
    // Perform any other actions with the entered value
  };

  const handleCancel = () => {
    console.log("Modal cancelled");
    // Perform any actions when the modal is cancelled
  };

  return (
    <>
      <div className="col-span-1 flex w-full sm:w-[80em] flex-col sm:col-span-1 text-gray-700 dark:text-white-text">
        <h1 className="pb-2 pt-4 text-center text-xl sm:py-10 sm:text-2xl ">
          6 - Manufacturing & Importing Informations
        </h1>
        {/* <div className=" flex h-full w-full flex-col"> */}
        <form className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:justify-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="input-container relative">
            <label
              htmlFor="responsibleParty"
              className="labels text-md block text-left"
            >
              Responsible party
            </label>
            <input
              disabled
              value={formDataStep5.responsibleParty}
              onChange={(e) =>
                handleInputChange("responsibleParty", e.target.value)
              }
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="Leo Pharma"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="responsiblePartyID"
              className="labels text-md block text-left"
            >
              ID
            </label>
            <input
              disabled
              value={formDataStep5.responsiblePartyID}
              onChange={(e) =>
                handleInputChange("responsiblePartyID", e.target.value)
              }
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="auto"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="responsiblePartyCountry"
              className="labels text-md block text-left"
            >
              Responsible party country
            </label>
            <input
              disabled
              value={formDataStep5.responsiblePartyCountry}
              onChange={(e) =>
                handleInputChange("responsiblePartyCountry", e.target.value)
              }
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="sweden"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="manufacturer"
              className="labels text-md block text-left"
            >
              Manufacturer
            </label>
            <input
              disabled
              value={formDataStep5.manufacturer}
              onChange={(e) =>
                handleInputChange("manufacturer", e.target.value)
              }
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="Astellas Pharma Europe BV"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="manufacturerID"
              className="labels text-md block text-left"
            >
              ID
            </label>
            <input
              disabled
              value={formDataStep5.manufacturerID}
              onChange={(e) =>
                handleInputChange("manufacturerID", e.target.value)
              }
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="auto"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="manufacturerCountry"
              className="labels text-md block text-left"
            >
              Country of manufacturing
            </label>
            <input
              disabled
              value={formDataStep5.manufacturerCountry}
              onChange={(e) =>
                handleInputChange("manufacturerCountry", e.target.value)
              }
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="europe"
            />
          </div>

          <div className="input-container relative">
            <label htmlFor="agent" className="labels text-md block text-left">
              Country of manufacturing
            </label>
            <input
              disabled
              value={formDataStep5.agent}
              onChange={(e) => handleInputChange("agent", e.target.value)}
              className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder="UPO SAL"
            />
          </div>

          <div className="input-container flex flex-col">
            <label htmlFor="notes" className="labels text-md block text-left">
              Notes
            </label>
            <textarea
              value={formDataStep5.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              className="mt-1 w-full rounded-full border border-[#259f8359] dark:border-[#3a3c3d] bg-white-bg px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] dark:bg-[#3a3c3d]"
              type="text"
              placeholder=""
            />
          </div>
          <div className="checkboxes-container grid grid-col-span-1">
            <div className="row-1 flex justify-between">
              <div className="checkbox flex items-center justify-center">
                <label htmlFor="chronicCheckbox" className="text-md">
                  Chronic
                </label>
                <input
                  type="checkbox"
                  id="chronicCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.chronicCheckbox}
                  onChange={(e) =>
                    handleInputChange("chronicCheckbox", e.target.checked)
                  }
                />
              </div>
              <div className="checkbox flex items-center justify-center">
                <label htmlFor="acuteCheckbox" className="text-md">
                  Acute
                </label>
                <input
                  type="checkbox"
                  id="acuteCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.acuteCheckbox}
                  onChange={(e) =>
                    handleInputChange("acuteCheckbox", e.target.checked)
                  }
                />
              </div>
              <div className="checkbox flex items-center justify-center">
                <label htmlFor="essentialCheckbox" className="text-md">
                  Essential
                </label>
                <input
                  type="checkbox"
                  id="essentialCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.essentialCheckbox}
                  onChange={(e) =>
                    handleInputChange("essentialCheckbox", e.target.checked)
                  }
                />
              </div>
            </div>

            <div className="row-1 flex justify-between">
              <div className="checkbox flex items-center justify-center">
                <label htmlFor="mentalHealthCheckbox" className="text-md">
                  Mental Health/Insulin/NR/Iran
                </label>
                <input
                  type="checkbox"
                  id="mentalHealthCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.mentalHealthCheckbox}
                  onChange={(e) =>
                    handleInputChange("mentalHealthCheckbox", e.target.checked)
                  }
                />
              </div>
              <div className="checkbox flex items-center justify-center">
                <label htmlFor="parentaralCheckbox" className="text-md">
                  Score
                </label>
                <input
                  type="checkbox"
                  id="parentaralCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.scoreCheckbox}
                  onChange={(e) =>
                    handleInputChange("scoreCheckbox", e.target.checked)
                  }
                />
              </div>
              <button
                className="w-fit rounded-xl bg-transparent p-2 text-[#259F83] focus:border-[#259F83] focus:outline-none focus:ring-1"
                onClick={openModal}
              >
                Add
              </button>
            </div>
          </div>
        </form>
        {isModalOpen && (
          <AddModal
            closeModal={closeModal}
            title="Add New Item"
            onAdd={handleAdd}
            onCancel={handleCancel}
          />
        )}
      </div>
    </>
  );
}

export default ManufacturingAndImportingInfo;

import React, { useState } from "react";

import AddModal from "../../../components/Modals/AddModal";

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
  const handleDateChange = (e) => {
    handleInputChange("acuteCheckbox", e.target.value);
  };

  return (
    <div className="col-span-1 flex flex-col w-full sm:w-[80em] h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
      <h1 className="pb-4 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
          7 - Manufacturing & Importing Informations
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
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder="bayer Hispania"
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
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder=""
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
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder=""
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
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder=""
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
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
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
              value={formDataStep5.manufacturingCountry}
              // onChange={(e) =>
              //   handleInputChange("manufacturingCountry", e.target.value)
              // }
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder=""
            />
          </div>

          <div className="input-container relative">
            <label htmlFor="agent" className="labels text-md block text-left">
              Agent
            </label>
            <input
              disabled
              value={formDataStep5.agent}
              onChange={(e) => handleInputChange("agent", e.target.value)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label htmlFor="notes" className="labels text-md block text-left">
              Notes
            </label>
            <textarea
              value={formDataStep5.notes}
              // onChange={(e) => handleInputChange("notes", e.target.value)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
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
                  name="chronicCheckbox"
                  type="checkbox"
                  id="chronicCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.chronicCheckbox}
                  // onChange={(e) => handleInputChange(e)}
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
                  name="acuteCheckbox"
                  type="checkbox"
                  id="acuteCheckbox"
                  className="ml-2 cursor-pointer rounded"
                  checked={formDataStep5.acuteCheckbox}
                  // onChange={(e) => handleInputChange(e)}
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
                className="w-fit rounded-xl bg-transparent p-2 text-[#00a651] focus:border-[#00a651] focus:outline-none focus:ring-1"
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
  );
}

export default ManufacturingAndImportingInfo;

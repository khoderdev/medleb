// Modal.js
import React from "react";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  drugName,
  ingredients,
  agent,
  onDrugNameChange,
  onIngredientsChange,
  onAgentChange,
  mode,
}) => {
  const modalTitle =
    mode === "create" ? "Create New Entry" : `Edit "${drugName}"`;

  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "" : "hidden"
      } flex items-center justify-center`}
    >
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>

      <div className="modal-container bg-white w-1/3 mx-auto p-4 rounded shadow">
        <div className="modal-content w-1/2 py-4 text-left px-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">{modalTitle}</h2>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Drug Name
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              id="drugName"
              type="text"
              placeholder=""
              value={drugName}
              onChange={onDrugNameChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Ingredients"
            >
              Ingredients
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              id="ingredients"
              type="text"
              placeholder=""
              value={ingredients}
              onChange={onIngredientsChange}
              //   disabled={mode === 'edit'} // Disable input in edit mode
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Agent"
            >
              Agent
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              id="agent"
              type="text"
              placeholder=""
              value={agent}
              onChange={onAgentChange}
              //   disabled={mode === 'edit'} // Disable input in edit mode
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 ml-2"
              onClick={onSubmit}
            >
              {mode === "create" ? "Create" : "Save"}
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

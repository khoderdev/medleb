/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onRequestClose, onConfirm, message, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Confirmation Modal"
    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 shadow-md"
    overlayClassName="fixed inset-0 bg-black bg-opacity-60"
  >
    <div className="modal-contents-cont">
      <p className="msg-text mb-6 text-xl">{message}</p>
      {children}
      <div className="btns-cont flex justify-center space-x-4">
        <button
          className="mr-2 rounded-md border border-red-500 px-4 py-2 text-red-500"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="rounded-md  border border-yellow-500 px-4 py-2 text-yellow-500"
          onClick={onRequestClose}
        >
          No
        </button>
      </div>
      <span
        className="absolute right-2 top-0 cursor-pointer text-2xl text-[#259F83]"
        onClick={onRequestClose}
      >
        &times;
      </span>
    </div>
  </ReactModal>
);

export default Modal;

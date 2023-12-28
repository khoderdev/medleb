import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onRequestClose, onConfirm, title, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Confirmation Modal"
    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white-bg dark:bg-black-contents dark:text-white-text p-3 shadow-md w-72 sm:w-auto sm:h-auto"
    overlayClassName="fixed inset-0 bg-black-bg bg-opacity-60 z-50"
  >
    <div className="modal-header">
      <h2 className="text-center text-2xl pt-6 sm:pt-2 mb-3">{title}</h2>
      <span
        className="absolute right-2 top-0 cursor-pointer text-5xl text-green-sec"
        onClick={onRequestClose}
      >
        &times;
      </span>
    </div>
    <div className="modal-contents-cont flex flex-col items-center justify-around w-full h-full overflow-hidden">
      <div className="msg-cont w-full border-gray-200 rounded-md px-2 border overflow-auto max-h-[30em]">
        {children}
      </div>
    </div>
    <div className="btns-cont flex justify-center pt-4">
      <button
        className="rounded-md bg-green-pri text-white-text hover:bg-white-bg hover:text-green-pri hover:border-2 hover:border-green-pri border-2 px-4 py-2 "
        onClick={() => {
          onConfirm();
        }}
      >
        Mark as read
      </button>
    </div>
  </ReactModal>
);

export default Modal;

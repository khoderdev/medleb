import React from 'react';

const BackButton = () => {
  const handleGoBack = () => {
    window.history.back(); // Go back using browser's history
  };

  return (
    <button
      type="button"
      className="text-white bg-green-pri hover:bg-[#00a650ef] focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-pri dark:hover:bg-[#00a650ef]"
      onClick={handleGoBack}
    >
      <svg
        className="w-4 h-4 text-white-text"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1M1 5l3-4M1 5l3 4"
        />
      </svg>
    </button>
  );
};

export default BackButton;

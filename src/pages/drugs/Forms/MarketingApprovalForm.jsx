import React, { useRef } from "react";
import { BsCalendar } from "react-icons/bs";

const MarketingApprovalForm = (props) => {
  const { handleInputChange, formDataStep3 } = props;
  const registrationDateInputRef = useRef(null);
  const reviewDateInputRef = useRef(null);

  return (
    <div className="w-full text-gray-700 dark:text-white-text">
      <h1 className="pb-2 pt-4 text-center text-xl sm:py-10 sm:text-2xl ">
        Step 3
      </h1>
      <form>
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {/* Text Input 1 */}
        </div>
      </form>
    </div>
  );
};

export default MarketingApprovalForm;

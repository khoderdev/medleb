import React from "react";

function Step2() {
  return (
    <div className="dark:text-white-text rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-4 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="px-4 mb-4">
          <p className="border-b border-[#00a651] text-white pb-4">Column 1</p>
        </div>

        {/* Column 2 */}
        <div className="px-4 mb-4">
          <p className="border-b border-[#00a651] text-white pb-4">Column 2</p>
        </div>

        {/* Column 3 */}
        <div className="px-4 mb-4">
          <p className="border-b border-[#00a651] text-white pb-4">Column 3</p>
        </div>

        {/* Column 4 */}
        <div className="px-4 mb-4">
          <p className="border-b border-[#00a651] text-white pb-4">Column 4</p>
        </div>
      </div>
    </div>
  );
}

export default Step2;

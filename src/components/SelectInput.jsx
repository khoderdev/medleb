// import React from "react";
// import { Select, initTE } from "tw-elements";

// function SelectInput() {
// initTE({ Select });



//   return (
//     <div>
//       <select
//         data-te-select-init
//         data-te-select-clear-button="true"
//         className="rounded-full"
//       >
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//         <option value="4">Four</option>
//         <option value="5">Five</option>
//       </select>
//     </div>
//   );
// }

// export default SelectInput;



import React from "react";
import { Select, initTE } from "tw-elements";
import'./styles.css';
function SelectInput() {
  initTE({ Select });

  return (
    <div>
      <select
        data-te-select-init
data-te-select-border
        data-te-select-clear-button="true"
        class="tw-select dark:bg-red-500"
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>
    </div>
  );
}

export default SelectInput;



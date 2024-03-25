// import React, { useState } from 'react';
// import { Alert, Button } from '@material-tailwind/react';

// import { resetForm, handleInputChange } from './utils/formUtils';

// const DynamicForm = () => {
//   const initialFormData = {
//     input1: '',
//     input2: '',
//     checked: false,
//   };
//   const [formData, setFormData] = useState(initialFormData);
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowAlert(true);
//     resetForm(initialFormData, setFormData);
//   };

//   const handleCheckboxChange = () => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       checked: !prevFormData.checked,
//     }));
//   };

//   return (
//     <div className="flex w-full">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col space-y-4 mt-4 w-full justify-center items-center"
//       >
//         <input
//           type="text"
//           name="input1"
//           value={formData.input1}
//           onChange={(event) => handleInputChange(event, formData, setFormData)}
//         />
//         <input
//           type="text"
//           name="input2"
//           value={formData.input2}
//           onChange={(event) => handleInputChange(event, formData, setFormData)}
//         />
//         <label>
//           <input
//             type="checkbox"
//             checked={formData.checked}
//             onChange={handleCheckboxChange}
//           />
//           khoder
//         </label>
//         <Button className="med-btn-3rd" type="submit">
//           Submit
//         </Button>

//         {showAlert && (
//           <Alert
//             className="w-64 border-2 border-white-text"
//             color="blue"
//             onClose={() => setShowAlert(false)}
//           >
//             <ul>
//               <li>Input 1: {formData.input1}</li>
//               <li>Input 2: {formData.input2}</li>
//               <li>Checked?: {formData.checked ? 'Yes' : 'No'}</li>
//             </ul>
//           </Alert>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DynamicForm;
import React from 'react';

import DynamicStepper from './components/Stepper';

function Test2() {
  // Sample form components for each step
  const stepForms = [
    <form>
      Step 1 Form Sample: <input type="text" />
    </form>,
    <form>
      Step 2 Form Sample: <input type="text" />
    </form>,
    <form>
      Step 3 Form Sample: <input type="text" />
    </form>,
  ];

  return (
    <div>
      <DynamicStepper steps={['Step 1', 'Step 2', 'Step 3']} forms={stepForms} />
    </div>
  );
}

export default Test2;

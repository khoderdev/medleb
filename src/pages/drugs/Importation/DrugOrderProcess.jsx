// import React, { useState } from 'react';
// import Tracking from '../Tracking/Tracking';

// const DrugOrderProcess = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     'Fill Request for Importation (RFI)',
//     'IED Permit Decision',
//     'Submit Proforma Invoice (PI)',
//     'IED Approval on PI',
//     'Attach Swift and Review',
//   ];

//   const handleNextStep = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Drug Order Process</h1>
//       <Tracking steps={steps} currentStep={currentStep} />
//       {/* Your form components for each step go here */}
//       <button onClick={handleNextStep}>Next Step</button>
//     </div>
//   );
// };

// export default DrugOrderProcess;

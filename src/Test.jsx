/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';

// import Stepper from './components/Stepper';
// import PricesComparisonForm from './pages/drugs/Forms/PricesComparison';

// function Step1({ onNext }) {
//   const [PricesComparisonData, setPricesComparisonData] = useState({
//     countryName: '',
//     countryPrice: '',
//     countryFlag: '',
//     currencySymbol: '',
//   });

//   const handleInputChange = (e, field) => {
//     setFormDataPriceCompare({
//       ...formDataPriceCompare,
//       [field]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <PricesComparisonForm
//         formDataPriceCompare={formDataPriceCompare}
//         handleInputChange={handleInputChange}
//       />
//     </div>
//   );
// }

// function Step2({ formDataPriceCompare }) {
//   return (
//     <div>
//       <p>Country Name: {formDataPriceCompare.countryName}</p>
//       <p>Country Price: {formDataPriceCompare.countryPrice}</p>
//       <p>Country Flag: {formDataPriceCompare.countryFlag}</p>
//       <p>Currency Symbol: {formDataPriceCompare.currencySymbol}</p>
//     </div>
//   );
// }

// function TwoStepForm() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formDataPriceCompareStep1, setFormDataPriceCompare] = useState({});

//   const handleNext = (formDataPriceCompare) => {
//     setFormDataPriceCompare(formDataPriceCompare);
//     setActiveStep(activeStep + 1);
//   };

//   const handlePrevious = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const steps = ['1', '2'];
//   const forms = [
//     <Step1 onNext={handleNext} />,
//     <Step2 formDataPriceCompare={formDataPriceCompareStep1} />,
//   ];

//   return (
//     <div className="flex flex-col">
//       <Stepper
//         steps={steps}
//         forms={forms}
//         activeStep={activeStep}
//         onNext={handleNext}
//         onPrevious={handlePrevious}
//       />
//     </div>
//   );
// }

// export default TwoStepForm;
import React, { useState } from 'react';

import { DynamicStepper } from './components/Stepper';
import PricesComparisonForm from './pages/drugs/Forms/PricesComparison';
import {
  usePricesComparisonData,
} from './context/PricesComparisonContext';

function ParentComponent() {
  const [submittedData, setSubmittedData] = useState(null);
  const { PricesComparisonData } = usePricesComparisonData(); // Accessing data from context

  const handleSubmit = () => {
    // Collect submitted data here
    setSubmittedData(PricesComparisonData);
    console.log('Submitted Data:', PricesComparisonData);
  };

  const steps = ['1', '2']; // Example steps
  const forms = [<PricesComparisonForm />, <PricesComparisonForm />]; // Example forms

  return (
    // <PricesComparisonProvider>
    <DynamicStepper steps={steps} forms={forms} onSubmit={handleSubmit} />
    // </PricesComparisonProvider>
  );
}

// Define your Form1 and Form2 components here

export default ParentComponent;

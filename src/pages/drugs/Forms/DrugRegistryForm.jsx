/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './styles.css';
import DatePicker from '../../../components/DatePicker';
import AddModal from '../../../components/Modals/AddModal';
import EditModal from '../../../components/Modals/EditModal';
// ----------------------------------------------------------------
import { useDrugRegistry } from '../../../context/DrugRegistryContext';

const DrugRegistryForm = () => {
  const {
    selectedInput,
    isAddModalOpen,
    isEditModalOpen,
    setEditModalOpen,
    setAddModalOpen,
    editInputValue,
    formDataStep1,
    handleInputChange,
    openAddModal,
    openEditModal,
    handleAdd,
    handleEdit,
    handleCancel,
    exchangeRates,
    currencySymbols,
    convertToUSD,
    convertToLBP,
  } = useDrugRegistry();

  const datePickerOptions = {
    dateFormat: 'Y-m-d',
    minDate: 'today',
    maxDate: new Date().fp_incr(30), // 30 days from today
  };

  const getTitle = (inputName) => `Add new ${addSpacesToInputName(inputName)}`;

  const inputOptions = {
    type: ['Brand', 'Generic', 'Biological: Bio - Human', 'Biological: Bio - Similar'],
    responsibleParty: ['Leo Pharma A/S', 'Bayer Hispania', 'Abbvie Ltd', 'Ferring GmbH'],
    // Add more inputs and their options as needed
    responsiblePartyCountry: [
      'France',
      'Spain',
      'USA',
      'Sweden',
      'Lebanon',
      // Add more countries as needed
    ],
    manufacturer: [
      'Leo Pharma A/S',
      'Bayer Hispania',
      'Abbvie Ltd',
      'Ferring GmbH',
      // Add more manufacturers as needed
    ],
    manufacturingCountry: [
      'France',
      'Spain',
      'USA',
      'Sweden',
      'Lebanon',
      // Add more countries as needed
    ],
    cargoShippingTerms: ['CIF', 'FOB'],
    // Add more inputs and their options as needed
  };

  function addSpacesToInputName(inputName) {
    // Convert camelCase or PascalCase to readable format
    const spacedName = inputName.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Capitalize the first letter
    return spacedName.charAt(0).toUpperCase() + spacedName.slice(1);
  }

  // const inputName = 'responsiblePartyCountry';

  return (
    <div className="col-span-1 flex flex-col w-full sm:w-[80em] h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
      <h1 className="pb-2 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
        1 - Drug Registry Informations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-6">
        {Object.keys(inputOptions).map((inputName) => (
          <div key={inputName} className="input-container relative">
            <div className="label-btn-container flex justify-between items-center">
              <label htmlFor={inputName} className="labels text-md block text-left">
                {addSpacesToInputName(inputName)}
              </label>
              <div className="btns-cont flex">
                <button
                  onClick={() => openAddModal(inputName)}
                  type="button"
                  className="rounded-xl bg-transparent p-2 text-green-pri focus:border-[#00a651] focus:outline-none focus:ring-1"
                >
                  Add
                </button>
                {formDataStep1[inputName] && (
                  <button
                    onClick={() => openEditModal(inputName, formDataStep1[inputName])}
                    type="button"
                    className="rounded-xl bg-transparent p-2 text-green-pri focus:border-[#00a651] focus:outline-none focus:ring-1"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
            <select
              name={inputName}
              value={formDataStep1[inputName] || ''}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            >
              <option disabled value="">
                Select an option
              </option>
              {inputOptions[inputName].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className="input-container relative">
          <label htmlFor="BrandName" className="labels text-md block text-left">
            Drug Name
          </label>
          <input
            name="BrandName"
            value={formDataStep1.BrandName}
            onChange={(e) => handleInputChange(e)}
            className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            type="text"
            autoComplete="off"
            placeholder="name"
          />
        </div>

        <div className="input-container relative">
          <label htmlFor="PriceFOREIGN" className="labels text-md mb-2 block text-left">
            Foreign Price
          </label>
          <div className="relative" style={{ borderColor: 'transparent' }}>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-bold">
              <span className="text-green-pri">
                {currencySymbols[formDataStep1.currencyForeign]}
              </span>
            </div>
            <input
              name="PriceFOREIGN"
              type="number"
              id="price"
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-12 py-2 font-semibold shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder="0.00"
              autoComplete="off"
              value={formDataStep1.PriceFOREIGN || ''}
              // value={formDataStep1?.PriceFOREIGN}
              onChange={(e) => handleInputChange(e)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currencyForeign" className="sr-only ">
                Foreign Currency
              </label>
              <select
                id="currency"
                name="currencyForeign"
                className="w-20 cursor-pointer appearance-none rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-fg dark:bg-black-fg  py-2 font-normal shadow outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri dark:focus:ring-1 dark:focus:ring-green-pri sm:w-20"
                onChange={(e) => handleInputChange(e)}
                value={formDataStep1.currencyForeign || ''}
                // value={formDataStep1.currencyForeign}
              >
                {Object.keys(exchangeRates).map((currencyForeign) => (
                  <option key={currencyForeign} value={currencyForeign}>
                    {currencyForeign}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="input-container relative">
          <label className="labels text-md block text-left">Foreign Price in USD</label>
          <input
            name="convertToUSD"
            readOnly
            className="converted-price-usd mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-semibold shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            value={` ${convertToUSD()}`}
          />
        </div>
        <div className="input-container relative">
          <label className="labels text-md block text-left">Foreign Price in LBP</label>
          <input
            name="convertToLBP"
            readOnly
            className="converted-price-usd mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-semibold shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            value={` ${(() => {
              const convertedValue = convertToLBP();
              // console.log("Converted Value:", convertedValue);

              const numericValue = parseFloat(convertedValue.replace('.', ''));
              // console.log("Numeric Value:", numericValue);

              if (!isNaN(numericValue) && isFinite(numericValue)) {
                const formattedValue = numericValue.toLocaleString('en-LB');
                // console.log("Formatted Value:", formattedValue);
                return formattedValue;
              }
              return '';
            })()}`}
          />
        </div>

        <div className="input-container relative">
          <label htmlFor="RegistrationNumber" className="labels text-md block text-left">
            Registration Number
          </label>
          <input
            name="RegistrationNumber"
            value={formDataStep1.RegistrationNumber}
            onChange={(e) => handleInputChange(e)}
            className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            type="text"
            autoComplete="off"
            placeholder="reg #"
          />
        </div>

        {/* Text Input 2 */}
        <div className="input-container relative">
          <label htmlFor="Code" className="labels text-md block text-left">
            MOH Code
          </label>
          <input
            name="Code"
            value={formDataStep1.Code}
            onChange={(e) => handleInputChange(e)}
            className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            type="text"
            autoComplete="off"
            placeholder="code"
          />
        </div>

        {/* Date Input 1 */}
        {/* <div className="input-container relative"> */}
        {/* <label htmlFor="REP_date" className="labels text-md block text-left"> */}

        <div className="relative">
          <DatePicker
            title="Rep Date"
            id="REP_date"
            name="REP_date"
            value={formDataStep1.REP_date}
            onChange={handleInputChange}
            options={datePickerOptions}
          />
        </div>
        {/* </label> */}
        {/* </div> */}

        {/* Date Input 2 */}
        {/* <div className="input-container relative text-left"> */}
        <div className="relative">
          <DatePicker
            title="Review date"
            id="LASTEffective_Date"
            name="LASTEffective_Date"
            value={formDataStep1.LASTEffective_Date}
            onChange={handleInputChange}
            options={datePickerOptions}
          />
        </div>
        {/* </div> */}

        {isAddModalOpen && (
          <AddModal
            closeModal={() => setAddModalOpen(false)}
            title={getTitle(addSpacesToInputName(selectedInput))}
            onAdd={handleAdd}
            onCancel={handleCancel}
          />
        )}

        {isEditModalOpen && (
          <EditModal
            closeModal={() => setEditModalOpen(false)}
            title={getTitle(addSpacesToInputName(selectedInput))}
            onEdit={handleEdit}
            onCancel={handleCancel}
            initialValue={editInputValue}
          />
        )}
      </div>
    </div>
  );
};

export default DrugRegistryForm;

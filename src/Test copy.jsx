import React from "react";
import Select from "react-select";
const ResponsiveForm = () => {
  return (
    <div className="container mx-auto mt-8 pt-20">
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Price
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-3xl border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:rounded-3xl focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="h-full rounded-3xl border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>

        {/* Input 1 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 1
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-3xl border border-gray-300 p-2 focus:border-[#259F83] focus:outline-none focus:ring"
          />
        </div>

        {/* Input 2 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 2
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-3xl border border-gray-300 p-2 focus:border-[#259F83] focus:outline-none focus:ring"
          />
        </div>

        {/* Input 3 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 3
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-3xl border border-gray-300 p-2 focus:border-[#259F83] focus:outline-none focus:ring"
          />
        </div>

        {/* Input 4 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 4
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-3xl border border-gray-300 p-2 focus:border-[#259F83] focus:outline-none focus:ring"
          />
        </div>

        {/* Input 5 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 5
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-3xl border border-gray-300 p-2 focus:border-[#259F83] focus:outline-none focus:ring"
          />
        </div>

        {/* Input 6 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 6
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-3xl border border-gray-300 p-2 focus:border-[#259F83] focus:outline-none focus:ring"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Field 3
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring"
          />
        </div>

        {/* Input 4: Amount (Number) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Amount
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring"
          />
        </div>

        {/* Input 5: Currency (Select) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Currency
          </label>
          <Select
            options={[
              { value: "usd", label: "USD" },
              { value: "eur", label: "EUR" },
              { value: "gbp", label: "GBP" },
            ]}
            className="w-full"
          />
        </div>

        {/* Submit button */}
        <div className="col-span-full">
          <button
            type="submit"
            className="w-fit rounded-3xl bg-teal-500 p-3 text-white hover:bg-teal-600 focus:border-[#259F83] focus:outline-none focus:ring"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResponsiveForm;

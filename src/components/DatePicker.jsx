/* eslint-disable jsx-a11y/label-has-associated-control */
import flatpickr from 'flatpickr';
import PropTypes from 'prop-types';
import 'flatpickr/dist/flatpickr.min.css';
import React, { useRef, useEffect } from 'react';

function DatePicker({ title, options }) {
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (datePickerRef.current) {
      const updatedOptions = {
        ...options,
        // Remove date restrictions
        minDate: null,
        maxDate: null,
        // Reverse the selected values
        defaultDate: options && options.defaultDate ? options.defaultDate.reverse() : null,
        // Set date format to "dd-MM-yyyy"
        dateFormat: 'd-m-Y',
      };

      flatpickr(datePickerRef.current, updatedOptions || {});
    }
  }, [options]);

  return (
    <div className="text-left">
      <label className="font-medium">{title}</label> <br />
      <input
        ref={datePickerRef}
        className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
        type="text"
        placeholder="Select a date"
      />
    </div>
  );
}

DatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default DatePicker;

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Bar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedClassFilter, setSelectedClassFilter] = useState(null);

  const handleSearch = (query, classFilter) => {
    setSearchQuery(query);
    // Perform search operations with the provided query and filter
  };

  const handleIconClick = () => {
    // Trigger the search with the current searchQuery and selectedClassFilter
    handleSearch(searchQuery, selectedClassFilter);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for medicines..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value, selectedClassFilter)}
        className="w-full p-2 rounded-2xl border border-white-shadow dark:border-black-border bg-white-contents dark:bg-black-contents px-4 py-2 font-normal dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
      />

      <div className="search-icon cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
        <FaSearch onClick={handleIconClick} />
      </div>
    </div>
  );
};

export default Bar;

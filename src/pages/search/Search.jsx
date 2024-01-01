import React, { useState } from "react";
import dummyResultData from "./dummyResultData";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showATCFilters, setShowATCFilters] = useState(false);
  const [showAlphabetFilters, setShowAlphabetFilters] = useState(false);
  const [showOTCFilters, setShowOTCFilters] = useState(false);
  const [selectedClassFilter, setSelectedClassFilter] = useState(null);
  const [selectedAlphabetFilter, setSelectedAlphabetFilter] = useState(null);

  const handleSearch = (query, classFilter) => {
    setSearchQuery(query);

    // Simulate fetching search results (replace with your actual search logic)
    const results = dummySearchFunction(query, classFilter);
    setSearchResults(results);
  };

  const handleATCFilterClick = () => {
    setShowATCFilters(!showATCFilters);
    // Hide alphabet filters when ATC filters are shown
    setShowAlphabetFilters(false);
  };

  const handleAlphabetFilterClick = (letter) => {
    setSelectedAlphabetFilter((prevFilter) => {
      console.log("prevFilter:", prevFilter);
      console.log("letter:", letter);
      return prevFilter === letter ? null : letter;
    });

    // Filter results based on names starting with the selected letter
    const results = dummyResultData.filter((result) =>
      result.name.toLowerCase().startsWith(letter.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleClassFilterClick = (classFilter) => {
    // Toggle the selected class filter
    setSelectedClassFilter((prevFilter) =>
      prevFilter === classFilter ? null : classFilter
    );

    // Clear search results if the class filter doesn't match the current search query
    if (classFilter && searchQuery) {
      const results = dummySearchFunction(searchQuery, classFilter);
      setSearchResults(results);
    } else {
      // Clear results when the class filter is unchecked
      setSearchResults([]);
    }
  };

  const handleOTCFilterClick = () => {
    // Toggle the OTC filter
    setShowOTCFilters(!showOTCFilters);

    // Fetch all data when the OTC filter is selected
    if (!showOTCFilters) {
      const allResults = dummyResultData; // Replace this with your actual data fetching logic
      setSearchResults(allResults);
    } else {
      // Clear search results when the OTC filter is deselected
      setSearchResults([]);
    }

    // Hide other filters
    setShowATCFilters(false);
    setShowAlphabetFilters(false);
  };

  const dummySearchFunction = (query, classFilter) => {
    return dummyResultData.filter((result) => {
      const lowercaseName = result.name.toLowerCase();
      const lowercaseQuery = query.toLowerCase();
      const matchesQuery =
        lowercaseName.includes(lowercaseQuery) &&
        (!classFilter || result.filters.classFilter === classFilter);

      return matchesQuery;
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSearchResults([]); // Clear search results
    setSelectedClassFilter(null);
    setSelectedAlphabetFilter(null);
  };

  return (
    <div className="container flex flex-col items-center mx-auto p-4">
      <input
        type="text"
        placeholder="Search for medicines..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value, selectedClassFilter)}
        className="w-[50%] p-2 rounded-full border border-[#259f8300] dark:border-[#3a3c3d] bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
      />

      <div className="filter-btns-cont flex items-center p-1 mb-4 mt-4 bg-green-pri dark:text-white-bg rounded-lg ">
        <button
          onClick={handleATCFilterClick}
          className={`${
            showATCFilters ? "bg-white-bg text-green-pri" : "text-white-bg "
          } rounded-full px-4 py-2 hover:transition-all duration-200 `}
        >
          {showATCFilters ? "ATC" : "ATC"}
        </button>

        <button
          onClick={() => setShowAlphabetFilters(!showAlphabetFilters)}
          className={`${
            showAlphabetFilters
              ? "bg-white-bg text-green-pri"
              : "text-white-bg "
          } rounded-full px-4 py-2 hover:transition-all duration-200 `}
        >
          {showAlphabetFilters ? "A-to-Z" : "A-to-Z"}
        </button>

        <button
          onClick={handleOTCFilterClick}
          className={`${
            showOTCFilters ? "bg-white-bg text-green-pri" : "text-white-bg "
          } rounded-full px-4 py-2 hover:transition-all duration-200 `}
        >
          {showOTCFilters ? "OTC" : "OTC"}
        </button>
      </div>
      {showATCFilters && (
        <div className="mt-4">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg text-center w-fit text-[#000] dark:text-[#fff] mb-2 rounded px-2">Filter by ATC Classes</h3>
            <div className="flex justify-center flex-wrap space-x-2">
              {[
                "ClassA",
                "ClassB",
                "ClassC",
                "ClassD",
                "ClassN",
                "ClassG",
                "ClassL",
              ].map((classFilter) => (
                <button
                  key={classFilter}
                  onClick={() => handleClassFilterClick(classFilter)}
                  className={`bg-white-input dark:bg-black-input p-2 rounded-md focus:bg-green-pri ${
                    selectedClassFilter === classFilter
                      ? "bg-white-contents text-white-bg"
                      : "bg-white-contents text-white-bg"
                  }`}
                >
                  {classFilter}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showAlphabetFilters && (
        <div className="mt-4">
          <div>
            <h3 className="text-lg text-green-pri mb-2">Filter by Alphabet</h3>
            <div className="flex justify-center flex-wrap space-x-2">
              {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    handleAlphabetFilterClick(letter);
                    console.log(
                      "selectedAlphabetFilter:",
                      selectedAlphabetFilter
                    );
                    console.log("letter:", letter);
                  }}
                  className={`border border-green-pri dark:bg-transparent mb-2 p-[3px] px-3 rounded-full focus:bg-green-pri dark:focus:bg-green-pri ${
                    selectedAlphabetFilter === letter
                      ? "bg-green-pri text-white-bg"
                      : "bg-black-input text-green-pri"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl mb-2">Search Results</h2>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((result) => (
              <div
                key={result.name}
                className="bg-white-bg dark:bg-black-contents p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
                <p>
                  ATC Class: {result.filters.classFilter}, ATC Code:{" "}
                  {result.filters.atcCode.join(", ")}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>

      {/* Clear filters button */}
      {(searchQuery || selectedClassFilter || selectedAlphabetFilter) && (
        <button
          onClick={clearFilters}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default SearchComponent;

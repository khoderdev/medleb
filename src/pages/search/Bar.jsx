import React, { useState, useEffect, useRef } from "react";
import dummyResultData from "./dummyResultData";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedData, setSuggestedData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Clicked outside the input, close suggestions
        setIsInputFocused(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isInputFocused) {
      const sortedData = dummyResultData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSuggestedData(sortedData);
    }
  }, [isInputFocused]);

  const handleSearch = (term) => {
    const filteredData = dummyResultData.filter((item) => {
      const includesName = item.name.toLowerCase().includes(term.toLowerCase());
      const includesClassFilter = item.filters.classFilter
        .toLowerCase()
        .includes(term.toLowerCase());
      const includesATCCode = item.filters.atcCode.some((code) =>
        code.toLowerCase().includes(term.toLowerCase())
      );
      return includesName || includesClassFilter || includesATCCode;
    });
    const sortedData = filteredData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSuggestedData(sortedData);
  };

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (!term) {
      setSuggestedData([]);
    } else {
      handleSearch(term);
    }
  };

  const handleFocus = () => {
    setIsInputFocused(true);
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  };

  const handleClick = () => {
    if (!isInputFocused) {
      setIsInputFocused(true);
      handleSearch(searchTerm);
    }
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSuggestedData([]);
  };

  return (
    <div className="mx-auto max-w-md ">
      <div
        className="relative flex flex-col items-center justify-center"
        ref={inputRef}
      >
        <label className="text-3xl text-green-pri">Search</label>
        <input
          type="text"
          placeholder={isInputFocused ? "" : "Search for medicines..."}
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          className="w-full mt-2 p-2 rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] transition-all"
        />
        {searchTerm && (
          <button
            className="absolute top-[51px] right-3 text-gray-300"
            onClick={clearSearch}
          >
            Clear
          </button>
        )}
      </div>
      <ul className={`mt-2 ${isInputFocused ? "" : "hidden"}`}>
        {suggestedData.map((item, index) => (
          <li
            key={index}
            className=" border-b border-y-black-input p-2 hover:bg-white-fg dark:hover:bg-black-fg cursor-pointer z-50"
          >
            <div className=" text-lg">{item.name}</div>
            <div className="text-sm">
              Class: {item.filters.classFilter}, ATC Code:{" "}
              {item.filters.atcCode.join(", ")}
            </div>
          </li>
        ))}
        {suggestedData.length === 0 && searchTerm && (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;

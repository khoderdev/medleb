import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../index.css";
import { useDarkMode } from "../../DarkModeContext";

const WhiteOutlinedTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#259F83",
      borderRadius: "50px",
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  customInput: {
    "&:focus": {
      outline: "none",
    },
  },

  paper: {
    backgroundColor: "#e5e7eb",
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    transition: "box-shadow 0.3s ease-in-out", // Add transition for a smoother effect
    // boxShadow: "0 0 0 0 transparent", // Initial box-shadow style
    "&:focus-within": {
      outline: "none",
      boxShadow: "0 0 0 3px rgba(37, 159, 131, 0.8)", // Box-shadow on focus
    },
  },

  focusedInput: {
    border: "1px solid #259F83",
  },

  outlinedButton: {
    transition: "background-color 0.3s, color 0.3s, border 0.3s",
    padding: "12px",
    borderRadius: "50px",
    backgroundColor: "transparent",
    color: "#fff",
    // border: "1px solid transparent",
    "&:hover": {
      // backgroundColor: "#259F83",
      // color: "#fff",
      // border: "1px solid #259F83",
      transition: "background-color 0.3s, color 0.3s, border 0.3s",
    },
  },

  outlinedButton2: {
    transition: "background-color 0.3s, color 0.3s, border 0.3s",
    padding: "12px",
    borderRadius: "50px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      transition: "background-color 0.3s, color 0.3s, border 0.3s",
    },
  },

  activeButton1: {
    backgroundColor: "#fff",
    color: "#259F83",
    // border: "1px solid #259F83",
    transition: "background-color 0.3s, color 0.3s, border 0.3s",
    // "&:hover": {
    //   backgroundColor: "#fff",
    //   color: "#259F83",
    // },
  },

  iconButton: {
    color: "#259F83",
    "&:hover": {
      backgroundColor: "transparent",
      transition: "background-color 0.3s, color 0.3s, border 0.3s",
    },
  },

  activeButton2: {
    backgroundColor: "transparent",
    color: "#259F83",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#259F83",
      transition: "background-color 0.3s, color 0.3s, border 0.3s",
    },
    "&:active": {
      backgroundColor: "transparent",
      color: "#259F83",
    },
  },

  // Add a dark mode variant for the button
  darkActiveButton2: {
    backgroundColor: "transparent",
    color: "#259F83",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#259F83",
    },
    "&:active": {
      backgroundColor: "transparent",
      color: "#259F83",
    },
  },

  activeButton3: {
    transition: "background-color 0.3s, color 0.3s, border 0.3s",
    backgroundColor: "#259F83",
    // color: "#000",
    border: "1px solid #259F83",
  },

  searchIcon: {
    color: "#259F83",
    "&:hover": {
      color: "#17d3a8",
    },
  },
  // Update existing styles for responsiveness
  responsiveContainer: {
    width: "100%",
    padding: theme.spacing(0),
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

// ///////////////////////////////////////////////////////////////////////////

const dummyResultData = [
  { name: "Biafine", filterClass: "A-to-Z", class: "ClassB" },
  { name: "Caltrade", filterClass: "ATC", class: "ClassC" },
  { name: "Daktacort", filterClass: "OTC", class: "ClassD" },
  { name: "Eprima", filterClass: "ATC", class: "ClassE" },
  { name: "Gastrazole", filterClass: "A-to-Z", class: "ClassG" },
  { name: "Lexotanile", filterClass: "OTC", class: "ClassL" },
  { name: "Panadol", filterClass: "ATC", class: "ClassP" },
  { name: "Biafine", filterClass: "A-to-Z", class: "ClassB" },
  { name: "Caltrade", filterClass: "ATC", class: "ClassC" },
  { name: "Daktacort", filterClass: "OTC", class: "ClassD" },
  { name: "Eprima", filterClass: "ATC", class: "ClassE" },
  { name: "Gastrazole", filterClass: "A-to-Z", class: "ClassG" },
  { name: "Lexotanile", filterClass: "OTC", class: "ClassL" },
  { name: "Panadol", filterClass: "ATC", class: "ClassP" },
  { name: "Biafine", filterClass: "A-to-Z", class: "ClassB" },
  { name: "Caltrade", filterClass: "ATC", class: "ClassC" },
  { name: "Daktacort", filterClass: "OTC", class: "ClassD" },
  { name: "Eprima", filterClass: "ATC", class: "ClassE" },
  { name: "Gastrazole", filterClass: "A-to-Z", class: "ClassG" },
  { name: "Lexotanile", filterClass: "OTC", class: "ClassL" },
  { name: "Panadol", filterClass: "ATC", class: "ClassP" },
];

const SearchComponent = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const { isDarkMode } = useDarkMode();
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Corrected from setFilter to setSearchQuery
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeGroups, setActiveGroups] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [isRowView, setIsRowView] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const backgroundColorClass = isDarkMode ? "#595959" : "#e5e7eb";
  const textColorClass = isDarkMode ? "#fff" : "#000";

  useEffect(() => {
    // Simulate fetching search results based on the applied filters and search query
    const filteredResults = dummyResultData.filter((medication) => {
      const matchesGroup =
        activeGroups.length === 0 ||
        activeGroups.includes(medication.class) ||
        activeGroups.includes(medication.filterClass);
      const matchesFilter =
        selectedFilters.length === 0 ||
        selectedFilters.includes(medication.name.charAt(0));
      const matchesSearch =
        searchQuery === "" ||
        medication.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesFilter && matchesSearch;
    });

    setSearchResults(filteredResults);
  }, [activeGroups, selectedFilters, searchQuery]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleFilterClick = (letter) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(letter)) {
        return prevSelectedFilters.filter((filter) => filter !== letter);
      } else {
        return [...prevSelectedFilters, letter];
      }
    });
  };

  const handleGroupButtonClick = (action) => {
    setActiveGroups((prevActiveGroups) => {
      if (prevActiveGroups.includes(action)) {
        // If already active, remove it
        return prevActiveGroups.filter((group) => group !== action);
      } else {
        // If not active, add it
        return [...prevActiveGroups, action];
      }
    });
  };

  const handleToggleView = () => {
    setIsGridView((prev) => !prev);
    setIsRowView((prev) => !prev);
  };

  const handleFilterChange = debounce((value) => {
    setSearchQuery(value); // Corrected from setFilter to setSearchQuery
  }, 300);

  const handleReset = () => {
    setSearchQuery(""); // Reset the search input
    setSelectedFilters([]); // Reset the selected filters
    setActiveGroups([]); // Reset the active groups
  };

  return (
    <div id="search-main" className="search-main">
      <Box
        className={classes.responsiveContainer}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="auto"
        // bgcolor="#333"
        p={4}
        border="1p"
        paddingTop={0}
      >
        <div className="flex w-full justify-center">
          <Paper
            component="form"
            className={`${classes.paper} ${isFocused ? "focused" : ""}`}
            style={{
              width: isMobile ? "100%" : 600,
              backgroundColor: backgroundColorClass,
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            <InputBase
              style={{
                flexGrow: 1,
                color: textColorClass,
              }}
              sx={{
                ml: 1,
                flex: 1,
                border: 0,
                "&:focus": {
                  outline: "none",
                  // --tw-ring-color: transparent !important;
                  "input:hover, input:focus, input:active, input:checked": {
                    "--tw-ring-color": "transparent",
                  },
                },
              }}
              placeholder="Search for a medication"
              inputProps={{ "aria-label": "medications search" }}
              onChange={(e) => handleFilterChange(e.target.value)}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <SearchIcon sx={{ color: "#259F83" }} />
            </IconButton>
          </Paper>
        </div>
        {/* ************************************************************************************* */}

        {/* Group of 3 Inline Buttons */}

        <div className="flex pl-10 w-80">
          <div className="mx-auto my-3 flex h-14 w-fit items-center justify-center space-x-4 rounded-2xl bg-green-pri p-4 text-center">
            {["A-to-Z", "ATC", "OTC"].map((group) => (
              <button
                key={group}
                onClick={() => handleGroupButtonClick(group)}
                className={`${classes.outlinedButton} ${
                  activeGroups.includes(group) && classes.activeButton1
                }`}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Grid/List View Toggle Icon */}
          <div className="mt-4 flex justify-end">
            <IconButton
              className={classes.iconButton}
              onClick={handleToggleView}
            >
              {isGridView ? <ViewListIcon /> : <ViewModuleIcon />}
            </IconButton>
          </div>
        </div>

        {/* ************************************************************************************* */}

        {/* Group of 11 Inline Buttons */}
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2 p-1 md:flex-row">
          <button
            onClick={() => handleGroupButtonClick("ClassB")}
            className={`${
              activeGroups.includes("ClassB")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class B
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassC")}
            className={`${
              activeGroups.includes("ClassC")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class C
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassD")}
            className={`${
              activeGroups.includes("ClassD")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class D
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassE")}
            className={`${
              activeGroups.includes("ClassE")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class E
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassF")}
            className={`${
              activeGroups.includes("ClassF")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class F
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassG")}
            className={`${
              activeGroups.includes("ClassG")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class G
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassH")}
            className={`${
              activeGroups.includes("ClassH")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class H
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassI")}
            className={`${
              activeGroups.includes("ClassI")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class I
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassJ")}
            className={`${
              activeGroups.includes("ClassJ")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class J
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassK")}
            className={`${
              activeGroups.includes("ClassK")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class K
          </button>

          <button
            onClick={() => handleGroupButtonClick("ClassL")}
            className={`${
              activeGroups.includes("ClassL")
                ? "bg-green-pri text-white"
                : "text-green-pri "
            } rounded-full px-4 py-2 hover:transition-all duration-200`}
          >
            Class L
          </button>
        </div>

        {/* ************************************************************************************* */}

        {/* Alphabet Filter Buttons */}
        <div className="flex flex-wrap justify-center space-x-2">
          {Array.from(Array(26), (_, i) => String.fromCharCode(65 + i)).map(
            (letter) => (
              <button
                key={letter}
                onClick={() => handleFilterClick(letter)}
                className={`${
                  selectedFilters.includes(letter) && classes.activeButton3
                } text-black-text dark:text-white-text  dark:border-gray-600 `}
                style={{
                  textTransform: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  margin: "5px",
                  border: "1px solid #259F83",
                  backgroundColor: selectedFilters.includes(letter)
                    ? "#259F83"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "#259F83",
                  },
                  "&:active": {
                    backgroundColor: "#259F83",
                  },
                }}
              >
                {letter}
              </button>
            )
          )}
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Reset Button */}
        {(searchQuery ||
          selectedFilters.length > 0 ||
          activeGroups.length > 0) && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleReset}
              className="text-green-pri hover:text-green-sec"
            >
              Clear all
            </button>
          </div>
        )}
      </Box>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Display Search Results */}
      <div
        className={`${
          isRowView ? "flex flex-col" : "grid"
        } gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {selectedFilters.length > 0 || activeGroups.length > 0 ? (
          searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div
                key={result.name}
                className={`${
                  isRowView
                    ? "bg-gray-200 p-4 shadow-md rounded-xl mb-4"
                    : "bg-white p-4 shadow-md rounded-xl"
                }`}
              >
                <p className="text-lg font-semibold">{result.name}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {result.filterClass}
                </p>
                <p className="text-sm text-gray-500">{result.class}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No results found.</p>
          )
        ) : (
          <p className="text-gray-500 text-center">
            Search or select filters or groups to show results.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

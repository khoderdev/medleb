
import { useState } from "react";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";




// import { useDarkMode } from "../DarkModeContext";

const WhiteOutlinedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#259F83",
    borderRadius: "50px",
  },
  "& .MuiOutlinedInput-input": {
    color: "#fff",
  },
});

const useStyles = makeStyles((theme) => ({
  outlinedButton: {
    padding: "12px",
    borderRadius: "50px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: "#259F83",
      color: "#fff",
      border: "1px solid #259F83",
    },
  },


  outlinedButton2: {
    // color: "#fff",
    padding: "12px",
    borderRadius: "50px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      // color: "#fff",
    },
  },

  activeButton1: {
    backgroundColor: "#fff",
    color: "#259F83",
    border: "1px solid #259F83",
  },
  iconButton: {
    color: "#259F83",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  activeButton2: {
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
    padding: "3px",
    boxSizing: "border-box",
  },
}));

const Search = (props) => {
  const [filter, setFilter] = useState("");
  const [activeGroup, setActiveGroup] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  // const { darkMode } = useDarkMode();
const classes = useStyles();  // Use useStyles hook
  const handleFilterClick = (alphabet) => {
    setFilter(alphabet);
  };

  const handleGroupButtonClick = (action) => {
    console.log(`Group button clicked: ${action}`);
    setActiveGroup(action === activeGroup ? "" : action);
  };

  const handleToggleView = () => {
    setIsGridView((prev) => !prev);
  };



  return (
    <div className="dark:bg-black">
      <div className="">
        <div className="">
          <Box
            className={classes.responsiveContainer}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="auto"
            p={4}
            border="1px"
          >
            {/* Search Bar & Heading text */}
            {/* <Typography
              variant="h3"
              style={{
                color: "#259F83",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Search Medicines
            </Typography> */}
            <WhiteOutlinedTextField
              id="search"
              onInput={props.onInput}
              placeholder="Search for Drugs"
              style={{ width: "100%" }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon
                      className={classes.searchIcon}
                      style={{ fontSize: 28 }}
                    />
                  </IconButton>
                ),
              }}
            />

            {/* ************************************************************************************* */}

            {/* Group of 3 Inline Buttons */}
            <div className="flex">
              <div className="mx-auto my-3 flex h-14 w-fit items-center justify-center space-x-2 rounded-2xl bg-[#259F83] p-4 text-center">
                <button
                  onClick={() => handleGroupButtonClick("A-to-Z")}
                  className={`${classes.outlinedButton} ${
                    activeGroup === "A-to-Z" && classes.activeButton1
                  }`}
                >
                  A-to-Z
                </button>
                <button
                  onClick={() => handleGroupButtonClick("ATC")}
                  className={`${classes.outlinedButton} ${
                    activeGroup === "ATC" && classes.activeButton1
                  }`}
                >
                  ATC
                </button>
                <button
                  onClick={() => handleGroupButtonClick("OTC")}
                  className={`${classes.outlinedButton} ${
                    activeGroup === "OTC" && classes.activeButton1
                  }`}
                >
                  OTC
                </button>
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
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 p-4 md:flex-row">
              <button
                onClick={() => handleGroupButtonClick("ClassB")}
                className={`${
                  activeGroup === "ClassB"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class B
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassC")}
                className={`${
                  activeGroup === "ClassC"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class C
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassD")}
                className={`${
                  activeGroup === "ClassD"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class D
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassE")}
                className={`${
                  activeGroup === "ClassE"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class E
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassF")}
                className={`${
                  activeGroup === "ClassF"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class F
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassG")}
                className={`${
                  activeGroup === "ClassG"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class G
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassH")}
                className={`${
                  activeGroup === "ClassH"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class H
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassI")}
                className={`${
                  activeGroup === "ClassI"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class I
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassJ")}
                className={`${
                  activeGroup === "ClassJ"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class J
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassK")}
                className={`${
                  activeGroup === "ClassK"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
              >
                Class K
              </button>

              <button
                onClick={() => handleGroupButtonClick("ClassL")}
                className={`${
                  activeGroup === "ClassL"
                    ? "bg-[#259F83] text-white"
                    : "text-[#259F83] hover:bg-[#259F83] hover:text-white"
                } rounded-full px-4 py-2`}
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
                      filter === letter && classes.activeButton3
                    } text-gray-900  dark:border-gray-600 dark:text-white`}
                    style={{
                      textTransform: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      margin: "5px",
                      // color: "#fff",
                      border: "1px solid #259F83",
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
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Search;

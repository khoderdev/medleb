/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useDarkMode } from "../DarkModeContext";
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
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
}));

const SearchComponent = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust breakpoint as needed

  const [filter, setFilter] = useState("");
  const [activeGroup, setActiveGroup] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const classes = useStyles();
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
    <div className="">
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
        paddingTop={50}
      >
        <div className="flex w-full justify-center">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: isMobile ? "100%" : 600, // Set different widths for mobile and non-mobile
              borderRadius: 30,
              "&:focus-within": {
                outline: "none", // Remove blue outline on focus
              },
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                border: 0, // Set border radius here
                "&:focus": {
                  outline: "none", // Remove blue outline on focus
                },
              }}
              placeholder="Search for a medication"
              inputProps={{ "aria-label": "medications search" }}
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
        <div className="flex pl-1 ">
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
  );
};

export default SearchComponent;

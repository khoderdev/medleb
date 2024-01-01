
import React, { useState } from "react";

export function ImportIcon() {
  const [activeState, setActiveState] = useState("default");

  const handleMouseEnter = () => {
    setActiveState("hovered");
  };

  const handleMouseLeave = () => {
    setActiveState("default");
  };

  const handleClick = () => {
    setActiveState(activeState === "active" ? "default" : "active");
  };
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 62 62"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      fill={
        activeState === "active"
          ? "#259F83" // Active color
          : activeState === "hovered"
          ? "#259F83" // Hover color
          : "none" // Default color
      }
    >
      <rect
        x="1"
        y="1"
        width="60"
        height="60"
        rx="21"
        stroke="#259F83"
        strokeWidth="1.5"
      />

      <path
        d="M17 33.6529L17 40.6651C17 43.1157 18.909 45.1023 21.264 45.1023H26.236H34.764H39.736C42.091 45.1023 44 43.1157 44 40.6651V33.6529"
        // stroke="#259F83"
        stroke={
          activeState === "active"
            ? "#fff" // Active color
            : activeState === "hovered"
            ? "#fff" // Hover color
            : "#259F83" // Default color
        }
        strokeWidth="5"
        strokeLinecap="round"
        fill={
          activeState === "active"
            ? "#259F83" // Active color
            : activeState === "hovered"
            ? "#259F83" // Hover color
            : "" // Default color
        }
      />

      <line
        x1="31.1982"
        y1="36.1267"
        x2="31.1982"
        y2="19.5001"
        stroke={
          activeState === "active"
            ? "#fff" // Active color
            : activeState === "hovered"
            ? "#fff" // Hover color
            : "#259F83" // Default color
        }
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M23 30.176L31.25 37.1729L38.75 30.176"
        stroke={
          activeState === "active"
            ? "#fff" // Active color
            : activeState === "hovered"
            ? "#fff" // Hover color
            : "#259F83" // Default color
        }
        strokeWidth="5"
        strokeLinecap="round"
        // fill={
        //   activeState === "active"
        //     ? "#259F83" // Active color
        //     : activeState === "hovered"
        //     ? "#259F83" // Hover color
        //     : "#259F83" // Default color
        // }
      />

      <path
        d="M30.875 26.0415V20.9529"
        stroke={
          activeState === "active"
            ? "#259F83" // Active color
            : activeState === "hovered"
            ? "#259F83" // Hover color
            : "#fff" // Default color
        }
        // strokeWidth="1.1"
        strokeWidth={
          activeState === "active"
            ? "0.5" // Active color
            : activeState === "hovered"
            ? "0.5" // Hover color
            : "1.1" // Default color
        }
        strokeLinecap="round"
      />
    </svg>
  );
}
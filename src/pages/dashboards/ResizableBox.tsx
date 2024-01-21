import React from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function ResizableBox({
  children,
  width = 1440,
  height = 300,
  resizable = true,
  style = {},
  className = "",
}) {
  const containerStyle = {
    width: resizable ? "auto" : `${width}px`,
    background: "",
    // padding: ".5rem",
    // borderRadius: "0.5rem",
    boxShadow: "0 30px 40px rgba(0, 0, 0, .1)",
    ...style,
  };

  const contentStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div style={{ marginLeft: 0 }}>
      <div style={containerStyle}>
        {resizable ? (
          <ReactResizableBox width={width} height={height}>
            <div style={contentStyle} className={className}>
              {children}
            </div>
          </ReactResizableBox>
        ) : (
          <div style={contentStyle} className={className}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

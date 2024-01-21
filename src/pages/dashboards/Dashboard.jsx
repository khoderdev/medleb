import React from "react";
import BarStacked from "./BarStacked";
import BarHorizontalStacked from "./BarHorizontalStacked";
import Bubble from "./Bubble";
import Line from "./Line";
import useLagRadar from "./useLagRadar";
const components = [
  ["Line", Line],
  // ["Bar", Bar],
  ["Bar (Stacked)", BarStacked],
  // ["Bar (Horizontal)", BarHorizontal],
  ["Bar (Horizontal + Stacked)", BarHorizontalStacked],
  ["Bubble", Bubble],
];

export default function Dashboards({ className }) {
  useLagRadar();
  return (
    <div className="overflow-hidden mr-10 sm:m-0">
      {components.map(([label, Comp]) => {
        return (
          <div  key={label + ""}>
            <h1>{label}</h1>
            <div>{ className }
              <Comp />
            </div>
          </div>
        );
      })}
      {/* <div style={{ height: "50rem" }} /> */}
    </div>
  );
}

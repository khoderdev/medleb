import React from "react";
import { Chart } from "react-charts";

import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useChartConfig";

export default function BarHorizontalStacked({ className }) {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "ordinal",
  });

  const primaryAxis = React.useMemo(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
    }),
    [] // Dependency array can be empty if there are no dependencies
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
        stacked: true,
      },
    ],
    [] // Dependency array can be empty if there are no dependencies
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}

import React from 'react';

import Line from './Line';
import Bubble from './Bubble';
import BarStacked from './BarStacked';
import BarHorizontalStacked from './BarHorizontalStacked';

const components = [
  ['Line', Line],
  // ["Bar", Bar],
  ['Bar (Stacked)', BarStacked],
  // ["Bar (Horizontal)", BarHorizontal],
  ['Bar (Horizontal + Stacked)', BarHorizontalStacked],
  ['Bubble', Bubble],
];

export default function Dashboards({ className }) {
  return (
    <div className="overflow-hidden mr-10 sm:m-0">
      {components.map(([label, Comp]) => (
        <div key={`${label}`}>
          <h1>{label}</h1>
          <div>
            {className}
            <Comp />
          </div>
        </div>
      ))}
      {/* <div style={{ height: "50rem" }} /> */}
    </div>
  );
}

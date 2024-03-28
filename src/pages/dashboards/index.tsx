import React from "react";

import Dashboards from "./Dashboard";
import GlobalPagesLayouts from "../GlobalPagesLayouts";

function DashboardPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Dashboard">
        <Dashboards className="bg-red-500" />
      </GlobalPagesLayouts>
    </div>
  );
}

export default DashboardPage;

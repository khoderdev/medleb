import React from "react";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
import Dashboards from "./Dashboard";

function DashboardPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Dashboard">
        <Dashboards className={`bg-red-500`} />
      </GlobalPagesLayouts>
    </div>
  );
}

export default DashboardPage;

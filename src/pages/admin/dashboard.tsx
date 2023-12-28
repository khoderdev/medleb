import React from "react";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
import Dashboard from "../../components/Dashboard";

function DashboardPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Dashboard">
        <Dashboard />
      </GlobalPagesLayouts>
    </div>
  );
}

export default DashboardPage;

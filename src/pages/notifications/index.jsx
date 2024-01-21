import React from "react";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
import Notifications from "./Notifications";

function NotificationsPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Notifications">
        <Notifications />
      </GlobalPagesLayouts>
    </div>
  );
}

export default NotificationsPage;

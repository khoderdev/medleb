import React from "react";

import Notifications from "./Notifications";
import GlobalPagesLayouts from "../GlobalPagesLayouts";

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

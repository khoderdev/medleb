import React from "react";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
import Profile from "./Profile";

function ProfilePage() {
  return (
    <div>
      <GlobalPagesLayouts title="Profile">
        <Profile />
      </GlobalPagesLayouts>
    </div>
  );
}

export default ProfilePage;

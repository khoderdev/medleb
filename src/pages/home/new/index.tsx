import SideNavbar from "./SideNavbar";
import SideNavbarRight from "./SideNavbarRight";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import React from "react";
import SidebarRight from "../../../dashboard/sidebar/SidebarRight";
import SidebarLeft from "../../../dashboard/sidebar/SidebarLeft";

export default function Home() {
  return (
    <div className="bg-white-bg dark:bg-black-bg">
      {/* <SidebarLeft /> */}
      <div className="flex-1 md:flex h-screen relative">
        {/* <Header /> */}
        <LeftColumn />
        <RightColumn />
      </div>
      {/* <SidebarRight /> */}
    </div>
  );
}

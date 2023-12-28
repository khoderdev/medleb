/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";

import { SidebarOffCanvas } from "./sidebar/sidebar2/SidebarOffCanvas";
import SidebarRight from "./sidebar/SidebarRight";
import SidebarLeft from "./sidebar/SidebarLeft";
import { DashboardProvider } from "./Provider";
import NavBottom from "../dashboard/sidebar/NavBottom";

interface LayoutProps {
  children: React.ReactNode;
}

// const style = {
//   container: "containerr bg-[#e5e7eb] dark:bg-[#1e1e1e]", // Adjusted container style

//   mainContainer: "mainContainer", // Adjusted mainContainer style

//   main: "w-full h-screen dark:bg-[#1e1e1e] overflow-y-scroll scrollbar-hide",

//   sidebarContainer: "sidebarContainer flex shadow-black",

//   OffCanvasSidebar: "OffCanvasSidebar Add your styles for OffCanvasSidebar here ",

//   sidebarContainerRight: "sidebarContainerRight absolute bg-white dark:bg-black dark:shadow-md top-0 right-0 hidden md:flex shadow-black z-10", // Adjusted style
// };

const style = {
  container: "bg-[#e5e7eb] dark:bg-[#1e1e1e] flex w-full ",

  mainContainer: "flex flex-col h-[100svh] w-full ",

  main: "h-[100svh] w-full overflow-auto ",

  sidebarContainer: "flex h-[100svh] shadow-black",

  OffCanvasSidebar: "flex md:hidden z-50",

  sidebarContainerLeft: "hidden flex h-[100svh] md:block shadow-black z-10",

  sidebarContainerRight:
    "hidden md:flex h-screen shadow-black z-10",
};

export function DashboardLayout(props: LayoutProps) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className={style.sidebarContainerLeft}>
          <SidebarLeft />
        </div>

        <div className={style.OffCanvasSidebar}>
          <SidebarOffCanvas mobileOrientation="end" />
        </div>

        <div className={style.sidebarContainer}>
          <NavBottom />
        </div>

        <div className={style.mainContainer}>
          <main className={style.main}>{props.children}</main>
        </div>

        <div className={style.sidebarContainerRight}>
          <SidebarRight />
        </div>
      </div>
    </DashboardProvider>
  );
}

export default DashboardLayout;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";

import { SidebarOffCanvas } from "./sidebar/SidebarOffCanvas";
import SidebarRight from "./sidebar/SidebarRight";
import SidebarLeft from "./sidebar/SidebarLeft";
import { DashboardProvider } from "./Provider";
import NavBottom from "../dashboard/sidebar/NavBottom";

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  container: "flex w-full h-[100svh] bg-white-bg dark:bg-black-bg",

  mainContainer: "w-full sm:pl-[4em] sm:pr-[3em] absolute",

  main: "h-[100svh] w-full overflow-auto  ",

  NavBottomContainer: "flex sm:hidden",

  OffCanvasSidebar: "flex sm:hidden h-screen z-50",

  sidebarContainerLeft: "hidden absolute h-[100svh] sm:block z-50 w-auto",

  sidebarContainerRight:
    "hidden absolute h-[100svh] sm:block z-50 w-auto right-0 ",
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

        <div className={style.NavBottomContainer}>
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

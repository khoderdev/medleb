import React from 'react';

import { SidebarOffCanvas } from './sidebar/SidebarOffCanvas';
import SidebarRight from './sidebar/SidebarRight';
import SidebarLeft from './sidebar/SidebarLeft';
import NavBottom from './sidebar/NavBottom';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  container: 'flex w-full h-[100dvh] bg-white-contents dark:bg-black-bg overflow-x-hidden',

  // mainContainer: "w-full md:pl-52 pl-0 sm:pr-[2.6em] bg-red-500 flex-1 flex overflow-hidden",
  mainContainer: 'w-full md:pl-[5em] pl-0 sm:pr-[2.6em] flex-1 flex overflow-hidden',

  main: 'h-[100svh] w-full overflow-x-hidden',

  Header: 'flex z-40',

  NavBottomContainer: 'flex sm:hidden z-40',

  OffCanvasSidebar: 'flex md:hidden overflow-hidden h-[100dvh] z-50',

  sidebarContainerLeft: 'hidden absolute h-[100dvh] md:block z-50 w-auto',

  sidebarContainerRight: 'hidden absolute h-[100dvh] sm:block z-50 w-auto right-0',
};

export function DashboardLayout(props: LayoutProps) {
  return (
    // <DashboardProvider>
    <div className={style.container}>
      {/* <div className={style.Header}>
          <Header />
        </div> */}

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
    // </DashboardProvider>
  );
}

export default DashboardLayout;

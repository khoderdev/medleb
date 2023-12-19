/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import Dashboard from "../../components/Dashboard";
export default function DashboardPage() {
  return (
    <div className="items-center h-[100svh] flex flex-col py-4 px-4 ">
      <h1 className="text-4xl pb-4 text-[#259f83]">Dashboard</h1>
      <div className="content h-[37em] sm:w-full overflow-auto rounded-3xl bg-white p-0 text-center dark:bg-black sm:h-full sm:py-0 sm:pt-0">
        <div className="flex flex-col items-center justify-center ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable tailwindcss/no-custom-classname */
import { Inspection } from "../../components/Inspection";
export default function InspectionPage() {
  return (
    <div className="items-centerflex-wrap flex justify-center bg-gray-200 dark:bg-[#1e1e1e] px-4 py-10 pb-28 sm:pt-10 ">
      <div className=" md:pb-18 w-[100%] rounded-3xl pb-6 pt-10 dark:bg-black md:w-[93%] md:p-6 md:shadow-xl md:shadow-gray-400 dark:md:shadow-black ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#259f83]">Inspection</h1>
          <Inspection />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable tailwindcss/no-custom-classname */
import List from "./DrugCardsList";

export default function DrugListPage() {
  return (
    <div className="flex flex-wrap items-center justify-center px-4 py-6 pb-28 sm:pt-10 ">
      <h1 className="pb-4 text-4xl text-[#259f83]">Medications List</h1>
      <div className=" md:pb-18 w-[100%] rounded-3xl bg-[#e0e0e0] pb-6 pt-4 dark:bg-black md:w-[93%] md:p-6 md:shadow-xl md:shadow-gray-400 dark:md:shadow-black ">
        <div className="flex flex-col items-center justify-center">
          <List />
        </div>
      </div>
    </div>
  );
}

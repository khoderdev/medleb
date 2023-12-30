import Profile from "./Profile";

export default function ProfilePage() {
  return (
    <div className="items-center h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col px-4 py-10 ">
      <h1 className="text-3xl font-semibold mb-4 text-[#259f83]">
        Profile Settings
      </h1>
      <div className=" md:pb-18 w-[100%] rounded-3xl bg-white pb-6 bg-white-contents dark:bg-black-contents dark:text-gray-200  md:p-6 md:shadow-xl md:shadow-black-500 dark:shadow-black ">
        <div className="flex flex-col items-center justify-center">
          <Profile />
        </div>
      </div>
    </div>
  );
}

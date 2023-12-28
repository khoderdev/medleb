import Profile from "./Profile";

export default function ProfilePage() {
  return (
    <div className="items-center flex flex-col justify-center px-4 py-10 sm:pt-10 ">
      <h1 className="text-3xl font-semibold mb-4 text-[#259f83]">
        Profile Settings
      </h1>
      <div className=" md:pb-18 w-[100%] rounded-3xl bg-white pb-6 dark:bg-[#292929] dark:text-gray-100 md:w-[93%] md:p-6 md:shadow-xl md:shadow-black-500 dark:shadow-black ">
        <div className="flex flex-col items-center justify-center">
          <Profile />
        </div>
      </div>
    </div>
  );
}

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default function Home() {
  return (
    <div className="flex-1 md:flex w-full h-screen relative gap-4  bg-white-500 dark:bg-black-bg">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

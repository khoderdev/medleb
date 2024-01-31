
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default function Home() {
  return (
    <div className="flex-1 lg:flex w-full h-screen relative gap-4 bg-white-bg dark:bg-black-bg">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import emil2 from "../images/emil2.png";

export default function Home() {
  return (
    <div>
      <div className="image-container flex w-full flex-col items-center justify-center p-6 sm:h-screen sm:p-0">
        <img
          className="bitar-image max-h-full max-w-full object-cover"
          src={emil2}
          alt="Emil"
        />
      </div>
    </div>
  );
}



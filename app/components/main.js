import React from "react";
import TextType from "./TextType";
import Link from "next/link";

const Main = () => {
  return (
    <div className="mt-[3vh]">
      <div className="flex flex-col items-center justify-center gap-[35px]">
        <div className="flex items-center justify-center mt-24">
          <TextType
            text={["GET ME A CHAI", "MODI'S SPECIAL", "GRAB YOUR'S NOW"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-5xl"
            loop={false}
          />
          <img src="/coffee.gif" alt="A cup of coffee" width={80} />
        </div>
        <div>
          <p className="text-[20px]">
            A Crowdfunding platform for creaters. Get funded by your fans and
            followers. Start Now!
          </p>
        </div>
        <div className="flex  gap-16">
          <button className="cursor-pointer px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-blue-600 hover:to-purple-700">
            <Link href="/dashboard">  Start Here</Link>
          </button>
          {/* "Read More" button with a similar style but a different color gradient */}
          <button className="cursor-pointer px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-red-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-pink-600 hover:to-red-700">
            <Link href="/about">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

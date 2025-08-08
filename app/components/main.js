import React from "react";
import TextType from "./TextType";
import Link from "next/link";

const Main = () => {
  return (
    <div className="mt-[3vh] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px]">
        <div className="flex flex-col sm:flex-row items-center justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 gap-4 sm:gap-0">
          <TextType
            text={["GET ME A CHAI", "MODI'S SPECIAL", "GRAB YOUR'S NOW"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-left"
            loop={false}
          />
          <img 
            src="/coffee.gif" 
            alt="A cup of coffee" 
            className="w-12 sm:w-16 md:w-18 lg:w-20"
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-center px-4 sm:px-0">
            A Crowdfunding platform for creaters. Get funded by your fans and
            followers. Start Now!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-md sm:max-w-none justify-center">
          <button className="cursor-pointer px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-blue-600 hover:to-purple-700 text-sm sm:text-base w-full sm:w-auto">
            <Link href="/dashboard">Start Here</Link>
          </button>
          {/* "Read More" button with a similar style but a different color gradient */}
          <button className="cursor-pointer px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-red-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-pink-600 hover:to-red-700 text-sm sm:text-base w-full sm:w-auto">
            <Link href="/about">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
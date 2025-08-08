import React from "react";

const Main_1 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col justify-center items-center mt-12 sm:mt-14 md:mt-16 lg:mt-18 gap-8 sm:gap-10 md:gap-12 lg:gap-14 max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center px-2">
          Your fans can buy you a chai
        </h1>

        <ul className="flex list-none gap-6 sm:gap-8 md:gap-16 lg:gap-20 xl:gap-40 justify-center items-center flex-wrap w-full">
          <li className="flex flex-col gap-2 sm:gap-3 items-center justify-center text-center w-full sm:w-auto max-w-xs">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/support.gif" 
                alt="Coffee cup animation" 
                className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-[120px]"
              />
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium">Fund Yourself</h1>
              <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0">
                Your fans are available for you to fund
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-2 sm:gap-3 items-center justify-center text-center w-full sm:w-auto max-w-xs">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/dollar.gif" 
                alt="Coffee cup animation" 
                className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-[120px]"
              />
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium">Earn Rewards</h1>
              <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0">
                Get rewards for your hard work
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-2 sm:gap-3 items-center justify-center text-center w-full sm:w-auto max-w-xs">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/audiences.gif" 
                alt="Coffee cup animation" 
                className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-[120px]"
              />
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium">Support Creators</h1>
              <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0">
                Support your favorite creators easily
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main_1;
import React from "react";

const Main_1 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col justify-center items-center mt-18 gap-14">
        <h1 className="text-3xl font-semibold">Your fans can buy you a chai</h1>

        <ul className="flex list-none gap-40 justify-center items-center flex-wrap">
          <li className="flex flex-col gap-3 items-center justify-center text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/support.gif" alt="Coffee cup animation" width={120} />
              <h1 className="text-2xl font-medium">Fund Yourself</h1>
              <p className="text-gray-400">Your fans are available for you to fund</p>
            </div>
          </li>
          <li className="flex flex-col gap-3 items-center justify-center text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/dollar.gif" alt="Coffee cup animation" width={120} />
              <h1 className="text-2xl font-medium">Earn Rewards</h1>
              <p className="text-gray-400">Get rewards for your hard work</p>
            </div>
          </li>
          <li className="flex flex-col gap-3 items-center justify-center text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/audiences.gif" alt="Coffee cup animation" width={120} />
              <h1 className="text-2xl font-medium">Support Creators</h1>
              <p className="text-gray-400">Support your favorite creators easily</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main_1;

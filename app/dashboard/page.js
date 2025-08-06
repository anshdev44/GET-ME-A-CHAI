import React from "react";

const Dash = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-md p-8 rounded-xl border border-white/20 shadow-lg  backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          User Info
        </h2>
        <ul className="space-y-4">
          <li className="flex flex-col">
            <label htmlFor="name-1" className="text-white mb-1">Name Please</label>
            <input
              type="text"
              id="name-1"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
             <li className="flex flex-col">
            <label htmlFor="name-1" className="text-white mb-1">Email</label>
            <input
              type="text"
              id="name-1"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
          
          <li className="flex flex-col">
            <label htmlFor="name-2" className="text-white mb-1">Description Needed</label>
            <input
              type="text"
              id="name-2"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="name-3" className="text-white mb-1">Profile Pic Link</label>
            <input
              type="text"
              id="name-3"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="name-4" className="text-white mb-1">Cover Piv Link</label>
            <input
              type="text"
              id="name-4"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="name-4" className="text-white mb-1">Razorpay Id</label>
            <input
              type="text"
              id="name-4"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="name-4" className="text-white mb-1">Razorpay add</label>
            <input
              type="text"
              id="name-4"
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
        </ul>
        <button className="cursor-pointer mt-6 w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Dash;

"use client"
import React from "react";
import { useSession,signIn,signOut } from "next-auth/react";
import Github from "next-auth/providers/github";

const SocialLoginButtons = () => {
  return (
<div className="flex flex-col gap-4 mt-[90px] items-center justify-center p-6 min-h-[51vh]">
  {/* Google Button */}
  <button className="cursor-pointer w-full max-w-md flex items-center justify-center bg-white border border-gray-300 rounded-xl shadow px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
    <svg className="h-6 w-6 mr-4" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.1 0 5.9 1.1 8.1 3.2l6-6C34.7 2.3 29.7 0 24 0 14.6 0 6.6 5.8 2.7 14.2l7.3 5.7C12 12.9 17.5 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.4-.1-2.7-.4-4H24v7.6h12.4c-.5 2.9-2.1 5.3-4.4 6.9l7 5.4c4.1-3.8 6.5-9.4 6.5-16z" />
      <path fill="#FBBC05" d="M10 28.2c-1.2-2-1.9-4.3-1.9-6.7s.7-4.7 1.9-6.7L2.7 9.2C.9 12.6 0 16.2 0 20c0 3.8.9 7.4 2.7 10.8l7.3-5.6z" />
      <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.8l-7-5.4c-2 1.4-4.7 2.2-9 2.2-6.5 0-12-4.3-14-10.1l-7.3 5.6C6.6 42.2 14.6 48 24 48z" />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
    <span className="text-lg">Continue with Google</span>
  </button>

  {/* GitHub Button */}
  <button onClick={()=>{signIn("github")}} className="cursor-pointer w-full max-w-md flex items-center justify-center bg-black border border-black rounded-xl shadow px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
    <svg className="h-6 w-6 mr-4" fill="white" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.01-.02-1.97-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.77 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.09 11.09 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.64 1.57.24 2.73.12 3.02.74.8 1.19 1.82 1.19 3.07 0 4.4-2.7 5.36-5.26 5.65.42.36.8 1.08.8 2.18 0 1.57-.02 2.83-.02 3.22 0 .31.2.68.8.56C20.7 21.4 24 17.09 24 12 24 5.73 18.27.5 12 .5z" />
    </svg>
    <span className="text-lg">Continue with GitHub</span>
  </button>

  {/* Facebook Button */}
  <button className="cursor-pointer w-full max-w-md flex items-center justify-center bg-blue-600 border border-blue-700 rounded-xl shadow px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
    <svg className="h-6 w-6 mr-4" fill="white" viewBox="0 0 24 24">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z" />
    </svg>
    <span className="text-lg">Continue with Facebook</span>
  </button>
</div>

  );
};

export default SocialLoginButtons;

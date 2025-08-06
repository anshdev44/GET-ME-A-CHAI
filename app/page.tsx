"use client"
import Image from "next/image";
import Main from "./components/main"
import Main_1 from "./components/main-1"

export default function Home() {
  return (
   <div className="flex flex-col">
    <Main/>
    <div className="w-screen bg-white h-1 mt-19"></div>
    <Main_1/>
   </div>
  );
}

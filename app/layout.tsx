import type { Metadata } from "next";
import "./globals.css";
import NAV from "./components/nav";
import Galaxy from "./Galaxy"; 
import SessionWrapper from "./sessionwrapper"
import Foot from "./components/foot";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black">
        <SessionWrapper>
        <div className="absolute inset-0 -z-10">
          <Galaxy />
        </div>
        <main className="relative z-0">
          <NAV />
          {children}
      
        </main>
        </SessionWrapper>
      </body>
    </html>
  );
}
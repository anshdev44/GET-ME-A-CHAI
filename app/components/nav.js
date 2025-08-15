"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useRouter, usePathname } from "next/navigation";

const NAV = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    if (session && pathname === "/login") {
      router.push("/dashboard");
    }
  }, [session, pathname, router]);

  async function handleLogout() {
    await signOut({ redirect: false });
    router.push("/login");
  }

  return (
    <div className="min-h-[90px] px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-full">
        {/* Logo and title */}
        <div className="flex items-center justify-center gap-2 flex-shrink-0">
          <img src="/coffee.gif" alt="chai" className="w-12 sm:w-16 md:w-[70px]" />
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold whitespace-nowrap">
            GET ME A CHAI
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {/* Navigation links */}
          <div className="flex gap-6">
            <Link href="/" className="text-lg font-semibold hover:underline cursor-pointer">
              HOME
            </Link>
            <Link href="/about" className="text-lg font-semibold hover:underline cursor-pointer">
              ABOUT
            </Link>
          </div>

          {/* User auth section */}
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <Dropdown
                  label={session.user.email}
                  dismissOnClick={false}
                  className="bg-black cursor-pointer z-30"
                >
                  <DropdownItem className="hover:bg-sky-700" onClick={() => router.push("/dashboard")}>
                    Dashboard
                  </DropdownItem>
                  {/* <DropdownItem className="hover:bg-sky-700">Earnings</DropdownItem> */}
                  <DropdownItem className="hover:bg-sky-700">
                    <a href={`/${session.user.name}`}>Your Page</a>
                  </DropdownItem>
                </Dropdown>

                <button
                  onClick={handleLogout}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                <Link href="/login">LOGIN/SIGNUP</Link>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
          {/* Navigation links */}
          <div className="flex flex-col space-y-3 " >
            <Link 
              href="/" 
              className="text-lg font-semibold hover:underline cursor-pointer block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-lg font-semibold hover:underline cursor-pointer block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
          </div>

          {/* User auth section */}
          <div className="pt-4 border-t border-gray-200">
            {session ? (
              <div className="space-y-4">
                {/* Mobile user menu items */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-medium">{session.user.email}</p>
                  <button
                    onClick={() => {
                      router.push("/dashboard");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded"
                  >
                    Dashboard
                  </button>
                  <button className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
                    Earnings
                  </button>
                  <a 
                    href={`/${session.user.name}`}
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Your Page
                  </a>
                </div>

                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/login">LOGIN/SIGNUP</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAV;
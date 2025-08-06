"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useRouter, usePathname } from "next/navigation";

const NAV = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  
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
    <div className="min-h-[90px]">
      <div className="flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex items-center justify-center gap-2">
          <img src="/coffee.gif" alt="chai" width={70} />
          <h1 className="text-3xl font-extrabold">GET ME A CHAI</h1>
        </div>

        {/* Navigation links */}
        <div className="flex gap-[20px]">
          <Link href="/" className="text-lg font-semibold hover:underline cursor-pointer">
            HOME
          </Link>
          <Link href="/about" className="text-lg font-semibold hover:underline cursor-pointer">
            ABOUT
          </Link>
        </div>

        {/* User auth section */}
        <div className="flex items-center gap-[20px]">
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
                <DropdownItem className="hover:bg-sky-700">Earnings</DropdownItem>
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
    </div>
  );
};

export default NAV;

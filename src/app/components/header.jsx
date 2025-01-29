"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="bg-blue-100">
      <nav className="flex items-center justify-between py-5 px-14">
        <div>
          <h1 className="text-blue-700 text-2xl font-bold ">
            <Link href="/">Thrive sphere</Link>
          </h1>
        </div>
        <ul className="flex items-center">
          <Link
            href="/"
            currentpath={pathName}
            className="px-10 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            currentpath={pathName}
            className="px-10 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            About
          </Link>
          <Link
            href="/pages/courses"
            currentpath={pathName}
            className="px-10 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Courses
          </Link>
          <Link
            href="/pages/community"
            currentpath={pathName}
            className="px-10 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Community
          </Link>
        </ul>
        <Link
          href="/pages/auth/signup"
          className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer duration-300 rounded-full px-4 py-2"
        >
          Signup
        </Link>
      </nav>
    </div>
  );
};
export default Header;

// function Link({ href, currentpath, children }) {
//   const isActive = currentpath === href;

//   <li>
//   Link
//       href={href}
//       className={` ${isActive ? "text-blue-700" : "text-stone-400"}`}
//     Link>
//   </li>;
// }

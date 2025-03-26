"use client";
import Link from "next/link";
// import React from "react";
import { usePathname } from "next/navigation";

export const Header = ({ className }) => {
  const pathName = usePathname();

  const pathname = usePathname(); // ✅ Get the current route

  const isAboutPage = pathName === "/pages/about";
  const backgroundColor =
    pathname === "/"
      ? "bg-blue-50"
      : pathname.includes("/about")
      ? "bg-transparent "
      : pathname.includes("/courses")
      ? "bg-blue-50"
      : "bg-blue-50";

  return (
    <div
      className={`${backgroundColor} ${className} transition-colors duration-300`}
    >
      <nav className="flex items-center justify-between py-5 px-16">
        <div>
          <h1 className="text-blue-600 text-2xl font-bold ">
            <Link href="/">Thrive sphere</Link>
          </h1>
        </div>
        <ul className="flex items-center">
          <Link
            href="/"
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            // currentpath={pathName}
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
          >
            About
          </Link>
          <Link
            href="/pages/courses"
            // currentpath={pathName}
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/pages/community"
            // currentpath={pathName}
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
          >
            Community
          </Link>
        </ul>
        <Link
          href="/auth/signup"
          className="text-white bg-blue-900 hover:bg-blue-950 cursor-pointer duration-300 rounded-xl px-8 py-3"
        >
          Signup
        </Link>
      </nav>
    </div>
  );
};
export default Header;

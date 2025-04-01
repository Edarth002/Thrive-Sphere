"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Image from "next/image";

export const Header = ({ className }) => {
  const pathname = usePathname(); // ✅ Get the current route

  const isAboutPage = pathname === "/pages/about";
  const backgroundColor =
    pathname === "/"
      ? "bg-blue-50"
      : pathname.includes("/about")
      ? "bg-transparent "
      : pathname.includes("/courses")
      ? "bg-blue-50"
      : "bg-blue-50";

  const { user, logout } = useAuth();

  return (
    <div
      className={`${backgroundColor} ${className} transition-colors duration-300`}
    >
      <nav className="flex items-center justify-between py-5 px-16">
        <div>
          <h1 className="text-blue-600 text-2xl font-bold">
            <Link href="/">Thrive Sphere</Link>
          </h1>
        </div>
        <ul className="flex items-center">
          <Link
            href="/"
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
            // className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            // currentpath={pathName}
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
            // className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            About
          </Link>
          <Link
            href="/pages/courses"
            // currentpath={pathName}
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
            // className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Courses
          </Link>
          <Link
            href="/pages/community"
            // currentpath={pathName}
            className={`px-10 hover:text-blue-700 cursor-pointer duration-300 ${
              isAboutPage ? "text-white" : "text-stone-500"
            }`}
            // className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Community
          </Link>
          {user && (
            <Link
              href="/pages/dashboard"
              className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
            >
              Dashboard
            </Link>
          )}
        </ul>

        {user ? (
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/assets/avater.jpg"
                alt="Avater"
                width={50}
                height={50}
                className="w-10 h-10 rounded-full border border-blue-300 p-1"
              />
              <span className="font-medium text-blue-700">
                Hi, {user.username}
              </span>
            </Link>

            <button
              onClick={logout}
              className="text-white bg-red-500 hover:bg-red-600 cursor-pointer duration-300 rounded-xl px-6 py-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/auth/signup"
            className="text-white bg-blue-900 hover:bg-blue-950 cursor-pointer duration-300 rounded-xl px-8 py-3"
          >
            Signup
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";
import { HeadsetIcon } from "lucide-react";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-blue-50">
      <nav className="flex items-center justify-between py-5 px-16">
        <div>
          <h1 className="text-blue-600 text-2xl font-bold">
            <Link href="/">Thrive Sphere</Link>
          </h1>
        </div>
        <ul className="flex items-center">
          <Link
            href="/"
            className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            About
          </Link>
          <Link
            href="/pages/courses"
            className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Courses
          </Link>
          <Link
            href="/pages/community"
            className="px-6 text-stone-500 hover:text-blue-700 cursor-pointer duration-300"
          >
            Community
          </Link>
        </ul>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-text">
              <HeadsetIcon className="w-10 h-10 rounded-full border border-blue-300  p-2" />
              <span className="font-medium text-blue-700">{user.username}</span>
            </div>

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

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // using lucide for icons (optional)

export const Header = ({ className }) => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const isAboutPage = pathname === "/about";
  const backgroundColor =
    pathname === "/"
      ? "bg-blue-50"
      : pathname.includes("/about")
      ? "bg-transparent"
      : pathname.includes("/courses")
      ? "bg-blue-50"
      : "bg-blue-50";

  const navLinks = (
    <>
      <Link href="/" className="py-2 px-4 hover:text-blue-700">
        Home
      </Link>
      <Link href="/about" className="py-2 px-4 hover:text-blue-700">
        About
      </Link>
      <Link href="/courses" className="py-2 px-4 hover:text-blue-700">
        Courses
      </Link>
      <Link href="/community" className="py-2 px-4 hover:text-blue-700">
        Community
      </Link>
      {user && (
        <Link href="/dashboard" className="py-2 px-4 hover:text-blue-700">
          Dashboard
        </Link>
      )}
    </>
  );

  return (
    <div
      className={`${backgroundColor} ${className} transition-colors duration-300`}
    >
      <nav className="flex items-center justify-between py-5 px-6 md:px-16">
        <h1 className="text-blue-600 text-2xl font-bold">
          <Link href="/">Thrive Sphere</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center text-stone-500">
          {navLinks}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-stone-500"
              >
                <Image
                  src="/assets/avater.jpg"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full border border-blue-300 p-1"
                />
                <span className="font-medium">Hi, {user.username}</span>
              </Link>
              <button
                onClick={logout}
                className="text-white bg-red-500 hover:bg-red-600 rounded-xl px-6 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/signup"
              className="text-white bg-blue-900 hover:bg-blue-950 rounded-xl px-6 py-2"
            >
              Signup
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-blue-700 text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col p-5 space-y-4 text-stone-700">
          {navLinks}
          {user ? (
            <>
              <button
                onClick={logout}
                className="text-white bg-red-500 hover:bg-red-600 rounded-xl px-4 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/signup"
              className="text-white bg-blue-900 hover:bg-blue-950 rounded-xl px-4 py-2"
            >
              Signup
            </Link>
          )}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;

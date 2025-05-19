"use client";
import { useState } from "react";
import { Home, Book, User, Settings, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, href: "/" },
    { name: "Courses", icon: <Book size={20} />, href: "/courses" },
    { name: "Profile", icon: <User size={20} />, href: "/profile" },
    { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
    { name: "Logout", icon: <LogOut size={20} />, href: "/logout" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r z-40 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-64`}
      >
        <div className="p-4 border-b text-xl font-bold">My Dashboard</div>
        <nav className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-10 text-stone-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)} // close on click for mobile
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

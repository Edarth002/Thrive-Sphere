"use client";
import React from "react";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";

export const HeroBtn = () => {
  const { user } = useAuth();
  return (
    <div>
      <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white">
        {user ? (
          <Link href="/pages/courses">Courses</Link>
        ) : (
          <Link href="/auth/signup">Sign up</Link>
        )}
      </button>
    </div>
  );
};
export default HeroBtn;

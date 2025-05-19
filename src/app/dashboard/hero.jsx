"use client";
import React from "react";
import { useAuth } from "@/lib/context/AuthContext";
import Image from "next/image";
import Link from "next/link";

const HeroDashboard = () => {
  const { user } = useAuth();

  return (
    <section className="mt-20 px-4 sm:ml-64">
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl flex flex-col sm:flex-row justify-between items-center p-6">
        <div className="text-white mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold">Welcome {user.username}</h2>
          <p className="my-2">
            Education is like food to the brain, never stop learning
          </p>
          <Link href="/courses">
            <button className="bg-blue-500 border border-blue-400 shadow-lg hover:bg-blue-600 transition rounded-md p-3 mt-5">
              Browse Courses
            </button>
          </Link>
        </div>
        <Image
          src="/assets/dashboard.png"
          alt="Dashboard"
          width={500}
          height={500}
          className="w-40 sm:w-1/3 "
        />
      </div>

      <Image
        src="/assets/community.jpg"
        alt="Community"
        width={1500}
        height={1500}
        className="w-full h-48 sm:h-[38vh] object-cover mt-5 rounded-lg shadow-lg"
      />
    </section>
  );
};

export default HeroDashboard;

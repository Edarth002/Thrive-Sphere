import React from "react";
import { useAuth } from "@/lib/context/AuthContext";
import Image from "next/image";

export const HeroDashboard = () => {
  const { user } = useAuth();
  return (
    <div className=" mt-[4rem] ml-64 m-5 pt-2">
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl flex items-center justify-between">
        <div className="text-white p-10">
          <h2 className="text-2xl font-bold">Welcome {user.username}</h2>
          <p className="my-2">
            Education is like food to the brain, never stop learning
          </p>
          <button className="bg-blue-500 border border-blue-400 shadow-xl shadow-blue-900 hover:bg-blue-600 duration-500 hover:shadow-sm rounded-md p-3 my-5">
            Browse Courses
          </button>
        </div>
        <div className="w-1/4 justify-end">
          <Image
            src="/assets/dashboard.png"
            alt="Dashboard hero image"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;

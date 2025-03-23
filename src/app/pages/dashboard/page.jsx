"use client";
import React from "react";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Dashboard = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  //   useEffect(() => {
  //     if (!user) {
  //       router.push("/auth/login");
  //     }
  //   }, [user, router]);

  return (
    <div className="p-10">
      Current User:
      <div className="flex items-center space-x-5">
        <p>{user.username}</p>
        <p>{user.email}</p>
        <button
          className="bg-red-400 rounded-md text-white hover:bg-red-600 p-2"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

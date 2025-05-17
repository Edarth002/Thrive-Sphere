"use client";
import React from "react";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/app/components/header";
import HeroDashboard from "./hero";
import SideBar from "./sidebar";
import Inbox from "./inbox";
import Activecourses from "./activecourses";
import UserProgress from "./userprogress";

export const Dashboard = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="full-page-bg">
      <Header className="fixed-header" />
      <SideBar />
      <Inbox />
      <HeroDashboard />
      <Activecourses />
      {user && <UserProgress userId={user.id} />}
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useAuth } from "@/lib/context/AuthContext";

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      Current User: <span>{user.data}</span>
    </div>
  );
};

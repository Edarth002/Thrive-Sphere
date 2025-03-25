import React from "react";
import { useAuth } from "@/lib/context/AuthContext";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export const SideBar = () => {
  const { user } = useAuth();
  return (
    <div className="bg-white bg-opacity-70 backdrop-blur-sm fixed w-60 h-72 rounded-2xl p-7 border border-gray-300 mx-2 mt-5  flex-col flex space-y-5 text-sm">
      <h2 className="text-stone-700">
        Username: <span className="text-base  text-black">{user.username}</span>
      </h2>
      <p className="text-stone-700">
        Email: <span className="text-base text-black">{user.email}</span>
      </p>
      <p className="text-stone-700">
        Valid_User: <span className="text-base text-black">True</span>
      </p>
      <p className="text-stone-700">
        Date Joined:{" "}
        <span className="text-base text-black">
          {formatDate(user.createdAt)}
        </span>
      </p>
      <p className="text-stone-700">
        Courses Completed: <span className="text-base text-black">0</span>
      </p>
      <p className="text-stone-700">
        Active Courses: <span className="text-base text-black">0</span>
      </p>
    </div>
  );
};

export default SideBar;

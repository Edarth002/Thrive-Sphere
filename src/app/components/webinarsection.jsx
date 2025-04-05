// import React from "react";
import { useState } from "react";
import webinars from "../data/webinars";
import Image from "next/image";
import Link from "next/link";
import RegisterForWebinar from "./registerforwebinar";

export const Webinarsection = () => {
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");

  const handleOpenForm = (courseTitle) => {
    setSubject(courseTitle);
    setShowForm(true);
  };
  return (
    <div className="bg-blue-50 p-10">
      <h1 className="text-center text-4xl uppercase font-bold text-blue-600 my-10">
        Upcoming webinars for you
      </h1>
      <div className="flex items-center flex-wrap mx-auto justify-center">
        {webinars.map((allwebinars) => (
          <div
            key={allwebinars.id}
            className="border-stone-500 border p-5  rounded-sm relative h-[28rem] w-[calc(33.33%-1.25rem)] m-1"
          >
            <Image
              src={allwebinars.image}
              alt={allwebinars.name}
              width={300}
              height={300}
              className="h-48 object-cover w-full"
            />
            <p className="text-blue-600 font-semibold text-xl my-2">
              {allwebinars.name}
            </p>
            <div className="my-8 text-stone-500 flex space-x-3 items-center">
              <p>{allwebinars.date}</p>
              <p className="text-2xl">|</p>
              <p>{allwebinars.time}</p>
            </div>
            <button
              onClick={() => handleOpenForm(course.Title)}
              className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600
            px-8 py-3 text-white "
            >
              Enquire/Register
            </button>
          </div>
        ))}
      </div>
      {showForm && (
        <RegisterForWebinar
          subject={subject}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};
export default Webinarsection;

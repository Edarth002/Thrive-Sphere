// import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import RegisterForWebinar from "./registerforwebinar";
import { fetchWebinars } from "@/lib/fetchwebinars";

export const Webinarsection = () => {
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [webinars, setWebinars] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchWebinarsFunction() {
      setError("");

      try {
        const res = await fetchWebinars();
        console.log(res.data);

        setWebinars(res.data);
        return res.data;
      } catch (error) {
        console.error("Reason for error: ", error);
        setError(error);
      }
    }
    fetchWebinarsFunction();
  }, []);

  const handleOpenForm = (courseTitle) => {
    setSubject(courseTitle);
    setShowForm(true);
  };
  return (
    <div className="bg-blue-50 p-10">
      <h1 className="text-center text-4xl uppercase font-bold text-blue-600 my-10">
        Upcoming webinars for you
      </h1>
      {error && <p className="text-xl p-10 text-red-400">{error}</p>}
      <div className="flex items-center flex-wrap mx-auto justify-center">
        {webinars.map((allwebinars) => (
          <div
            key={allwebinars.id}
            className="border-stone-500 border p-5  rounded-sm relative h-[28rem] w-[calc(33.33%-1.25rem)] m-1"
          >
            <img
              src={`http://localhost:1337${
                allwebinars.thumbnail.formats.medium?.url ||
                allwebinars.thumbnail.url
              }`}
              alt={allwebinars.Title}
              className="h-48 object-cover w-full"
            />
            <p className="text-blue-600 font-semibold text-xl my-2">
              {allwebinars.Title}
            </p>
            <div className="my-8 text-stone-500 flex space-x-3 items-center">
              <p>{new Date(allwebinars.Date).toLocaleDateString()}</p>
              <p className="text-2xl">|</p>
              <p>
                {new Date(allwebinars.Date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <button
              onClick={() => handleOpenForm(allwebinars.Title)}
              className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600
            px-8 py-3 text-white "
            >
              Register
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

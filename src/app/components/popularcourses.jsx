"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import courses from "../data/courses";

export const PopularCourses = () => {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const Courses = courses.filter((course) => course.category === "popular");
    setPopularCourses(Courses);
  }, []);

  return (
    <div className="bg-white px-4 md:px-10 py-20">
      <h1 className="text-center text-stone-400 text-sm mb-2">Our courses</h1>
      <p className="text-blue-600 text-3xl text-center font-bold mb-10">
        Browse our popular courses
      </p>
      <div className="flex flex-wrap justify-center gap-8 mx-auto w-full">
        {popularCourses.map((popularcourse) => (
          <div
            key={popularcourse.id}
            className="flex flex-col cursor-pointer mx-2 md:mx-5 w-full max-w-xs md:w-60"
          >
            <Image
              src={popularcourse.image}
              width={1000}
              height={1000}
              alt={popularcourse.name}
              className="shadow-lg shadow-stone-900 rounded-lg cursor-pointer w-full h-60 md:h-60 hover:scale-105 duration-300 object-cover"
            />
            <p className="text-stone-700 mt-5 font-bold text-center md:text-left">
              {popularcourse.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;

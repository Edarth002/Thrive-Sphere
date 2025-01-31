"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import courses from "../data/courses";

export const PopularCoursesSection = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    const Courses = courses.filter((course) => course.category === "popular");
    setPopularCourses(Courses);
  }, []);
  return (
    <div className="bg-white px-10 py-20">
      <h1 className="text-center text-stone-400 text-sm mb-2">Our courses</h1>
      <p className="text-blue-600 text-3xl text-center font-bold mb-10">
        Browse our popular courses
      </p>
      <div className="flex items-center mx-auto w-full justify-center">
        {popularCourses.map((popularcourses) => (
          <div key={popularcourses.id}>
            <div className="flex flex-col cursor-pointer  mx-5">
              <Image
                src={popularcourses.image}
                width={1000}
                height={1000}
                alt={popularcourses.name}
                className="shadow-lg shadow-stone-900 rounded-lg cursor-pointer w-60 h-60 hover:scale-105 duration-300 object-cover"
              />
              <p className="text-stone-700 mt-5 font-bold">
                {popularcourses.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCoursesSection;

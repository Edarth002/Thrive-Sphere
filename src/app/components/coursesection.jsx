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
    <div className="bg-white p-10">
      <h1 className="text-center text-stone-400 text-sm my-2">Our courses</h1>
      <p className="text-blue-600 text-2xl text-center font-bold mb-10">
        Browse our popular courses
      </p>
      <div className="flex items-center mx-auto w-full justify-center">
        {popularCourses.map((popularcourses) => (
          <div key={popularcourses.id}>
            <div className="flex flex-col cursor-pointer  mx-5">
              <Image
                src={popularcourses.image}
                width={200}
                height={200}
                alt={popularcourses.name}
                className="shadow-lg shadow-stone-900 rounded-lg cursor-pointer w-60 h-60 hover:scale-105 duration-300"
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

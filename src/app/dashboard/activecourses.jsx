"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "../data/courses";

const ActiveCourses = () => {
  const [uniqueCourses, setUniqueCourses] = useState([]);

  useEffect(() => {
    setUniqueCourses(courses.filter((course) => course.category === "unique"));
  }, []);

  return (
    <section className="px-4 py-10 sm:ml-64">
      <h1 className="text-center text-stone-800 text-lg uppercase mb-5">
        Active Courses
      </h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {uniqueCourses.map((course) => (
          <div
            key={course.id}
            className="border border-stone-300 p-4 rounded-lg relative flex flex-col h-[28rem]"
          >
            <Image
              src={course.image}
              alt={course.name}
              width={300}
              height={300}
              className="h-48 w-full object-cover rounded"
            />
            <div className="flex justify-between my-3 text-sm">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/user.png"
                  alt="User"
                  width={20}
                  height={20}
                  className="invert bg-yellow-200 p-1 rounded-full"
                />
                <span>{course.users} Learners</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/clock.png"
                  alt="Clock"
                  width={20}
                  height={20}
                  className="invert bg-yellow-200 p-1 rounded-full"
                />
                <span>{course.duration}</span>
              </div>
            </div>
            <h2 className="text-blue-600 text-lg font-semibold mt-auto mb-2">
              {course.name}
            </h2>
            <div>
              <p>{course.tutor}</p>
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <span>{course.rating}</span>
                <Image
                  src="/assets/star.png"
                  alt="Star"
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex">
              <Link href="/" className="w-1/2 text-center border-t p-2 text-sm">
                View Course
              </Link>
              <Link href="/" className="w-1/2 text-center border-t p-2 text-sm">
                Start Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveCourses;

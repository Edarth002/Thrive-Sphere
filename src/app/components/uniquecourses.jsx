"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "../data/courses";

export const UniqueCourses = () => {
  const [uniqueCourses, setUniqueCourses] = useState([]);

  useEffect(() => {
    const filteredCourses = courses.filter(
      (course) => course.category === "unique"
    );
    setUniqueCourses(filteredCourses);
  }, []);

  return (
    <div className="bg-white px-10 py-20">
      <h1 className="text-center text-stone-400 text-lg mb-2 uppercase">
        10+ unique courses{" "}
        <span className="font-normal bg-blue-700 text-white px-2 ml-1 text-sm py-1 rounded-xl">
          Unreleased
        </span>
      </h1>
      <p className="text-blue-600 text-3xl text-center font-bold my-2">
        You may also like more courses
      </p>
      <p className="text-center text-stone-400 text-sm">
        Take the next step towards achieving your personal and professional
        aspirations with thrive-sphere
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {uniqueCourses.map((course) => (
          <article
            key={course.id}
            className="border-stone-300 border-2 p-5 rounded-sm relative h-[28rem]"
          >
            <Image
              src={course.image}
              alt={course.name}
              width={300}
              height={300}
              className="h-48 object-cover w-full rounded"
            />
            <div className="flex space-x-5 my-3">
              <div className="flex space-x-3 items-center">
                <Image
                  src="/assets/user.png"
                  alt=""
                  aria-hidden="true"
                  width={28}
                  height={28}
                  className="p-1 rounded-full bg-yellow-200 invert w-7 h-7"
                />
                <p>{`${course.users} Learners`}</p>
              </div>
              <div className="flex space-x-3 items-center">
                <Image
                  src="/assets/clock.png"
                  alt=""
                  aria-hidden="true"
                  width={28}
                  height={28}
                  className="p-1 rounded-full bg-yellow-200 invert w-7 h-7"
                />
                <p>{course.duration}</p>
              </div>
            </div>
            <h2 className="text-blue-600 text-xl my-5">{course.name}</h2>
            <section className="flex items-center justify-between">
              <div>
                <p>{course.tutor}</p>
                <div className="flex space-x-2 items-center">
                  <p className="text-stone-400 my-1">{course.rating}</p>
                  <Image
                    src="/assets/star.png"
                    alt=""
                    aria-hidden="true"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
            </section>

            <div className="absolute bottom-0 flex items-center w-full left-0">
              <Link
                href={`/courses/${course.id}`}
                className="border p-1 text-stone-500 text-center w-1/2"
              >
                View Course
              </Link>
              <Link
                href={`/courses/${course.id}/start`}
                className="border p-1 text-stone-500 text-center w-1/2"
              >
                Start learning
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default UniqueCourses;

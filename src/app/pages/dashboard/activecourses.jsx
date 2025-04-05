"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "@/app/data/courses";

export const Activecourses = () => {
  const [uniqueCourses, setuniqueCourses] = useState([]);
  useEffect(() => {
    const Courses = courses.filter((course) => course.category === "unique");
    setuniqueCourses(Courses);
  }, []);
  return (
    <div className="ml-64">
      <h1 className="text-center text-stone-800 text-lg mb-2 uppercase">
        Active courses
      </h1>
      <div className="flex items-center mx-auto w-full justify-center my-5 bg-blue-50 pb-10 mb-0">
        {uniqueCourses.map((uniquecourses) => (
          <div
            key={uniquecourses.id}
            className="border-stone-300 border-2 p-5  rounded-sm relative h-[28rem] w-[calc(33.33%-1.25rem)] m-1"
          >
            <Image
              src={uniquecourses.image}
              alt={uniquecourses.name}
              width={300}
              height={300}
              className="h-48 object-cover w-full"
            />
            <div className=" flex space-x-5 my-3">
              <div className="flex space-x-3 items-center">
                <Image
                  src="/assets/user.png"
                  alt="user icon"
                  width={50}
                  height={50}
                  className="p-1 rounded-full bg-yellow-200 invert w-7 h-7"
                />
                <p className="">{`${uniquecourses.users} Learners`}</p>
              </div>
              <div className="flex space-x-3 items-center">
                <Image
                  src="/assets/clock.png"
                  alt="clock icon"
                  width={50}
                  height={50}
                  className="p-1 rounded-full bg-yellow-200 invert w-7 h-7"
                />
                <p className="">{uniquecourses.duration}</p>
              </div>
            </div>
            <h1 className="text-blue-600 text-xl my-5">{uniquecourses.name}</h1>
            <section className="flex items-center justify-between">
              <div>
                <p>{uniquecourses.tutor}</p>
                <div className="flex space-x-2 items-center">
                  <p className="text-stone-400 my-1">{uniquecourses.rating}</p>
                  <Image
                    src="/assets/star.png"
                    alt="Star icon"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <p className="">#{uniquecourses.price}</p>
            </section>

            <div className="absolute bottom-0 flex items-center w-full left-0">
              <Link
                href="/"
                className="border p-1 text-stone-500 text-center w-1/2"
              >
                View Course
              </Link>
              <Link
                href="/"
                className="border p-1 text-stone-500 text-center w-1/2"
              >
                Start learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activecourses;

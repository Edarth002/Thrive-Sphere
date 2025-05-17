"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchCourses } from "@/lib/fetchcourses";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCoursesFunction() {
      setError("");
      try {
        const res = await fetchCourses();
        setCourses(res.data);
      } catch (error) {
        console.error("Reason for error: ", error);
        setError("Failed to load courses.");
      }
    }
    fetchCoursesFunction();
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10">
      <p className="text-center text-stone-400 uppercase text-lg mt-3">
        Top class courses
      </p>
      <p className="text-blue-600 text-3xl text-center font-bold py-2">
        Explore our 20+ free online courses
      </p>
      <p className="text-stone-400 text-base text-center">
        Take the next step towards achieving your personal and professional
        aspirations with thrive-sphere
      </p>

      {error && <p className="text-xl p-10 text-red-400">{error}</p>}

      <div className="flex flex-wrap justify-center mt-10 gap-4">
        {courses.map((course) => (
          <div
            key={course.documentId}
            className="border border-stone-300 p-5 rounded-sm relative h-[28rem] w-full sm:w-[48%] lg:w-[32%]"
          >
            <img
              src={`http://localhost:1337${
                course.thumbnail.formats?.medium?.url || course.thumbnail.url
              }`}
              alt={course.Title}
              className="h-48 object-cover w-full"
            />

            <div className="flex flex-wrap space-x-5 my-3">
              <div className="flex space-x-2 items-center">
                <Image
                  src="/assets/user.png"
                  alt="user icon"
                  width={20}
                  height={20}
                  className="p-1 rounded-full bg-yellow-200 invert w-6 h-6"
                />
                <p className="font-semibold text-sm">
                  {course.learners}
                  <span className="font-light ml-1">Learners</span>
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <Image
                  src="/assets/clock.png"
                  alt="clock icon"
                  width={20}
                  height={20}
                  className="p-1 rounded-full bg-yellow-200 invert w-6 h-6"
                />
                <p className="font-semibold text-sm">
                  {course.duration}
                  <span className="font-light ml-1">mins</span>
                </p>
              </div>
            </div>

            <h1 className="text-blue-600 text-lg font-bold my-2">
              {course.Title}
            </h1>
            <p className="text-sm mb-1">{course.tutor}</p>
            <div className="flex space-x-2 items-center text-sm">
              <p className="text-stone-400">{course.learners}</p>
              <Image
                src="/assets/star.png"
                alt="Star icon"
                width={15}
                height={15}
              />
            </div>

            <div className="absolute bottom-4 flex items-center w-full left-0 px-5 gap-2">
              <Link
                href={`/courses/${course.documentId}`}
                className="border p-2 text-center text-xs w-1/2 text-stone-600"
              >
                View Course
              </Link>
              <Link
                href={`/courses/${course.documentId}`}
                className="border p-2 text-center text-xs w-1/2 text-stone-600"
              >
                Start Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

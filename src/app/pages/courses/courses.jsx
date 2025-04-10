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
        console.log(res.data);

        setCourses(res.data);
        return res.data;
      } catch (error) {
        console.error("Reason for error: ", error);
        setError(error);
      }
    }
    fetchCoursesFunction();
  }, []);
  return (
    <div className=" py-16">
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
      <div className="flex items-start flex-wrap p-10 mx-auto justify-center w-full">
        {courses.map((allcourses) => (
          <div
            key={allcourses.documentId}
            className="border-stone-300 border-2 p-5  rounded-sm relative h-[28rem] w-[calc(33.33%-1.25rem)] m-1"
          >
            <img
              src={`http://localhost:1337${
                allcourses.thumbnail.formats.medium?.url ||
                allcourses.thumbnail.url
              }`}
              alt={allcourses.Title}
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
                <p className="font-semibold">
                  {`${allcourses.learners}`}
                  <span className="font-light ml-1">Learners</span>
                </p>
              </div>
              <div className="flex space-x-3 items-center">
                <Image
                  src="/assets/clock.png"
                  alt="clock icon"
                  width={50}
                  height={50}
                  className="p-1 rounded-full bg-yellow-200 invert w-7 h-7"
                />
                <p className="font-semibold flex">
                  {allcourses.duration}{" "}
                  <span className="font-light ml-1">mins</span>
                </p>
              </div>
            </div>
            <h1 className="text-blue-600 text-xl my-5">{allcourses.Title}</h1>
            <p>{allcourses.tutor}</p>
            <div className="flex space-x-2 items-center">
              <p className="text-stone-400 my-1">{allcourses.learners}</p>
              <Image
                src="/assets/star.png"
                alt="Star icon"
                width={15}
                height={15}
              />
            </div>

            <div className="absolute bottom-0 flex items-center w-full left-0">
              <Link
                href={`/courses/${allcourses.id}`}
                className="border p-1 text-stone-500 text-center w-1/2"
              >
                View Course
              </Link>
              <Link
                href={`/courses/${allcourses.id}`}
                className="border p-1 text-stone-500 text-center w-1/2"
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

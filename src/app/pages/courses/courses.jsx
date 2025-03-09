// import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "@/app/data/courses";

export const Courses = () => {
  return (
    <div className=" py-16">
      <p className="text-center text-stone-400 uppercase text-sm mt-3">
        Top class courses
      </p>
      <p className="text-blue-600 text-3xl text-center font-bold py-2">
        Explore our 20+ free online courses
      </p>
      <p className="text-stone-400 text-sm text-center">
        Take the next step towards achieving your personal and professional
        aspirations with thrive-sphere
      </p>

      <div className="flex items-center flex-wrap p-10 mx-auto justify-center">
        {courses.map((allcourses) => (
          <div
            key={allcourses.id}
            className="border-stone-300 border-2 p-5  rounded-sm relative h-[28rem] w-[calc(33.33%-1.25rem)] m-1"
          >
            <Image
              src={allcourses.image}
              alt={allcourses.name}
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
                <p className="font-semibold">{`${allcourses.users} Learners`}</p>
              </div>
              <div className="flex space-x-3 items-center">
                <Image
                  src="/assets/clock.png"
                  alt="clock icon"
                  width={50}
                  height={50}
                  className="p-1 rounded-full bg-yellow-200 invert w-7 h-7"
                />
                <p className="font-semibold">{allcourses.duration}</p>
              </div>
            </div>
            <h1 className="text-blue-600 text-xl my-5">{allcourses.name}</h1>
            <p>{allcourses.tutor}</p>
            <div className="flex space-x-2 items-center">
              <p className="text-stone-400 my-1">{allcourses.rating}</p>
              <Image
                src="/assets/star.png"
                alt="Star icon"
                width={15}
                height={15}
              />
            </div>

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

export default Courses;

import Header from "@/app/components/header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Courses from "./courses";
import UniqueCourses from "@/app/components/uniquecourses";
import Webinarsection from "@/app/components/webinarsection";
import Footer from "@/app/components/footer";

export const CoursesPage = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center w-full h-[70vh] bg-blue-900 justify-center mx-auto space-x-20">
        <Image
          src="/assets/hero.png"
          width={1000}
          height={1000}
          alt="hero Image"
          className="w-72 h-72 object-cover rounded-full"
        />
        <section className="py-28 px-16 justify-center w-1/2 text-white">
          <h1 className="text-4xl font-semibold">
            Unleash your potentials with our development programs
          </h1>
          <p className="my-7 font-light w-8/12">
            Explore a well curated section of courses, designed to help you
            build self awareness, refine your skills
          </p>
          <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white">
            <Link href="/pages/auth/signup">Explore all courses</Link>
          </button>
        </section>
      </div>

      <Courses />

      <section className="bg-blue-50 px-10 py-20">
        <p className="text-center text-stone-400 text-sm mt-3">Confused?</p>
        <p className="text-blue-600 text-3xl text-center font-bold py-2">
          Let us find the right course for you
        </p>
        <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white justify-center mx-auto flex my-5">
          <Link href="/pages/auth/signup">Get Recommendations</Link>
        </button>
      </section>

      <UniqueCourses />

      <Webinarsection />

      <Footer />
    </div>
  );
};

export default CoursesPage;

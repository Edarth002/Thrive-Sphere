"use client";
import Header from "@/app/components/header";
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

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full bg-blue-900 justify-center mx-auto px-6 md:px-0 py-16 space-y-10 md:space-y-0 md:space-x-20">
        <Image
          src="/assets/hero.png"
          width={1000}
          height={1000}
          alt="hero Image"
          className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full"
        />
        <section className="text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Unleash your potentials with our development programs
          </h1>
          <p className="my-6 font-light mx-auto md:mx-0 md:w-8/12">
            Explore a well curated section of courses, designed to help you
            build self awareness, refine your skills
          </p>
          <Link href="/auth/signup">
            <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white">
              Explore all courses
            </button>
          </Link>
        </section>
      </div>

      <Courses />

      {/* Recommendation Section */}
      <section className="bg-blue-50 px-6 md:px-10 py-20 text-center">
        <p className="text-stone-400 text-lg mt-3">Confused?</p>
        <p className="text-blue-600 text-2xl md:text-3xl font-bold py-2">
          Let us find the right course for you
        </p>
        <Link href="/auth/signup">
          <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white mt-5">
            Get Recommendations
          </button>
        </Link>
      </section>

      <UniqueCourses />

      <Webinarsection />

      <Footer />
    </div>
  );
};

export default CoursesPage;

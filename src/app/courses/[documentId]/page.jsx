"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { use } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import { ArrowRightIcon } from "lucide-react";
import Testimonials from "@/app/components/testimonials";
import Footer from "@/app/components/footer";

export default function CoursePage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = use(params);

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);

  useEffect(() => {
    async function fetchData() {
      const courseRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}`
      );
      const courseData = await courseRes.json();

      const thumbnailRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/${courseData.data.id}?populate=thumbnail`
      );
      const thumbnailData = await thumbnailRes.json();

      setCourse({
        ...courseData.data,
        thumbnailUrl: thumbnailData.data?.thumbnail?.url
          ? `http://localhost:1337${thumbnailData.data.thumbnail.url}`
          : "/default-course.jpg",
      });

      const lessonsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][documentId][$eq]=${documentId}`
      );
      setLessons((await lessonsRes.json()).data);
    }

    if (user) fetchData();
  }, []);

  if (!course) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="w-full">
      <Header />

      <section className="bg-blue-900 text-white px-10 py-20 h-[60vh]">
        <h1 className="text-6xl font-bold my-6 w-3/5">{course.Title}</h1>
        <p className="text-gray-100 mb-6 text-sm">
          Instructors: {course.tutor}
        </p>
        <button className="bg-yellow-500 p-3 rounded-md text-xs">
          Enroll Now
        </button>
      </section>

      <section className="p-10">
        <h3 className="text-blue-800 text-lg font-semibold">About</h3>
        <div className="bg-black w-full h-[1px] my-5"></div>
        <p className="text-gray-800 tracking-wider">{course.description}</p>
      </section>

      <section className="p-10">
        <h3 className="text-blue-800 text-lg font-semibold">Modules</h3>
        <div className="bg-black w-full h-[1px] my-5"></div>
        <h4 className="font-semibold my-2">
          There are {course.numberoflessons} modules in this course
        </h4>
        <p className="text-gray-800 tracking-wider">
          Feel free to engage. Whether you are a beginner or looking to refresh
          your memory on {course.Title}, the following modules have been
          designed to fit just that.
        </p>
      </section>

      <div className="flex items-center justify-start">
        <div className="p-5 rounded-xl border-[1px] mx-10 my-5 w-2/3">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="p-4 border-b-[1px]0">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1 items-start">
                  <h3 className="text-lg font-semibold">{lesson.Name}</h3>
                  <p className="text-gray-600">{lesson.overview}</p>
                </div>
                <Link
                  href={`/lessons/${lesson.documentId}`}
                  className="flex items-center gap-4"
                >
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />

      <section className="flex items-center justify-between p-10">
        <Image
          src="/assets/courseera.png"
          width={1000}
          height={1000}
          alt="Courseera icon"
          className="w-40 object-cover"
        />

        <Image
          src="/assets/udemy.png"
          width={1000}
          height={1000}
          alt="Udemy icon"
          className="w-40 object-cover"
        />

        <Image
          src="/assets/edx.png"
          width={1000}
          height={1000}
          alt="Edx icon"
          className="w-20 object-cover"
        />

        <Image
          src="/assets/linkedin.png"
          width={1000}
          height={1000}
          alt="Linkedin icon"
          className="w-20 object-cover"
        />

        <Image
          src="/assets/skillshare.png"
          width={1000}
          height={1000}
          alt="Skillshare icon"
          className="w-40 object-cover"
        />
      </section>

      <Footer />
    </div>
  );
}

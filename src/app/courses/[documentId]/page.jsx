"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { use } from "react";
import Link from "next/link";
import Header from "@/app/components/header";

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
    <div className="w-full h-screen bg-blue-50">
      <Header />

      <section className="bg-blue-600 text-white px-10 py-20">
        <h1 className="text-5xl font-bold my-6">{course.Title}</h1>
        <p className="text-gray-100 mb-6 text-lg w-3/5">{course.description}</p>
      </section>

      <div className="space-y-4 p-10`">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Lessons</h2>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="p-4 border rounded-lg hover:bg-gray-50"
          >
            <Link
              href={`/lessons/${lesson.documentId}`}
              className="flex items-center gap-4"
            >
              {/* Lesson Thumbnail - same pattern as course */}
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  lesson.thumbnail?.formats?.url || lesson.thumbnail?.url
                }`}
                alt={lesson.Name}
                className="w-24 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-medium">{lesson.Name}</h3>
                <p className="text-gray-600 text-sm">{lesson.overview}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

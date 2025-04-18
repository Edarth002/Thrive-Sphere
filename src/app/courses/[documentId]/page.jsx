"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { use } from "react";
import Link from "next/link";

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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}?populate=thumbnail`
      );
      const courseData = await courseRes.json();
      setCourse(courseData.data);

      const lessonsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][documentId][$eq]=${documentId}`
      );
      setLessons((await lessonsRes.json()).data);
    }

    if (user) fetchData();
  }, []);

  if (!course) return null;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Dynamic image URL - using thumbnail.url */}
      <img
        src={`http://localhost:1337${course.thumbnail?.url}`}
        alt={course.Title}
        className="h-48 object-cover w-full"
      />

      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.Title}</h1>
      <p className="text-stone-600 mb-6">{course.description}</p>

      <h2 className="text-xl font-semibold text-stone-700 mb-3">Lessons:</h2>
      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="p-4 border rounded hover:bg-gray-50 transition"
          >
            <Link
              href={`/lessons/${lesson.documentId}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

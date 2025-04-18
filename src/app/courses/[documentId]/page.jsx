"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { use } from "react";
import Link from "next/link";

export default function CoursePage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = use(params); // Kept as you demanded

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);

  useEffect(() => {
    async function fetchCourseAndLessons() {
      // 1. EXACT Strapi v5 compatible fetch
      const courseRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}?populate[thumbnail]=*`
      );
      const courseData = await courseRes.json();

      // 2. PROPER data extraction for Strapi v5
      const rawCourse = courseData.data?.attributes;
      const thumbnailUrl = rawCourse?.thumbnail?.data?.attributes?.url;

      setCourse({
        ...rawCourse,
        thumbnailUrl: thumbnailUrl
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnailUrl}`
          : "/default.jpg",
      });

      // 3. Lessons fetch (unchanged from your original)
      const lessonsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][documentId][$eq]=${documentId}`
      );
      setLessons((await lessonsRes.json()).data);
    }

    if (user) fetchCourseAndLessons();
  }, []);

  if (!course) return <p className="p-10 text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* 4. SIMPLE img tag with guaranteed URL */}
      <img
        src={course.thumbnailUrl}
        alt={course.Title}
        className="h-48 object-cover w-full"
      />

      {/* REST OF YOUR ORIGINAL CODE - UNTOUCHED */}
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

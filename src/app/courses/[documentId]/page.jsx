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
      try {
        // 1. Fetch course with proper Strapi v5 population
        const courseRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}?populate[thumbnail][fields][0]=url`
        );
        const courseData = await courseRes.json();

        // 2. Handle Strapi v5 nested response structure
        const thumbnailUrl =
          courseData.data?.attributes?.thumbnail?.data?.attributes?.url;

        // 3. Create safe course object
        setCourse({
          ...courseData.data?.attributes,
          id: courseData.data?.id,
          thumbnailUrl: thumbnailUrl
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnailUrl}`
            : "/default-course.jpg",
        });

        // 4. Fetch lessons
        const lessonsRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][documentId][$eq]=${documentId}`
        );
        setLessons((await lessonsRes.json()).data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    if (user) fetchData();
  }, []);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <img
        src={course.thumbnailUrl}
        alt={course.Title}
        className="h-48 object-cover w-full"
        onError={(e) => {
          e.target.src = `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/R_1edd47b086.jfif`;
        }}
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

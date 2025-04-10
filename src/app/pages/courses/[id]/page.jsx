"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";

export default function CoursePage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { id } = params;
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  useEffect(() => {
    async function fetchCourseAndLessons() {
      try {
        const courseRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/${id}`
        );
        const courseJson = await courseRes.json();
        setCourse(courseJson.data);

        const lessonsRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][id][$eq]=${id}`
        );
        const lessonsJson = await lessonsRes.json();
        setLessons(lessonsJson.data);
      } catch (error) {
        console.error("Error loading course or lessons:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user) fetchCourseAndLessons();
  }, [id, user]);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!course)
    return <p className="p-10 text-center text-red-500">Course not found.</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.Title}</h1>
      <p className="text-stone-600 mb-6">{course.Description}</p>

      <h2 className="text-xl font-semibold text-stone-700 mb-3">Lessons:</h2>
      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li
            key={documentId}
            className="p-4 border rounded hover:bg-gray-50 transition"
          >
            <Link
              href={`/lessons/${lesson.attributes.slug}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

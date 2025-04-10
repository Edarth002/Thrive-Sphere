"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { use } from "react"; // Importing use()

export default function CoursePage({ params }) {
  const { user } = useAuth();
  const router = useRouter();

  // Unwrap the params using use() hook
  const { documentId } = use(params); // Unwrapping params here

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);

  useEffect(() => {
    async function fetchCourseAndLessons() {
      try {
        const courseRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}`
        );
        const courseJson = await courseRes.json();
        setCourse(courseJson.data);

        const lessonsRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][documentId][$eq]=${documentId}`
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
  }, [documentId, user]);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!course)
    return <p className="p-10 text-center text-red-500">Course not found.</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.Title}</h1>
      <p className="text-stone-600 mb-6">{course.description}</p>

      <h2 className="text-xl font-semibold text-stone-700 mb-3">Lessons:</h2>
      {/* <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
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
      </ul> */}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";

export default function CoursePage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = params; // Correct params destructuring

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);

  // Fixed dependency array
  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, [user, router]);

  // Proper data fetching with correct dependencies
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch course with proper Strapi v5 population
        const courseRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}?populate[thumbnail][fields][0]=url`
        );
        const courseData = await courseRes.json();

        // 2. Handle Strapi v5 response structure
        const thumbnailUrl =
          courseData.data?.attributes?.thumbnail?.data?.attributes?.url;

        // 3. Set course data with fallback
        setCourse({
          ...courseData.data?.attributes,
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
    };

    if (user) fetchData();
  }, [user, documentId]); // Correct dependencies

  if (!course) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Verified image display */}
      <img
        src={course.thumbnailUrl}
        alt={course.Title}
        className="h-48 object-cover w-full"
        onError={(e) => {
          e.target.src = `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/default-course.jpg`;
        }}
      />

      <h1 className="text-3xl font-bold text-blue-600 my-4">{course.Title}</h1>
      <p className="text-gray-600 mb-6">{course.description}</p>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Lessons</h2>
      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Link
              href={`/lessons/${lesson.attributes?.documentId || lesson.id}`}
              className="text-blue-600 hover:text-blue-800"
            >
              <h3 className="text-lg font-medium">{lesson.attributes?.Name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

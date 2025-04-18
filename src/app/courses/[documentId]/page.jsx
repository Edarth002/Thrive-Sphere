"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { use } from "react";

export default function CoursePage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = use(params);

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, [user, router]);

  useEffect(() => {
    async function fetchData() {
      try {
        // 1. Fetch course with thumbnail populated
        const courseRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/document/${documentId}?populate=thumbnail`
        );
        const courseData = await courseRes.json();

        // 2. DIRECT access to thumbnail data (no attributes nesting)
        const thumbnail = courseData.thumbnail || courseData.data?.thumbnail;

        // 3. Set image URL - using your confirmed working pattern
        setCourse({
          ...(courseData.data || courseData),
          thumbnailUrl: thumbnail?.formats?.medium?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnail.formats.medium.url}`
            : thumbnail?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnail.url}`
            : "/default-course.jpg",
        });

        // 4. Fetch lessons
        const lessonsRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[course][documentId][$eq]=${documentId}&populate=thumbnail`
        );
        setLessons((await lessonsRes.json()).data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    if (user) fetchData();
  }, [user, documentId]);

  if (!course) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Course Image - using your working pattern */}
      <img
        src={course.thumbnailUrl}
        alt={course.Title}
        className="h-48 object-cover w-full"
      />

      <h1 className="text-3xl font-bold text-blue-600 my-4">{course.Title}</h1>
      <p className="text-gray-600 mb-6">{course.description}</p>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Lessons</h2>
      <div className="space-y-4">
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
                  lesson.thumbnail?.formats?.small?.url || lesson.thumbnail?.url
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

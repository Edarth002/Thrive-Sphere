"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { use } from "react";

export default function LessonPage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = use(params);

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);

  useEffect(() => {
    async function fetchLesson() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[documentId][$eq]=${documentId}`
        );
        const json = await res.json();
        setLesson(json.data?.[0]);
      } catch (error) {
        console.error("Error loading lesson:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user) fetchLesson();
  }, []);

  if (loading)
    return <p className="p-10 text-center text-blue-600">Loading...</p>;
  if (!lesson)
    return <p className="p-10 text-center text-red-500">Lesson not found.</p>;

  const { Name, overview } = lesson;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Video Player */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4">{Name}</h1>
          {/* Video Placeholder */}
          <div className="relative w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-lg mb-6">
            <p className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
              Video will go here
            </p>
          </div>
        </div>

        {/* Right Column: Details and Overview */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Lesson Overview
          </h2>
          <div className="prose text-stone-700">
            <p>{overview}</p>
          </div>

          {/* Back to Courses */}
          <div className="mt-6">
            <Link
              href="/courses"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              &larr; Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

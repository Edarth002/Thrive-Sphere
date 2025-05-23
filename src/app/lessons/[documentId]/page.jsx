"use client";

import { strapi } from "@strapi/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { use } from "react";
import Header from "@/app/components/header";
// import HeroBtn from "@/app/components/herobtn";
import Footer from "@/app/components/footer";
import GoogleTranslate from "../../components/googletranslate";

//Sending data to manage user progress
async function trackLessonProgress({ userId, courseId, lessonId }) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        courseId,
        lessonId,
      }),
    });
  } catch (error) {
    console.error("Failed to track lesson progress:", error);
  }
}

const client = strapi({ baseURL: "http://localhost:1337/api" });

export default function LessonPage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = use(params);

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  //Using strapi client to fetch video url filtering based on documentId
  const [lessonVid, setLessonVid] = useState(null);

  //Tracks user
  useEffect(() => {
    if (user && lesson && lesson.id) {
      const courseId = lesson?.course?.id || null; // adjust if needed
      trackLessonProgress({
        userId: user.id,
        courseId,
        lessonId: lesson.id,
      });
    }
  }, []);

  useEffect(() => {
    const fetchLessonVid = async () => {
      try {
        const response = await client
          .collection("lessons")
          .findOne(documentId, {
            populate: ["video"],
          });
        console.log("What the hell is wrong here:", response);
        setLessonVid(response.data);
      } catch (error) {
        console.error("Error fetching course: ", error);
      }
    };

    if (user && documentId) {
      fetchLessonVid();
    }
  }, []);

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
    <div>
      <Header />
      <GoogleTranslate />

      <section className="p-10">
        <h1 className="text-3xl mb-5">Module: {lesson.Name}</h1>

        {/* Video url is found here */}
        {lessonVid?.video?.url ? (
          <video
            src={`http://localhost:1337${lessonVid?.video?.url}`}
            controls
            className="w-full h-screen flex justify-center mx-auto"
          />
        ) : (
          <p>Video not found</p>
        )}

        <div>
          <p className="text-white w-full text-left p-7 bg-blue-900 rounded-t-sm mt-5">
            Video Transcript
          </p>
          {lesson.transcript ? (
            <p className="p-7 w-full tracking-wider">{lesson.transcript}</p>
          ) : (
            <p className="bg-gray-200 text-black p-7 w-full rounded-b-sm tracking-wider">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam atque nostrum quam reiciendis obcaecati quae laborum cum
              eveniet qui? Praesentium iure qui voluptates quidem minima quia
              cum nostrum voluptate assumenda.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quibusdam atque nostrum quam
              reiciendis obcaecati quae laborum cum eveniet qui? Praesentium
              iure qui voluptates quidem minima quia cum nostrum voluptate
              assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam atque nostrum quam reiciendis obcaecati quae
              laborum cum eveniet qui? Praesentium iure qui voluptates quidem
              minima quia cum nostrum voluptate assumenda.Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quibusdam atque nostrum quam
              reiciendis obcaecati quae laborum cum eveniet qui? Praesentium
              iure qui voluptates quidem minima quia cum nostrum voluptate
              assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam atque nostrum quam reiciendis obcaecati quae
              laborum cum eveniet qui? Praesentium iure qui voluptates quidem
              minima quia cum nostrum voluptate assumenda.Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quibusdam atque nostrum quam
              reiciendis obcaecati quae laborum cum eveniet qui? Praesentium
              iure qui voluptates quidem minima quia cum nostrum voluptate
              assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam atque nostrum quam reiciendis obcaecati quae
              laborum cum eveniet qui? Praesentium iure qui voluptates quidem
              minima quia cum nostrum voluptate assumenda.Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quibusdam atque nostrum quam
              reiciendis obcaecati quae laborum cum eveniet qui? Praesentium
              iure qui voluptates quidem minima quia cum nostrum voluptate
              assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam atque nostrum quam reiciendis obcaecati quae
              laborum cum eveniet qui? Praesentium iure qui voluptates quidem
              minima quia cum nostrum voluptate assumenda.
            </p>
          )}
        </div>
      </section>

      <div className="p-10 mt-10">
        <p className="underline">Taught by</p>
        <p>{lesson.tutor}</p>
      </div>

      <section className="bg-gray-200 p-10">
        <p className="text-center font-bold text-xl">Any Questions?</p>
        <p className="text-center my-4">
          You can now ask your personal questions, send opinions or make
          recommendations
        </p>
        <div>
          <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white flex items-center mx-auto">
            {user ? (
              <Link href="/community">Send Mail</Link>
            ) : (
              <Link href="/auth/signup">Sign up</Link>
            )}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

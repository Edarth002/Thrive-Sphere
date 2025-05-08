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

//Using strapi client to fetch video url filtering based on documentId

const client = strapi({ baseURL: "http://localhost:1337/api" });

const getLesson = async (identifier) => {
  try {
    const lesson = await client.collection("lessons").findOne(identifier, {
      populate: ["videoUrl"],
    });
    return lesson;
  } catch (error) {
    console.error("Error fetching course: ", error);
    return null;
  }
};

export default async function LessonPage({ params }) {
  const { user } = useAuth();
  const router = useRouter();
  const { documentId } = use(params);

  const lessonVid = await getLesson(documentId);

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
    <div>
      <Header />

      <section className="p-10">
        <h1 className="text-3xl mb-5">Module: {lesson.Name}</h1>

        {/* Video url is found here */}
        {lessonVid?.videoUrl ? (
          <video src={lessonVid.videoUrl} controls />
        ) : (
          <p>Video not found</p>
        )}

        <div>
          <p className="text-white w-full text-left p-7 bg-blue-900 rounded-t-sm">
            Video Transcript
          </p>
          <p className="bg-gray-200 text-black p-7 w-full rounded-b-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            atque nostrum quam reiciendis obcaecati quae laborum cum eveniet
            qui? Praesentium iure qui voluptates quidem minima quia cum nostrum
            voluptate assumenda.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quibusdam atque nostrum quam reiciendis obcaecati
            quae laborum cum eveniet qui? Praesentium iure qui voluptates quidem
            minima quia cum nostrum voluptate assumenda.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quibusdam atque nostrum quam
            reiciendis obcaecati quae laborum cum eveniet qui? Praesentium iure
            qui voluptates quidem minima quia cum nostrum voluptate
            assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam atque nostrum quam reiciendis obcaecati quae laborum cum
            eveniet qui? Praesentium iure qui voluptates quidem minima quia cum
            nostrum voluptate assumenda.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quibusdam atque nostrum quam reiciendis obcaecati
            quae laborum cum eveniet qui? Praesentium iure qui voluptates quidem
            minima quia cum nostrum voluptate assumenda.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quibusdam atque nostrum quam
            reiciendis obcaecati quae laborum cum eveniet qui? Praesentium iure
            qui voluptates quidem minima quia cum nostrum voluptate
            assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam atque nostrum quam reiciendis obcaecati quae laborum cum
            eveniet qui? Praesentium iure qui voluptates quidem minima quia cum
            nostrum voluptate assumenda.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quibusdam atque nostrum quam reiciendis obcaecati
            quae laborum cum eveniet qui? Praesentium iure qui voluptates quidem
            minima quia cum nostrum voluptate assumenda.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quibusdam atque nostrum quam
            reiciendis obcaecati quae laborum cum eveniet qui? Praesentium iure
            qui voluptates quidem minima quia cum nostrum voluptate assumenda.
          </p>
        </div>
      </section>

      <div className="p-10 mt-10">
        <p className="underline">Taught by</p>
        <p>placeholder tutor</p>
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

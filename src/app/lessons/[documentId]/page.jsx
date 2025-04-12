import { notFound } from "next/navigation";

export default async function LessonPage({ params }) {
  const { documentId } = params;

  try {
    // Fetch lesson data without video
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/lessons?filters[documentId][$eq]=${documentId}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);

    const json = await res.json();
    const lesson = json.data?.[0];

    if (!lesson) return notFound();

    const { Name, overview } = lesson;

    return (
      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* YouTube-like layout */}
        <div className="space-y-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-black">{Name}</h1>

          {/* Video space (like YouTube, just leave empty for now) */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-lg">
            {/* Placeholder for the video */}
            <p className="text-center text-gray-500 pt-10">
              Video will go here
            </p>
          </div>

          {/* Lesson Overview */}
          <div className="text-stone-700 mt-4">
            <div className="prose max-w-none">
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("LessonPage fetch error:", error);
    return notFound();
  }
}

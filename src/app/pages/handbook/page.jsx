import Header from "@/app/components/header";
import Link from "next/link";

export default function Handbook() {
  const handbookSections = [
    {
      title: "How to Enroll in a Course",
      content:
        "Click on any course, then hit the 'Start Learning' button to enroll.",
    },
    {
      title: "Tracking Your Progress",
      content: "Each course dashboard shows completed modules and your score.",
    },
    {
      title: "Accessing Certificates",
      content:
        "Once completed, you'll find certificates under your profile > Achievements.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="pt-10 px-10 bg-blue-50 h-screen w-full">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          User Handbook
        </h1>
        <div className="space-y-4">
          {handbookSections.map((section, i) => (
            <div key={i} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-blue-600 font-semibold text-lg">
                {section.title}
              </h3>
              <p className="text-stone-600 text-sm mt-2">{section.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-stone-500 mb-2">Need more help?</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            <Link href="/pages/community">Contact Support</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

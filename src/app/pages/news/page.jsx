import Header from "@/app/components/header";
import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      title: "Platform Update: New Features Released!",
      preview:
        "We've launched a new dashboard, improved UI, and added more courses.",
      image: "/assets/webinar2.jpg",
    },
    {
      title: "Top 10 Tips for Online Learning",
      preview:
        "Boost your productivity with these proven tips from top learners.",
      image: "/assets/webinar1.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-blue-50 h-screen p-10 w-full">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          News & Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, i) => (
            <div key={i} className="overflow-hidden shadow-md bg-white">
              <img
                src={item.image}
                alt="news"
                className="h-80 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm mb-4">{item.preview}</p>
                <Link href="#" className="text-blue-500 text-sm font-medium">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

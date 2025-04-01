import Image from "next/image";

const instructors = [
  {
    name: "Mr Salami Tayo",
    role: "Head of Curriculum",
    image: "/assets/profiles/salami_tayo.png",
  },
  {
    name: "Dr Mrs Olakunle Esho",
    role: "Digital Marketer",
    image: "/assets/profiles/olakunle_esho.png",
  },
  {
    name: "Mr Israel Chuks",
    role: "Life Coach",
    image: "/assets/profiles/israel_chuks.png",
  },
  {
    name: "Mrs Ajibade Yewande",
    role: "PR Strategist",
    image: "/assets/profiles/ajibade_yewande.png",
  },
  {
    name: "Mr Chinonso Kalu",
    role: "Leadership Mentor",
    image: "/assets/profiles/chinonso_kalu.png",
  },
  {
    name: "Mrs Olabisi Deyinka",
    role: "Director",
    image: "/assets/profiles/olabisi_deyinka.png",
  },
];

const Instructors = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-[#E5EDFE] text-center">
      <h3 className="text-gray-500 uppercase text-sm">Meet Our Team</h3>
      <h2 className="text-3xl font-bold text-blue-700 mt-2">
        Our instructors from Thrivesphere
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Meet our instructors and team members that make Thrivesphere what it is
        today. These are the people you can also meet and talk to.
      </p>

      {/* Instructors Grid */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {instructors.map((instructor, index) => (
          <div key={index} className="p-5 rounded-lgtext-center">
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={200}
              height={200}
              className="w-full shadow-xl object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3">{instructor.name}</h3>
            <p className="text-gray-500 text-sm">{instructor.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;

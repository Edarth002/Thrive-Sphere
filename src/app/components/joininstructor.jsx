import Image from "next/image";

const instagramImages = [
  "/assets/insta1.png",
  "/assets/insta2.png",
  "/assets/insta3.png",
  "/assets/insta4.png",
];

const JoinInstructor = () => {
  return (
    <section className="py-12 px-6 space-y-10 md:px-16">
      <div className="bg-white rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h3 className="text-gray-500 text-sm">Become an instructor</h3>
          <h2 className="text-3xl font-bold text-blue-700 mt-2">
            Join us and spread your knowledge
          </h2>
          <p className="text-gray-600 mt-3">
            Do you have the skills, passion, and knowledge to empower others on
            their self-development journey? Join our platform as an instructor
            and make a meaningful impact while growing your personal life.
          </p>
          <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600">
            Become an instructor
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/join_us.png"
              alt="Instructor Image"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            Follow Us On Instagram
          </h2>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
            @ThriveSphere.
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {instagramImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={image}
                alt={`Instagram image ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-48 sm:h-56 md:h-48 object-cover"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinInstructor;

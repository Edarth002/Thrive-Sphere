import Image from "next/image";

export const OurServices = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-0">
      <p className="text-blue-600 text-3xl text-center font-bold py-2">
        Our services
      </p>
      <p className="text-center text-stone-400 text-sm mb-12 max-w-xl mx-auto">
        We help you achieve your growth and goals
      </p>

      <div className="flex flex-col md:flex-row items-stretch justify-center max-w-6xl mx-auto gap-6">
        <section className="bg-white p-6 rounded-2xl flex-1 max-w-md mx-auto md:mx-0 shadow-md">
          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
            <Image
              src="/assets/personalized.png"
              alt="Personalized Icon"
              width={24}
              height={24}
              className="invert"
            />
          </div>
          <h1 className="text-xl font-semibold text-blue-950 mb-3">
            Personalized Coaching
          </h1>
          <p className="text-sm leading-relaxed">
            Work directly with experienced coaches to address specific personal
            challenges, improving public speaking, overcoming self doubt, and
            career transition planning.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl flex-1 max-w-md mx-auto md:mx-0 shadow-md">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <Image
              src="/assets/personalized.png"
              alt="Career Mentorship Icon"
              width={24}
              height={24}
              className="invert"
            />
          </div>
          <h1 className="text-xl font-semibold text-blue-950 mb-3">
            Career Mentorship
          </h1>
          <p className="text-sm leading-relaxed">
            Get tailored advice on navigating career transitions, preparing for
            promotions, or entering new industries. Receive expert feedback on
            your work, and how you can stand out in the job market.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl flex-1 max-w-md mx-auto md:mx-0 shadow-md">
          <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mb-4">
            <Image
              src="/assets/people.png"
              alt="Community Icon"
              width={24}
              height={24}
              className="invert"
            />
          </div>
          <h1 className="text-xl font-semibold text-blue-950 mb-3">
            Community
          </h1>
          <p className="text-sm leading-relaxed">
            Participate in online meet-ups and discussion forums to connect with
            other learners, share experiences, exchange ideas, and attend expert
            led sessions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default OurServices;

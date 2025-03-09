// import React from "react";
import Image from "next/image";
export const OurServices = () => {
  return (
    <div className="bg-blue-50 py-16">
      <p className="text-blue-600 text-3xl text-center font-bold py-2">
        Our services
      </p>
      <p className="text-center text-stone-400 text-sm mb-12">
        We help you achieve your growth and goals
      </p>

      <div className="w-3/4 flex items-center justify-center mx-auto">
        <section className="bg-white p-5 rounded-2xl w-1/3 mx-5 h-80">
          <Image
            src="/assets/personalized.png"
            alt="Personalized Icon"
            width={200}
            height={200}
            className="bg-yellow-200 rounded-full w-10 h-10 p-2 invert"
          />
          <h1 className="text-xl font-semibold text-blue-950 my-2">
            Personalized Coaching
          </h1>
          <p className=" text-sm mt-5 leading-relaxed">
            Work directly with experienced coaches to address specific personal
            challenges, improving public speaking, overcoming self doubt, and
            career transition planning.
          </p>
        </section>

        <section className="bg-white p-5 rounded-2xl w-1/3 mx-5 h-80">
          <Image
            src="/assets/personalized.png"
            alt="Personalized Icon"
            width={200}
            height={200}
            className="bg-green-600 rounded-full w-10 h-10 p-2 invert"
          />
          <h1 className="text-xl font-semibold text-blue-950 my-2">
            Career Mentorship
          </h1>
          <p className=" text-sm mt-5 leading-relaxed">
            Get tailored advice on navigating career transitions, preparing for
            promotions, or entering new industries. Receive expert feedback on
            your work, and how you can stand out in the job market
          </p>
        </section>

        <section className="bg-white p-5 rounded-2xl w-1/3 mx-5 h-80">
          <Image
            src="/assets/people.png"
            alt="Community Icon"
            width={200}
            height={200}
            className="bg-lime-500 rounded-full w-10 h-10 p-2 invert"
          />
          <h1 className="text-xl font-semibold text-blue-950 my-2">
            Community
          </h1>
          <p className=" text-sm mt-5 leading-relaxed">
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

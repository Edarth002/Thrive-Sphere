"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import testimonials from "../data/testimonials";

export const Testimonials = ({ courseTitle }: { courseTitle?: string }) => {
  // Filter testimonials by course title tag, or return all if empty
  const filteredTestimonials = courseTitle
    ? testimonials.filter((t) =>
        t.tags?.some((tag) => tag.toLowerCase() === courseTitle.toLowerCase())
      )
    : testimonials;

  // Duplicate for infinite scroll
  const extendedTestimonials = filteredTestimonials.concat(filteredTestimonials);

  return (
    <div className="bg-blue-50 px-4 py-20 overflow-hidden relative">
      <h1 className="text-center text-stone-400 text-sm my-2">Testimonials</h1>
      <p className="text-blue-600 text-3xl text-center font-bold mb-10">
        What people say about us
      </p>

      {filteredTestimonials.length === 0 ? (
        <p className="text-center text-stone-600">No testimonials found.</p>
      ) : (
        <motion.div
          className="flex space-x-6"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white border border-black rounded-lg w-60 h-60 p-5 flex-shrink-0 flex flex-col justify-between"
            >
              <p className="mb-12">{testimonial.testimony}</p>
              <div className="flex items-center space-x-4 absolute bottom-5 left-5">
                <Image
                  src={testimonial.avatar}
                  width={40}
                  height={40}
                  alt={testimonial.name}
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-stone-600 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Testimonials;

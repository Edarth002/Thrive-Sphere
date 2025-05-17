"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import testimonials from "../data/testimonials";

export const Testimonials = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    async function loopAnimation() {
      while (true) {
        await controls.start({ x: "-100%" });
        await controls.set({ x: 0 });
      }
    }
    loopAnimation();
  }, [controls]);

  return (
    <div className="bg-blue-50 px-4 py-20 overflow-hidden">
      <h1 className="text-center text-stone-400 text-sm my-2">Testimonials</h1>
      <p className="text-blue-600 text-3xl text-center font-bold mb-10">
        What people say about us
      </p>

      <motion.div
        ref={containerRef}
        className="flex space-x-6 cursor-grab"
        drag="x"
        dragConstraints={{ left: -((testimonials.length - 1) * 240), right: 0 }}
        dragElastic={0.1}
        animate={controls}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        whileTap={{ cursor: "grabbing" }}
        style={{ whiteSpace: "nowrap" }}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          // duplicate the testimonials array to create infinite loop effect
          <div
            key={index}
            className="bg-white border border-black rounded-lg w-60 h-60 p-5 flex-shrink-0 flex flex-col justify-between"
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
    </div>
  );
};

export default Testimonials;

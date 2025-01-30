"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import testimonials from "../data/testimonials";

export const Testimonials = () => {
  return (
    <div className="bg-blue-50 px-10 py-20">
      <h1 className="text-center text-stone-400 text-sm my-2">Testimonials</h1>
      <p className="text-blue-600 text-3xl text-center font-bold mb-10">
        What people say about us
      </p>
      <motion.div
        className="testimonial-scroll"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 30,
        }}
      >
        <div className=" flex items-center snap-x snap-mandatory w-[140rem] overflow-x-auto relative text-sm ">
          {testimonials.map((testimonial) => (
            <div
              className="bg-white border border-black rounded-lg w-60 h-60 p-5 mx-4"
              key={testimonial.id}
            >
              <p>{testimonial.testimony}</p>
              <div className="flex bottom-5 absolute items-center space-x-5">
                <Image
                  src={testimonial.avatar}
                  width={50}
                  height={50}
                  alt={testimonial.name}
                  className="rounded-full w-7 h-7"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-stone-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Testimonials;

// import React from "react";
import webinars from "../data/webinars";
import Image from "next/image";
import Link from "next/link";

export const Webinarsection = () => {
  return (
    <div className="bg-blue-50 p-10">
      <h1 className="text-center text-4xl uppercase font-bold text-blue-600 my-10">
        Upcoming webinars for you
      </h1>
      <div className="flex items-center flex-wrap mx-auto justify-center">
        {webinars.map((allwebinars) => (
          <div
            key={allwebinars.id}
            className="border-stone-500 border p-5  rounded-sm relative h-[28rem] w-[calc(33.33%-1.25rem)] m-1"
          >
            <Image
              src={allwebinars.image}
              alt={allwebinars.name}
              width={300}
              height={300}
              className="h-48 object-cover w-full"
            />
            <p className="text-blue-600 font-semibold text-xl my-2">
              {allwebinars.name}
            </p>
            <div className="my-8 text-stone-500 flex space-x-3 items-center">
              <p>{allwebinars.date}</p>
              <p className="text-2xl">|</p>
              <p>{allwebinars.time}</p>
            </div>
            <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white ">
              <Link href="/pages/auth/signup">Register</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Webinarsection;

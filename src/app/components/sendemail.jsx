// import React from "react";

export const SendEmail = () => {
  return (
    <div className="bg-blue-800 p-10 text-white w-full h-[70vh]">
      <p>Get Started</p>

      <h1 className="text-4xl font-bold mt-5 mb-10">
        Get in touch with us <br />
        We're here to assist you
      </h1>

      <form
        action="
      "
      >
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="border bg-transparent border-b-white border-t-0 border-r-0 border-l-0 placeholder-white text-sm border-dotted w-full p-2 mx-3 outline-none"
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            className="border bg-transparent border-b-white border-t-0 border-r-0 border-l-0 placeholder-white text-sm border-dotted w-full p-2 mx-3 outline-none"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="border bg-transparent border-b-white border-t-0 border-r-0 border-l-0 placeholder-white text-sm border-dotted w-full p-2 mx-3 outline-none"
            placeholder="Phone Number(Optional)"
          />
        </div>
        <div className="mx-3">
          <input
            type="text"
            className="border bg-transparent border-b-white border-t-0 border-r-0 border-l-0 placeholder-white text-sm border-dotted w-full p-2 mx-auto my-10 outline-none"
            placeholder="Message"
          />
        </div>

        <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white text-sm">
          Leave us a message
        </button>
      </form>
    </div>
  );
};

export default SendEmail;

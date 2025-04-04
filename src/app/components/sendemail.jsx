"use client";

import { sendEmail } from "@/lib/email";
import { useState, useEffect } from "react";

export const SendEmail = () => {
  const [mail, setMail] = useState({
    from: "",
    to: "arthuronyeanusi@gmail.com",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setMail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await sendEmail({
        to: mail.to,
        subject: mail.subject,
        message: mail.message,
      });

      setSuccess("Email sent Successfully");
      setMail({ from: "", to: "", subject: "", message: "" });
      return response;
    } catch (error) {
      setError("Email not sent, contact thrivesphere@gmail.com");
    }
  };

  return (
    <div className="bg-blue-800 p-10 text-white w-full h-[70vh]">
      <p>Get Started</p>

      <h1 className="text-4xl font-bold mt-5 mb-10">
        Get in touch with us <br />
        We're here to assist you
      </h1>

      <form onSubmit={handleEmail}>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="border bg-transparent border-b-white border-t-0 border-r-0 border-l-0 placeholder-white text-sm border-dotted w-full p-2 mx-3 outline-none"
            placeholder="Your Name"
            required
            name="subject"
            value={mail.subject}
            onChange={handleInput}
          />
          <input
            type="email"
            className="border bg-transparent border-b-white border-t-0 border-r-0 border-l-0 placeholder-white text-sm border-dotted w-full p-2 mx-3 outline-none"
            placeholder="Email Address"
            required
            name="from"
            value={mail.from}
            onChange={handleInput}
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
            name="message"
            placeholder="Message"
            value={mail.message}
            onChange={handleInput}
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white text-sm"
        >
          Leave us a message
        </button>

        {success && <p className="text-green-500 mt-4">{success}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default SendEmail;

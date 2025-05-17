"use client";

import { sendEmail } from "@/lib/email";
import { useState } from "react";

export const SendEmail = () => {
  const [mail, setMail] = useState({
    from: "",
    to: "arthuronyeanusi@gmail.com",
    subject: "",
    message: "",
    phone: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (e) => {
    setMail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSuccess("");
    setError("");
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await sendEmail({
        to: mail.to,
        subject: mail.subject,
        message: `Message: ${mail.message}\nPhone: ${
          mail.phone || "N/A"
        }\nFrom: ${mail.from}`,
      });

      setSuccess("Email sent successfully.");
      setMail({
        from: "",
        to: "arthuronyeanusi@gmail.com",
        subject: "",
        message: "",
        phone: "",
      });
      return response;
    } catch (error) {
      setError("Email not sent, please contact thrivesphere@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-800 p-6 sm:p-10 text-white w-full min-h-[70vh] flex flex-col justify-center">
      <p className="text-sm">Get Started</p>

      <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-8 max-w-xl">
        Get in touch with us <br />
        We're here to assist you
      </h1>

      <form onSubmit={handleEmail} className="space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="border-b border-white bg-transparent placeholder-white text-sm p-2 flex-1 outline-none"
            placeholder="Your Name"
            required
            name="subject"
            value={mail.subject}
            onChange={handleInput}
          />
          <input
            type="email"
            className="border-b border-white bg-transparent placeholder-white text-sm p-2 flex-1 outline-none"
            placeholder="Email Address"
            required
            name="from"
            value={mail.from}
            onChange={handleInput}
          />
          <input
            type="tel"
            className="border-b border-white bg-transparent placeholder-white text-sm p-2 flex-1 outline-none"
            placeholder="Phone Number (Optional)"
            name="phone"
            value={mail.phone}
            onChange={handleInput}
          />
        </div>

        <textarea
          className="border-b border-white bg-transparent placeholder-white text-sm p-2 w-full resize-y outline-none min-h-[100px]"
          name="message"
          placeholder="Message"
          required
          value={mail.message}
          onChange={handleInput}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-yellow-500 rounded-xl px-8 py-3 text-white text-sm duration-500 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? "Sending..." : "Leave us a message"}
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">{success}</p>
        )}
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default SendEmail;

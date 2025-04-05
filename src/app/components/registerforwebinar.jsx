"use client";
import { sendEmail } from "@/lib/email";
import { useState } from "react";

const RegisterForWebinar = ({ subject, onClose }) => {
  const [formData, setFormData] = useState({
    to: "arthuronyeanusi@gmail.com",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      subject,
    };

    try {
      // Send to Strapi webinar list
      await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/webinar-attendants`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: dataToSend }),
        }
      );

      // Send email to register for event
      await sendEmail(dataToSend);

      alert("Form submitted and email sent!");
      onClose();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className=" font-bold mb-2">
          Register for{" "}
          <span className="text-lg font-bold text-blue-600 mb-2">
            {subject}
          </span>{" "}
          Webinar
        </h2>
        <input
          name="message"
          type="email"
          placeholder="Email"
          value={formData.message}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-2"
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-red-500 font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForWebinar;

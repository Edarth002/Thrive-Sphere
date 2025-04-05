"use client";
import { sendEmail } from "@/lib/email";
import { useState } from "react";

const RegisterForWebinar = ({ subject, date, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const strapiData = {
      Name: formData.name,
      email: formData.email,
      subject,
    };

    const emailData = {
      to: "arthuronyeanusi@gmail.com",
      subject,
      message: formData.email,
    };

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/webinar-attendants`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: strapiData }),
        }
      );

      await sendEmail(emailData);

      setSuccessMessage("You’ve successfully registered. Confirmation sent!");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="font-bold mb-2">
          Register for{" "}
          <span className="text-lg font-bold text-blue-600">{subject}</span>{" "}
          Webinar
        </h2>

        {successMessage && (
          <p className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm text-center">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm text-center">
            {errorMessage}
          </p>
        )}

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-2"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-4"
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="text-red-500 font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? "bg-blue-400" : "bg-blue-600"
            } text-white px-4 py-2 rounded flex items-center justify-center`}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForWebinar;

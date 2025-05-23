"use client";

import { useState } from "react";
import { signUpUser } from "@/lib/signup";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";

const SignUpComponent = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUpUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });
      setSuccess("Account created! Log in to start your learning journey");
    } catch (err) {
      setError(err.message || "User already exists or try again");
    }
  };

  return (
    <div>
      <Header />

      <div className="py-8 px-4 md:px-16">
        <div className="flex flex-col justify-center w-full min-h-full">
          <div className="w-full max-w-md md:max-w-2xl mx-auto">
            <h2 className="text-2xl text-center font-bold text-gray-900 mb-6">
              Sign up and start learning
            </h2>

            <form className="space-y-6" onSubmit={handleForm}>
              <div className="md:grid md:grid-cols-12 md:gap-6">
                <div className="md:col-span-7 space-y-4">
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    placeholder="Username"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md px-3 py-4 border-2 border-gray-600 focus:ring-2 focus:ring-indigo-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Email Address"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md px-3 py-4 border-2 border-gray-600 focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="Password"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md px-3 py-4 border-2 border-gray-600 focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="password"
                    name="confirm_password"
                    value={form.confirm_password}
                    placeholder="Confirm Password"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md px-3 py-4 border-2 border-gray-600 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="hidden md:block md:col-span-5">
                  <Image
                    src="/assets/sign-up.png"
                    width={1000}
                    height={1000}
                    alt="Sign Up Image"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="mt-2">
                <input type="checkbox" id="checkbox" name="subscribe" />
                <label htmlFor="checkbox" className="ml-2 text-sm">
                  Send me special offers, personalized recommendations, and
                  learning tips.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#153781] py-4 text-white rounded-md font-semibold hover:bg-indigo-950 duration-500"
              >
                SIGN UP
              </button>

              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm mb-2">{success}</p>
              )}
            </form>

            <div className="flex justify-center bg-[#F1EEEE] px-3 py-4 rounded-md my-3">
              <span className="text-black">Already have an account?</span>
              <Link
                href="/auth/login"
                className="ml-1 text-[#153781] hover:text-indigo-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpComponent;

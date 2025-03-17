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
      await signUpUser(form.username, form.email, form.password);
      setSuccess("Account created! Log in to start your learning journey");
    } catch (err) {
      setError(err.message || "User already exists or try again");
    }
  };

  return (
    <div>
      <Header />
      <div className="py-5 px-16">
        <div className="flex w-full min-h-full flex-col justify-center px-6 py-1 lg:px-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
              Sign up and start learning
            </h2>
          </div>

          <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" onSubmit={handleForm}>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-7 space-y-4">
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

                <div className="col-span-5">
                  <Image
                    src="/assets/sign-up.png"
                    width={1000}
                    height={1000}
                    alt="Sign Up Image"
                    className="w-72 h-72 object-cover"
                  />
                </div>
              </div>
              <div className="mt-2">
                <input type="checkbox" id="checkbox" name="subscribe" />
                <span className="ml-2 text-sm">
                  Send me special offers, personalized recommendations, and
                  learning tips.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#153781] py-4 text-white rounded-md font-semibold hover:bg-indigo-500"
              >
                SIGN UP
              </button>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
            </form>

            <div className="flex justify-center bg-[#F1EEEE] px-3 py-4 rounded-md">
              <span className="text-black">Already have an account?</span>{" "}
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

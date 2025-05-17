"use client";

import { useState } from "react";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";

const LogIn = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

    try {
      await login(form.email, form.password);
      setSuccess(
        "Welcome back to Thrive Sphere, you will be redirected shortly."
      );
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <Header />

      <div className="py-8 px-4 md:px-16">
        <div className="flex flex-col justify-center w-full min-h-full">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl text-center font-bold text-gray-900 mb-6">
              Login
            </h2>

            <form className="space-y-6" onSubmit={handleForm}>
              <div className="md:grid md:grid-cols-12 md:gap-6">
                <div className="md:col-span-7 space-y-4">
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

              <button
                type="submit"
                className="w-full bg-[#153781] py-4 text-white rounded-md font-semibold hover:bg-indigo-950 duration-500"
              >
                LOGIN
              </button>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
            </form>

            <div className="flex justify-center bg-[#F1EEEE] px-4 py-3 rounded-md mt-6">
              <span className="text-black">No account yet?</span>
              <Link
                href="/auth/signup"
                className="ml-1 text-[#153781] hover:text-indigo-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogIn;

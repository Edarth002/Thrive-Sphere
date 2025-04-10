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
      <div className="py-5 px-16">
        <div className="flex w-full min-h-full flex-col justify-center px-6 py-1 lg:px-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold text-gray-900 mb-5">
              Login
            </h2>
          </div>

          <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" onSubmit={handleForm}>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-7 space-y-4 items-center">
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

              <button
                type="submit"
                className="w-full bg-[#153781] py-4 text-white rounded-md font-semibold hover:bg-indigo-950 duration-500"
              >
                LOGIN
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
            </form>

            <div className="flex justify-center bg-[#F1EEEE] px-3 py-4 rounded-md my-3">
              <span className="text-black">No account yet?</span>{" "}
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

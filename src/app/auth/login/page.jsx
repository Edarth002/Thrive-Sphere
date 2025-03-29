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

  const [form, setForm] = useState({ username: "", email: "", password: "" });
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

      router.push("/pages/dashboard");
      setSuccess(
        "Welcome back to thrive-sphere, you would be redirected shortly"
      );
      setError("");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div>
      <Header />
      <div className="py-5 px-16">

        {/* <h1 className='text-[64px] font-[bold]'>Sign up and start learning </h1> */}

        <div class="flex w-full min-h-full flex-col justify-center px-6 py-1 lg:px-0">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign up and start learning
            </h2>
          </div>

          <div class="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
            <form class="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-7 space-y-4">
                  <div>
                    <div class="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 placeholder:text-gray-400 border-gray-600 border-2 focus:outline-2 focus:outline-indigo-600 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div class="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="password"
                        required
                        className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 placeholder:text-gray-400 border-gray-600 border-2 focus:outline-2 focus:outline-indigo-600 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
=======
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


              <div>
                <div class="mt-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    required
                    // className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 placeholder:text-gray-400 border-gray-600 border-2 focus:outline-2 focus:outline-indigo-600 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />{" "}
                  <span>
                    Send me special offers,personalized recommendations and
                    learning tips
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-[#153781] px-3 py-4 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SIGN UP
                </button>
              </div>
            </form>

            <div>
              <p className="my-4 text-center text-sm/6 text-gray-500">
                By signing up, you agree to our{" "}
                <span className="text-[#153781]">Terms of Use</span> and{" "}
                <span className="text-[#153781]">Privacy Policy</span>
              </p>
            </div>

            <div class="flex w-full space-x-2 justify-center rounded-md bg-[#F1EEEE] px-3 py-4 text-sm/6 font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 ">
              <span className="text-black">Already have an account?</span>{" "}
              <a
                href="#"
                class="font-semibold text-[#153781] hover:text-indigo-500"
              >
                Login
              </a>
=======
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

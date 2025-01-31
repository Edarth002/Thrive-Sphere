import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import PopularCoursesSection from "@/app/components/coursesection";
import Testimonials from "@/app/components/testimonials";
import OurServices from "@/app/components/ourservices";
import Footer from "@/app/components/footer";

export const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center w-full h-[60vh]">
        <section className="p-28 justify-center w-1/2 text-white bg-blue-900 h-[60vh]">
          <h1 className="text-4xl font-semibold">Thrive beyond limits</h1>
          <p className="my-7 text-sm font-light">
            Your potentials are limitless and we are here to help you achieve
            and realize those potentials towards self improvement and success.
          </p>
          <button className="bg-yellow-500 rounded-xl duration-500 hover:bg-yellow-600 px-8 py-3 text-white">
            <Link href="/pages/auth/signup">Sign up</Link>
          </button>
        </section>
        <Image
          src="/assets/hero.png"
          width={1000}
          height={1000}
          alt="hero Image"
          className="w-1/2 object-cover h-[60vh]"
        />
      </div>

      <OurServices />

      <PopularCoursesSection />

      <Testimonials />

      <section className="flex items-center justify-between p-10">
        <Image
          src="/assets/courseera.png"
          width={1000}
          height={1000}
          alt="Courseera icon"
          className="w-40 object-cover"
        />

        <Image
          src="/assets/udemy.png"
          width={1000}
          height={1000}
          alt="Udemy icon"
          className="w-40 object-cover"
        />

        <Image
          src="/assets/edx.png"
          width={1000}
          height={1000}
          alt="Edx icon"
          className="w-20 object-cover"
        />

        <Image
          src="/assets/linkedin.png"
          width={1000}
          height={1000}
          alt="Linkedin icon"
          className="w-20 object-cover"
        />

        <Image
          src="/assets/skillshare.png"
          width={1000}
          height={1000}
          alt="Skillshare icon"
          className="w-40 object-cover"
        />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import Testimonials from "@/app/components/testimonials";
import OurServices from "@/app/components/ourservices";
import Footer from "@/app/components/footer";
import PopularCourses from "@/app/components/popularcourses";
import HeroBtn from "@/app/components/herobtn";

export const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row items-center w-full h-[60vh]">
        <section className="p-10 md:p-28 flex flex-col justify-center w-full md:w-1/2 text-white bg-blue-900 h-[60vh] text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Thrive beyond limits
          </h1>
          <p className="my-5 md:my-7 text-sm font-light max-w-md mx-auto md:mx-0">
            Your potentials are limitless and we are here to help you achieve
            and realize those potentials towards self improvement and success.
          </p>
          <div className="flex justify-center md:justify-start">
            <HeroBtn />
          </div>
        </section>
        <Image
          src="/assets/hero.jpg"
          width={1000}
          height={1000}
          alt="hero Image"
          className="w-full md:w-1/2 object-cover h-[60vh]"
        />
      </div>

      <OurServices />

      <PopularCourses />

      <Testimonials />

      <section className="flex flex-wrap justify-center items-center gap-8 p-6 md:p-10">
        <Image
          src="/assets/courseera.png"
          width={160}
          height={160}
          alt="Courseera icon"
          className="object-contain"
        />

        <Image
          src="/assets/udemy.png"
          width={160}
          height={160}
          alt="Udemy icon"
          className="object-contain"
        />

        <Image
          src="/assets/edx.png"
          width={80}
          height={80}
          alt="Edx icon"
          className="object-contain"
        />

        <Image
          src="/assets/linkedin.png"
          width={80}
          height={80}
          alt="Linkedin icon"
          className="object-contain"
        />

        <Image
          src="/assets/skillshare.png"
          width={160}
          height={160}
          alt="Skillshare icon"
          className="object-contain"
        />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

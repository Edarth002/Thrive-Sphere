import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import ImageOverlay from "@/app/components/imageoverlay";
import Instructors from "@/app/components/instructors";
import JoinInstructor from "@/app/components/joininstructor";
import MissionSection from "@/app/components/missionsection";
import Image from "next/image";
import Link from "next/link";
// import ImageOverlay from "@/components/ImageOverlay";
// import imageBg from "../about-us.png";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header className="bg-transparent text-white" />
      </div>

      {/* Hero Section */}
      <ImageOverlay
        imgOverlay="/assets/about-us.png"
        className="h-screen flex items-center justify-center text-white"
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your gateway to knowledge
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Learning has no boundaries. We believe learning should be
            accessible, flexible, and engaging. Explore our platform and unlock
            your potentials today with Thrive Sphere and succeed.
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-xl gap-2">
            Sign Up <span>➜</span>
          </button>
        </div>
      </ImageOverlay>

      {/* Additional Content Below */}

      <MissionSection />
      <Instructors />
      <JoinInstructor />
      <Footer />
    </div>
  );
};

export default HomePage;

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import ImageOverlay from "@/app/components/imageoverlay";
import Instructors from "@/app/components/instructors";
import JoinInstructor from "@/app/components/joininstructor";
import MissionSection from "@/app/components/missionsection";
import HeroBtn from "@/app/components/herobtn";

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
        className="h-[90vh] flex flex-col items-center justify-center text-white px-4 md:px-0"
      >
        <div className="text-center max-w-full md:max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold">
            Your gateway to knowledge
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Learning has no boundaries. We believe learning should be
            accessible, flexible, and engaging. Explore our platform and unlock
            your potential today with Thrive Sphere and succeed.
          </p>

          <div className="mt-6">
            <HeroBtn />
          </div>
        </div>
      </ImageOverlay>

      <MissionSection />
      <Instructors />
      <JoinInstructor />
      <Footer />
    </div>
  );
};

export default HomePage;

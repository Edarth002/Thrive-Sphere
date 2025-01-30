import React from "react";
import Header from "@/app/components/header";
import PopularCoursesSection from "@/app/components/coursesection";
import Testimonials from "@/app/components/testimonials";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularCoursesSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;

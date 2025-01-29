import React from "react";
import Header from "@/app/components/header";
import PopularCoursesSection from "@/app/components/coursesection";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularCoursesSection />
    </div>
  );
};

export default HomePage;

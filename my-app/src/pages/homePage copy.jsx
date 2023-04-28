import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/HomePage/hero";
import AboutUs from "../components/HomePage/aboutUs";
import PlantDisease from "../components/HomePage/plantDisease";
import TeamMember from "../components/HomePage/teamMember";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <PlantDisease />
      <TeamMember />
      <Footer />
    </>
  );
};

export default HomePage;

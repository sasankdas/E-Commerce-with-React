import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";

const About = () => {
  const data = {
    name: "About My E-commerce",
  };
  return (
    <>
      <HeroSection info={data}></HeroSection>
    </>
  );
};

export default About;

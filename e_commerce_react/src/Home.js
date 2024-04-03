import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services"
import Trusted from "./Components/Trusted";

const Home = () => {
  const data = {
    name: "My Store",
  };
  return (
    <>
      <HeroSection info={data}></HeroSection>
      <Services/>
      <Trusted/>
    </>
  );
};

export default Home;

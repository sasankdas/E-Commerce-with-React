import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";

const Home = () => {
  const data = {
    name: "My Store",
  };
  return (
    <>
      <HeroSection info={data}></HeroSection>
    </>
  );
};

export default Home;

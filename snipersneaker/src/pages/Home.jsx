import React from "react";
import {
  BannerSec,
  BestSeller,
  Hero,
  Featured,
  RecommededPro,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <BestSeller />
      <BannerSec />
      <RecommededPro />
    </>
  );
};

export default Home;

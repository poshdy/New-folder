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
    <div className="">
      <Hero />
      <Featured />
      <BestSeller />
      <BannerSec />
      <RecommededPro />
    </div>
  );
};

export default Home;

import React from "react";
import {
  BannerSec,
  BestSeller,
  Brands,
  Hero,
  Featured,
  RecommededPro,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Featured />
      <BestSeller />
      <BannerSec />
      <RecommededPro />
    </div>
  );
};

export default Home;

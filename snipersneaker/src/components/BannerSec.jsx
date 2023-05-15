import React from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

const BannerSec = () => {
  return (
    <div className="w-full my-28 bg-gray-950 text-center">
      <div className="container h-[350px] p-5 items-center justify-evenly flex flex-row">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-white font-medium text-center text-5xl flex flex-col gap-2 ">
            YOUR FAVORITE <span className="text-white font-bold">SNEAKERS</span>
          </h1>
          <p className="text-white">Discover all our sneakers and order now!</p>
          <Link to={"/shop"}>
            <button className="bg-transparent w-fit outline-none text-white p-2 border-2 border-white">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          className="hidden md:flex md:w-[500px] lg:w-[700px] rotate-[-35deg]"
          src={banner}
        />
      </div>
    </div>
  );
};

export default BannerSec;

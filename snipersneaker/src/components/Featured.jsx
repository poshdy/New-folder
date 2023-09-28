import React from "react";
import nike from "../assets/nike.jpg";
import conv from "../assets/conv.jpg";
import vans from "../assets/vans.jpg";
import adid from "../assets/adid.jpg";
import Image from "./Image";
const IMGS = [nike, adid, conv, vans];
const BRANDS = ["NIKE", "CONVERSE", "ADIDAS", "VANS", "PUMA", "REBOOK"];
const Brands = () => {
  return (
    <div className="flex items-center gap-2 py-4 text-white justify-around text-2xl ">
      {BRANDS.map((brand, i) => (
        <h4 key={i} className="even:font-bold odd:font-light">
          {brand}
        </h4>
      ))}
    </div>
  );
};
const Featured = () => {
  return (
    <section className="w-full bg-black space-y-20 pt-8">
      <div className="container flex flex-wrap md:flex-nowrap gap-3 items-center justify-center md:justify-around ">
        {IMGS.map((ig, i) => (
          <Image
            key={i}
            src={ig}
            alt="brand img"
            className="w-[150px] h-[150px]  md:w-[300px] md:h-[400px] object-cover"
          />
        ))}
      </div>
      <Brands />
    </section>
  );
};

export default Featured;

import React from "react";
import { styles } from "../styles";
import hero2 from "../assets/hero2.jpg";
import { Link } from "react-router-dom";
import Image from "./Image";

const Hero = () => {
  return (
    <section className="w-full relative">
      <div className="w-full h-[95vh]">
        <Image
          src={hero2}
          alt="nike shoes"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute mx-auto bottom-3 left-7">
        <Link to={`/shop`}>
          <button className="text-sm hover:bg-black/50 duration-300 ease-in-out text-white/90 bg-black font-bold py-2 px-4 ">
            Shop Now!
          </button>
        </Link>
        <div className="flex flex-col -space-y-4 lg:-space-y-10">
          <h1 className={`${styles.heroText} text-white uppercase`}>feel</h1>
          <h1 className={`${styles.heroText} text-white uppercase`}>
            different
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

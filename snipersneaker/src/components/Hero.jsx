import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [HeroImg, setHeroImg] = useState(null);
  const IMGs = [hero1, hero2, hero3];
  useEffect(() => {
    setHeroImg(IMGs[Math.floor(Math.random() * IMGs.length)]);
  }, []);

  return (
    <div className="w-full relative">
      <div className="w-full h-[700px] max-h-[800px] ">
        <img className=" object-cover w-full h-full" src={HeroImg} />
      </div>
      <div className="absolute mx-auto bottom-3 left-7">
        <Link to={`/shop`}>
          <button className="border-2 text-sm hover:bg-white/20 duration-300 ease-in-out text-white/90 border-black font-bold py-1 px-4 rounded-full">
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
    </div>
  );
};

export default Hero;

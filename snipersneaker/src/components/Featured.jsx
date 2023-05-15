import React from "react";
import nike from "../assets/nike.jpg";
import conv from "../assets/conv.jpg";
import vans from "../assets/vans.jpg";
import adid from "../assets/adid.jpg";
import { motion } from "framer-motion";
import { letterAni, letterDiv } from "../animation/motion";

const transition = {
  ease: [0.6, 0.01, 0.05, 0.95],
  duration: 0.5,
};

const Featured = () => {
  return (
    <div className="w-full bg-black my-14">
      <div className="w-[80%] mx-auto py-7  text-white">
        <h1 className="text-center text-3xl py-2 md:text-4xl font-bold flex flex-col">
          Featured
          <span className="font-thin text-base md:text-xl">Products</span>
        </h1>
        <motion.div
          initial="initial"
          animate="animate"
          variants={letterDiv}
          className="flex flex-row flex-wrap items-center justify-center gap-6">
          <motion.img
            variants={letterAni}
            whileHover={{ rotate: 5 }}
            transition={transition}
            className=" w-[250px] h-[374px] lg:w-[300px] lg:h-[450px] object-cover "
            src={conv}/>
          <motion.img
            variants={letterAni}
            whileHover={{ scale: 1.1 }}
            transition={transition}
            className="w-[250px] h-[374px] lg:self-end lg:w-[300px] lg:h-[500px] object-cover"
            src={nike}/>
          <motion.img
            variants={letterAni}
            whileHover={{ scale: 0.9 }}
            transition={transition}
            className="w-[250px] h-[374px] lg:pt-4  lg:w-[275px] lg:h-[600px]  object-cover"
            src={adid}/>
          <motion.img
            variants={letterAni}
            whileHover={{ rotate: -5 }}
            transition={transition}
            className="w-[250px] h-[374px]   lg:w-[300px] lg:h-[500px]  object-cover"
            src={vans}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;

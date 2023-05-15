import React from "react";
import { styles } from "../styles";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariant} from "../animation/motion";

const Hero = ({ item }) => {
  return (
    <motion.div variants={item} className="w-full my-16">
      <div className="container border-4 border-black rounded-md p-4 md:border-0 md:flex ">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="flex flex-col md:w-[40%]  gap-2 items-center md:items-start mb-4"
        >
          <h1 className={styles.heroText}>SNEAKER.</h1>
          <p className="text-center md:text-left">
            Welcome to our shop for sneakers! If you're a sneakerhead or simply
            love the comfort and style of sneakers, you've come to the right
            place. We offer a vast collection of sneakers from top brands,
            including Nike, Adidas, Puma, Reebok, and many more. Our sneakers
            designs to suit your taste and needs. Not only do we provide an
            extensive selection, but we also ensure the quality of our products.
            Each pair of sneakers undergoes a thorough inspection to guarantee
            their authenticity and durability. Shop now and step up your sneaker
            game!
          </p>
          <Link to={"/shop"}>
            <button className="bg-black text-white outline-none p-3 w-fit text-xl font-bold rounded-[30px] hover:bg-transparent hover:text-black duration-300 ease-in-out hover:border-2 hover:border-black">
              Shop Now
            </button>
          </Link>{" "}
        </motion.div>
        <motion.div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3">
          <img
            className="w-[350px] md:max-w-lg md:flex-grow flex-grow-0 object-cover"
            src={hero3}
            alt=""
          />
          <img
            className="w-[350px] md:w-[300px] object-cover"
            src={hero1}
            alt=""
          />
          <img
            className="w-[350px] md:w-[300px] object-cover"
            src={hero2}
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

import React, { useState } from "react";
import { urlFor } from "../lib/client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { addToCart, addToFav } from "../Features/CartSlice";
import { letterDiv, slideUp } from "../animation/motion";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const handleFav = (pro) => {
    dispatch(addToFav(pro));
  };
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <motion.div
        variants={letterDiv}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex my-10 flex-wrap items-center gap-3 justify-center"
      >
        {data?.map((pro, i) => (
          <motion.div
            variants={slideUp}
            className="border-4 border-black w-[250px] lg:w-[350px] hover:bg-black/40 hover:text-white duration-500 "
            key={i}
          >
            <div className="flex justify-between items-center px-2">
              <img
                className="w-fit h-[35px] object-cover"
                src={`${urlFor(pro.logo.asset._ref)}`}
              />
              <p className="font-bold text-xl">{pro.price}$</p>
            </div>
            <Link to={`/product/${pro?.slug?.current}`}>
              <img
                className="w-[250px] h-[250px]  lg:w-[350px] border-y-4 border-black lg:h-[400px] object-cover"
                src={`${urlFor(pro.image[0].asset._ref)}`}
              />
            </Link>
            <div className="flex items-center flex-col md:flex-row md:justify-between p-1 my-4 ">
              <h1 className="truncate w-40 text-base  font-bold">{pro.name}</h1>
              <button
                onClick={() => dispatch(addToCart(pro))}
                className="bg-transparent font-bold w-fit h-fit outline-none border-2 border-black p-1 md:p-2 hover:bg-black hover:text-white duration-300 "
              >
                Add to cart
              </button>

              <AiOutlineHeart
                onClick={() => handleFav(pro)}
                className="cursor-pointer"
                size={25}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProductCard;

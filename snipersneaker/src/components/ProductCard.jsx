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
      <div className="flex my-10 flex-wrap items-center gap-3 justify-center">
        {data?.map((pro, i) => (
          <motion.div
            variants={slideUp}
            className="border-4 border-black w-[250px]  hover:bg-black/40 hover:text-white duration-500 "
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
                className="w-[250px] h-[250px]  border-y-4 border-black  object-cover"
                src={`${urlFor(pro.image[0].asset._ref)}`}
              />
            </Link>
            <div className="flex flex-col items-center gap-2 p-2">
              <h1 className="truncate w-32 text-sm  font-bold">{pro.name}</h1>
              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(addToCart(pro))} className="border-2 border-black py-1 px-3 font-bold">
                  Add to cart
                </button>

                <AiOutlineHeart
                  onClick={() => handleFav(pro)}
                  className="cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;

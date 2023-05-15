import React from "react";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "../lib/client";
import { addToCart, deleteFav } from "../Features/CartSlice";
const Fav = () => {

  const Favs = useSelector((state) => state.cart);
const dispatch = useDispatch()
const handleDel = (item)=>{
dispatch(deleteFav(item))
}

  return (
    <div className="w-full text-white">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl flex flex-col md:flex-row items-center justify-center gap-1">
        Favorite List 
      </h1>
<div className="flex flex-col lg:flex-row lg:flex-wrap items-center md:justify-start mx-2 justify-center gap-2">
      {Favs.favItems?.map((item) => (
        <div key={item._id} className="flex flex-col items-center justify-center gap-1">
          <h1 className="font-bold text-lg w-28 truncate">{item.name}</h1>
          <img
            className=" w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover rounded-full"
            src={urlFor(item.image[0].asset._ref)}
          />
          <h1 className="font-bold text-lg">{item.price}$</h1>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="bg-transparent font-bold w-fit h-fit outline-none border-2 border-white p-1 md:p-2 hover:bg-black hover:text-white duration-300 "
          >
            Add to cart
          </button>
        <AiOutlineDelete  onClick={()=>handleDel(item)}  size={25} color="white" className="hover:bg-black  p-1 duration-150"/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Fav;

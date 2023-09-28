import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { urlFor } from "../../lib/client";
import { useDispatch } from "react-redux";
import { decQuan, deleteItemFromCart, inQuan } from "../../Features/CartSlice";
import Image from "../Image";

const CartItem = ({ pro }) => {
  const dispatch = useDispatch();
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly border-2 md:border-4 border-black w-full rounded-lg gap-1 lg:rounded-2xl p-3 hover:bg-[#B7B7B7] duration-300 ">
      <Image
        alt={pro?.name}
        className="w-[200px] border-4 border-black rounded-full"
        src={urlFor(pro.image[0].asset._ref)}
      />
      <div className="flex flex-col items-center">
        <Image
          alt="brand logo"
          className="w-fit h-[35px] object-cover"
          src={`${urlFor(pro.logo.asset._ref)}`}
        />
        <h2 className=" text-lg text-center md:text-2xl font-bold">
          {pro.name}
        </h2>
      </div>
      <div className="border-2 w-[150px] p-3 border-black rounded-full flex items-center justify-evenly">
        <button
          onClick={() => dispatch(decQuan(pro))}
          className="outline-none text-2xl border-none bg-transparent text-black"
        >
          -
        </button>
        <p>{pro.cartQuan}</p>
        <button
          onClick={() => dispatch(inQuan(pro))}
          className="outline-none border-none bg-transparent text-black"
        >
          +
        </button>
      </div>
      <h2 className="font-bold text-lg md:text-2xl">
        {pro.price * pro.cartQuan}$
      </h2>
      <AiOutlineDelete
        onClick={() => dispatch(deleteItemFromCart(pro))}
        size={25}
      />
    </section>
  );
};

export default CartItem;

import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="w-full h-screen flex items-center flex-col justify-start gap-2">
      <h2 className="text-3xl font-black uppercase">Your cart is empty:( </h2>
      <Link to={"/shop"}>
        <button className="w-fit flex items-center font-bold bg-black text-white rounded-2xl  p-4 hover:bg-transparent hover:text-black hover:border-2 hover:border-black duration-300">
          Start Shopping <BsArrowRight size={20} />
        </button>
      </Link>
    </section>
  );
};

export default EmptyCart;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { urlFor } from "../lib/client";
import { Link } from "react-router-dom";
import { calculateCartTotal, decQuan, deleteItemFromCart,    inQuan } from "../Features/CartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // const CartTotal = useSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(calculateCartTotal())
},[cart])


  return (
    <div className="w-full  my-24 ">
      <div className="container">
        {cart.cartItems.length === 0 ? (
          <div className="w-full h-screen flex items-center flex-col justify-start gap-2">
            <h2 className="text-3xl font-black uppercase">Your cart is empty:( </h2>
            <Link to={"/shop"}>
              <button className="w-fit flex items-center font-bold bg-black text-white rounded-2xl  p-4 hover:bg-transparent hover:text-black hover:border-2 hover:border-black duration-300">
                Start Shopping <BsArrowRight size={20} />
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            {cart.cartItems?.map((pro, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center justify-evenly border-2 md:border-4 border-black w-full rounded-lg gap-1 lg:rounded-2xl p-3 hover:bg-[#B7B7B7] duration-300 "
              >
                <img
                  className="w-[200px] border-4 border-black rounded-full"
                  src={urlFor(pro.image[0].asset._ref)}
                />
                <div className="flex flex-col items-center">
                  <img
                    className=" w-fit h-[35px] object-cover"
                    src={`${urlFor(pro.logo.asset._ref)}`}
                  />
                  <h3 className=" text-lg text-center  md:text-2xl font-bold">
                    {pro.name}
                  </h3>
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
              </div>
            ))}
            <div className="w-full flex gap-1 items-center justify-center md:justify-end">
           <h1 className="text-xl bg-transparent outline-none border-2 border-black p-3 rounded-[30px] font-black">Total:{cart.cartTotalAmount}$</h1>
           <button className="bg-black text-white outline-none p-3 w-fit text-xl font-bold rounded-[30px]  ">Checkout</button>

              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

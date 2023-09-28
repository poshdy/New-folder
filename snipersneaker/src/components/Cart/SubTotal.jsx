import React from "react";

const SubTotal = ({ cart }) => {
  return (
    <div className="w-full flex gap-1 items-center justify-center md:justify-end">
      <h1 className="text-xl bg-transparent outline-none border-2 border-black p-3 rounded-[30px] font-black">
        Total:{cart.cartTotalAmount}$
      </h1>
      <button className="bg-black text-white outline-none p-3 w-fit text-xl font-bold rounded-[30px]  ">
        Checkout
      </button>
    </div>
  );
};

export default SubTotal;

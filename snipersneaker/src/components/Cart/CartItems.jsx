import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateCartTotal } from "../../Features/CartSlice";

import CartItem from "./CartItem";
import SubTotal from "./SubTotal";
const CartItems = ({ cart }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateCartTotal());
  }, [cart]);

  return (
    <section className="flex flex-col items-center gap-3">
      {cart.cartItems?.map((pro, i) => (
        <CartItem key={pro?._id} pro={pro} />
      ))}
      <SubTotal cart={cart} />
    </section>
  );
};

export default CartItems;

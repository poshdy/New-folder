import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "../components/Cart/EmptyCart";
import CartItems from "../components/Cart/CartItems";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-full my-24 ">
      <div className="container">
        {cart.cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItems cart={cart} />
        )}
      </div>
    </div>
  );
};

export default Cart;

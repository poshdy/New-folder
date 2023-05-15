import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart , AiOutlineClose } from "react-icons/ai";;
import { useSelector } from "react-redux";
import Fav from "./Fav";
import EmptyFav from "./EmptyFav";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const [fav, setFav] = useState(false);

  const Favs = useSelector((state) => state.cart);

  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className="w-full z-50 sticky top-0 py-3">
      <div
        className={
          color
            ? "container flex items-center justify-between py-3 bg-black/80 text-white rounded-full p-3 duration-500 ease-in-out"
            : "container flex items-center justify-between py-3 duration-500 "
        }
      >
        <CiMenuBurger
          className="cursor-pointer"
          onClick={() => setNav(!nav)}
          size={25}
        />

        <Link to={"/"}>
          <h1 className=" text-2xl md:text-4xl font-black">SNIPER.SNEAKER.</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link to={"/cart"}>
            <BsBag size={20} />
          </Link>
          <AiOutlineHeart onClick={() => setFav(!fav)} size={20} />
        </div>
      </div>
      <div
        className={
          nav
            ? "w-[150px] h-[200px] rounded-md bg-black/90  text-white flex flex-col justify-center items-center absolute left-0  md:left-[150px] duration-500 ease-in-out "
            : "absolute top-[-500px] duration-500 "
        }
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <div
        className={
          fav
            ? "bg-[#222222] absolute w-[50%] top-0 right-0 h-screen shadow-sm shadow-black/25 duration-500 ease-in-out"
            : "hidden"
        }
      >
        <AiOutlineClose
          className=" p-1 hover:bg-black duration-200 cursor-pointer"
          size={30}
          color="white"
          onClick={() => setFav(!fav)}
        />
        {Favs?.favItems.length === 0 ? (<EmptyFav />) :(<Fav />)}
      </div>
    </div>
  );
};

export default Navbar;

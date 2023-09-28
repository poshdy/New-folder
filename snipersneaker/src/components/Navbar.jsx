import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart} from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { useSelector } from "react-redux";
import Fav from "./Fav";
import EmptyFav from "./EmptyFav";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [fav, setFav] = useState(false);

  const Favs = useSelector((state) => state.cart);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      className={`w-full z-50 fixed top-0 duration-300 ease-in-out border-b-2 bg-white border-black ${
        color && "bg-white/70"
      }`}
    >
      <nav className="flex items-center justify-around">
        <Link to={"/"}>
          <div className="flex flex-col -space-y-3 font-extrabold text-2xl uppercase">
            <h1>Sniper.</h1>
            <h1>Sneaker</h1>
          </div>
        </Link>
        <div className="hidden md:flex gap-3 items-center font-bold text-sm ">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/cart"}>Cart</Link>
        </div>
        <div className="flex gap-3 items-center ">
          <Link className="flex md:hidden" to={"/shop"}>
            <CiShop size={25} />
          </Link>
          <Link to={"/cart"}>
            <BsBag size={20} />
          </Link>
          <AiOutlineHeart onClick={() => setFav(!fav)} size={20} />
        </div>
      </nav>
      <div
        className={`absolute h-screen w-full md:w-[50%] bg-black duration-300 ease-in-out ${
          fav ? "right-0" : "right-[-500%]"
        }`}
      >
        {Favs?.favItems.length === 0 ? <EmptyFav /> : <Fav />}
      </div>
    </header>
  );
};

export default Navbar;
{
  /* <div
        className={
          color
            ? "container flex items-center justify-between py-3 bg-black/80 text-white rounded-full p-3 duration-500 ease-in-out"
            : "container flex items-center justify-between py-3 duration-500 "
        }
      >
      

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
      
      </div> */
}

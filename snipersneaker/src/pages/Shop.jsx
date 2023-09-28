import React from "react";
import air from "../assets/airforce.png";
import { styles } from "../styles";
import { ProductCard, SortPrice } from "../components";
import { useQuery } from "@tanstack/react-query";
import { Fetcher } from "../Fetcher";
import { urlFor } from "../lib/client";
import { useState } from "react";

const Shop = () => {
  const [state, setState] = useState("");
  const [sort, setSort] = useState("");

  const { data, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => Fetcher(),
  });

  if (isError) {
    return console.error(isError);
  }
  const newData = data.filter((name) => {
    return name === "all" ? name : name.name.toLowerCase().includes(state);
  });

  return (
    <div className="w-full my-16 ">
      <div className="w-[90%] mx-auto bg-[#B7B7B7] border-4 rounded-md border-black">
        <div className="w-full bg-black shadow-md flex h-[300px] justify-center md:justify-between px-3 items-center text-white rounded-b-lg">
          <div>
            <h1 className={`${styles.heroText} text-white  `}>
              SNIPER SNEAKER
            </h1>
            <p className="text-gray-400 text-lg  ">
              Explore top trending sneakers now
            </p>
          </div>
          <img
            className="hidden md:flex md:w-[300px] lg:w-[400px] "
            src={air}
          />
        </div>
        <div className="">
          <div className="flex items-center justify-center pt-1">
            <h3 className="font-bold px-1">Filter By Brand</h3>
            <select
              className="w-fit h-fit bg-black text-white text-center rounded-md outline-none border-none"
              onChange={(e) => setState(e.target.value)}
              name="brand"
            >
              <option value="all">All</option>
              <option value="nike">Nike</option>
              <option value="puma">Puma</option>
              <option value="newbalance">NewBalance</option>
              <option value="adidas">Adidas</option>
              <option value="reebok">Reebok</option>
            </select>
          </div>
          <SortPrice data={data} sort={sort} setSort={setSort} />
        </div>
        <ProductCard data={newData} urlFor={urlFor} />
      </div>
    </div>
  );
};

export default Shop;

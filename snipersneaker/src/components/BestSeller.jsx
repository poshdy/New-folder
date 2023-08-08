import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Fetcher } from "../Fetcher";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const BestSeller = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => Fetcher(),
  });

  const newData = data?.slice(6, 11);

 
  return (
    <div className="w-full my-8 ">
      <div className="container border-b-4 border-b-black">
        <div className="flex items-center justify-between">
          <h1 className="font-bold md:text-4xl text-2xl flex items-center lg:justify-start justify-center">
            Best<span className="font-normal md:text-4xl text-2xl">Seller</span>
          </h1>
          <Link to={'/shop'}>Show More</Link>
        </div>
      </div>
        <ProductCard data={newData} />
    </div>
  );
};

export default BestSeller;

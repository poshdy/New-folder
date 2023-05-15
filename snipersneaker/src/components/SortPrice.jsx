import React, { useState } from "react";
import ProductCard from "./ProductCard";

const SortPrice = ({ sort, setSort, data }) => {
  const [newData, setNewData] = useState();

  const Sorting = (e) => {
    setSort(e.target.value);
    const Filterd = data.sort((a, b) => {
      if (sort === "all") {
        return data;
      }
      if (sort === "low") {
        return b.price - a.price;
      }
      if (sort === "high") {
        return a.price - b.price;
      }
      setNewData(Filterd);
    });
  };

  return (
    <div className=" flex items-center justify-center w-full">
       <h3 className="font-bold px-1">Filter By Price</h3>
        <select className="bg-black text-white rounded-md" value={sort} onChange={Sorting} name="price">
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="high">high</option>
        </select>
      <ProductCard data={newData} />
    </div>
  );
};

export default SortPrice;

import React, { useState } from "react";
import ProductCard from "./ProductCard";

const FilterByBrand = ({ data }) => {
  const [state, setState] = useState("");

  const newData = data.filter((name) => {
    return name === "all" ? name : name.name.toLowerCase().includes(state);
  });

  return (
    <div>
      <div className="">
        <label htmlFor="brand">filter by brand name </label>
        <select
          className="w-20 "
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
      <ProductCard data={newData} />
    </div>
  );
};

export default FilterByBrand;

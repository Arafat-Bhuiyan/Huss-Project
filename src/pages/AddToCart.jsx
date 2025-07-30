import React from "react";
import { MyCart } from "../components/MyCart";

export const AddToCart = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-28 py-3">
      {/* Breadcrumb */}
      <div className=" text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Home / </span>
        <span className="text-black font-bold text-xl">Add to Cart</span>
      </div>
      {/* My Cart */}
      <MyCart />
    </div>
  );
};

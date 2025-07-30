import React from "react";
import MyWishlist from "../components/MyWishlist";

export const Wishlist = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-28 py-3">
      {/* Breadcrumb */}
      <div className=" text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Account / </span>
        <span className="text-black font-bold text-xl">Wishlist</span>
      </div>
      {/* My wishlist */}
      <MyWishlist />
    </div>
  );
};

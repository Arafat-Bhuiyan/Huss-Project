import React from "react";
import smallCpu from "../assets/img/small-cpu.png";
import x from "../assets/img/xbtn.png";
import minus from "../assets/img/minusbtn.png";
import plus from "../assets/img/plusbtn.png";

const product = {
  title: "Intel Core Ultra 5 245K Desktop PC",
  shop: "by Mtech.com",
  price: 2369,
};

export const CartItem = ({ item }) => {
  if (!item) return null;
  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Product Info */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-base sm:text-lg md:text-xl leading-tight">
            {item.product_name}
          </h1>
          <p className="font-normal text-sm text-gray-500">by Mtech.com</p>
          <h3 className="font-bold text-base sm:text-lg md:text-xl mt-1">
            Price: ${item.price}
          </h3>
        </div>
      </div>
      {/* Quantity Controls */}
      <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-center">
        <img
          src={minus}
          alt="Decrease quantity"
          className="cursor-pointer w-6 h-6"
        />
        <p className="text-base font-medium w-4 text-center">{item.quantity}</p>
        <img
          src={plus}
          alt="Increase quantity"
          className="cursor-pointer w-6 h-6"
        />
        <img
          src={x}
          alt="Remove item"
          className="cursor-pointer w-5 h-5 ml-2"
        />
      </div>
    </div>
  );
};

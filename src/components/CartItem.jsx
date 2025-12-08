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

export const CartItem = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Product Info */}
      <div className="flex items-center gap-3 w-full">
        <img
          src={smallCpu}
          alt={product.title}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-base sm:text-lg md:text-xl leading-tight">
            {product.title}
          </h1>
          <p className="font-normal text-sm text-gray-500">{product.shop}</p>
          <h3 className="font-bold text-base sm:text-lg md:text-xl mt-1">
            Price: ${product.price}
          </h3>
        </div>
      </div>
      {/* Quantity Controls */}
      <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-center">
        <img src={minus} alt="Decrease quantity" className="cursor-pointer w-6 h-6" />
        <p className="text-base font-medium w-4 text-center">1</p>
        <img src={plus} alt="Increase quantity" className="cursor-pointer w-6 h-6" />
        <img src={x} alt="Remove item" className="cursor-pointer w-5 h-5 ml-2" />
      </div>
    </div>
  );
};

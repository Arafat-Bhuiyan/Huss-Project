import React from "react";
import smallCpu from "../assets/img/small-cpu.png";
import x from "../assets/img/xbtn.png";
import minus from "../assets/img/minusbtn.png";
import plus from "../assets/img/plusbtn.png";

const product = {
  title: "Intel Core Ultra 5 245K Desktop PC",
  shop: "by ShopNest.com",
  price: 2369,
};

export const CartItem = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex items-start justify-between gap-3">
      <div className="flex gap-3">
        <img src={smallCpu} alt="" />
        <div>
          <h1 className="font-bold text-xl">{product.title}</h1>
          <p className="font-normal text-base">{product.shop}</p>
          <h3 className="font-bold text-xl">Price: ${product.price}</h3>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img src={minus} alt="" />
        <p className="text-base font-medium">1</p>
        <img src={plus} alt="" />
        <img src={x} alt="" />
      </div>
    </div>
  );
};

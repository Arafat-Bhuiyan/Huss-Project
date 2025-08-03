import React from "react";
import bigCPU from "../assets/img/big-cpu.png";
import smallCPU from "../assets/img/small-cpu.png";
import { useNavigate } from "react-router-dom";

export const ProductImgDet = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between gap-14">
      {/* Product Images */}
      <div className="flex flex-col gap-5 w-1/2">
        <img src={bigCPU} alt="PC Main" className="rounded-xl w-full" />
        <div className="flex gap-2 mt-2">
          <img src={smallCPU} alt="" />
          <img src={smallCPU} alt="" />
          <img src={smallCPU} alt="" />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 w-1/2">
        <h1 className="text-3xl font-bold mb-2">
          Intel Core Ultra 5 245K Desktop PC
        </h1>
        <div className="flex justify-between">
          <p className="text-xl text-black font-semibold">
            Price: <span className=" text-yellow-500">$2800</span>
          </p>
          <p className="text-xl text-black font-semibold">
            Status: <span className=" text-yellow-500">In Stock</span>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-xl text-black font-semibold text-left">
            Discount: <span className=" text-yellow-500">15%</span>
          </p>
          <p className="text-xl text-black font-semibold text-start">
            Quantity: <span className=" text-yellow-500">30</span>
          </p>
        </div>
        <p className="text-yellow-500 mt-1">★★★★☆ (127 reviews)</p>

        <h2 className="mt-4 font-bold text-lg">Key Features:</h2>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>AMD Ryzen 5 5600G Processor with Radeon Graphics</li>
          <li>MSI A520M-A Pro AMD Micro-ATX Motherboard</li>
          <li>Team T-CREATE EXPERT 8GB DDR4 3200MHz Desktop RAM</li>
          <li>MP600 256GB M.2 PCIe Gen3 NVMe SSD</li>
        </ul>

        <div className="flex w-full gap-4 mt-6">
          <button
            onClick={() => navigate("/add-to-cart")}
            className="bg-yellow-400 px-6 py-2 rounded-lg font-bold text-xl w-1/2"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate("/add-to-cart")}
            className="bg-black text-white px-6 py-2 rounded-lg font-bold text-xl w-1/2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

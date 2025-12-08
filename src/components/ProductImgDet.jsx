import React from "react";
import bigCPU from "../assets/img/big-cpu.png";
import smallCPU from "../assets/img/small-cpu.png";
import { useNavigate } from "react-router-dom";

export const ProductImgDet = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-14">
      {/* Product Images */}
      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        <img src={bigCPU} alt="PC Main" className="rounded-xl w-full" />
        <div className="flex gap-2 justify-center sm:justify-start">
          <img src={smallCPU} alt="PC thumbnail 1" className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md cursor-pointer" />
          <img src={smallCPU} alt="PC thumbnail 2" className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md cursor-pointer" />
          <img src={smallCPU} alt="PC thumbnail 3" className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md cursor-pointer" />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 w-full lg:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
          Intel Core Ultra 5 245K Desktop PC
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm sm:text-base md:text-lg">
          <p className="text-black font-semibold ">
            Price: <span className=" text-yellow-500">$2800</span>
          </p>
          <p className="text-black font-semibold ">
            Status: <span className=" text-yellow-500">In Stock</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm sm:text-base md:text-lg">
          <p className="text-black font-semibold  text-left">
            Discount: <span className=" text-yellow-500">15%</span>
          </p>
          <p className="text-black font-semibold  text-start">
            Quantity: <span className=" text-yellow-500">30</span>
          </p>
        </div>
        <p className="text-yellow-500 mt-2 text-sm">★★★★☆ (127 reviews)</p>

        <h2 className="mt-4 font-bold text-base">Key Features:</h2>
        <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
          <li>AMD Ryzen 5 5600G Processor with Radeon Graphics</li>
          <li>MSI A520M-A Pro AMD Micro-ATX Motherboard</li>
          <li>Team T-CREATE EXPERT 8GB DDR4 3200MHz Desktop RAM</li>
          <li>MP600 256GB M.2 PCIe Gen3 NVMe SSD</li>
        </ul>

        <div className="flex flex-col min-[420px]:flex-row w-full gap-3 mt-6 text-white">
          <button
            onClick={() => navigate("/wishlist")}
            className="bg-[#FD5757] px-4 py-2.5 rounded-lg font-bold text-base w-full min-[420px]:w-1/3"
          >
            Add Wishlist
          </button>
          <button
            onClick={() => navigate("/add-to-cart")}
            className="bg-yellow-400 px-4 py-2.5 rounded-lg font-bold text-base w-full min-[420px]:w-1/3"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate("/add-to-cart")}
            className="bg-black px-4 py-2.5 rounded-lg font-bold text-base w-full min-[420px]:w-1/3"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

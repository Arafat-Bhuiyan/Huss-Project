import React, { useState } from "react";
import Headphone from "../assets/img/headphone.png";
import controller from "../assets/img/controller.png";
import microscope from "../assets/img/microscope.png";
import laser from "../assets/img/laser.png";
import delete_wishlist from "../assets/img/delete.png";
import left from "../assets/img/left-angle.png";
import right from "../assets/img/right-angle.png";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  {
    name: "Wireless Headphones",
    description: "Premium sound quality with noise cancellation",
    price: "$129.99",
    image: Headphone,
  },
  {
    name: "Digital Laser Level",
    description: "Professional precision measuring tool",
    price: "$89.95",
    image: laser,
  },
  {
    name: "Digital Microscope",
    description: "1000x magnification with LCD display",
    price: "$199.99",
    image: microscope,
  },
  {
    name: "Pro Gaming Controller",
    description: "Customizable buttons with RGB lighting",
    price: "$69.99",
    image: controller,
  },
];

const MyWishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState(
    Array(3).fill(initialProducts).flat()
  );

  const handleDelete = (indexToDelete) => {
    setWishlistItems(wishlistItems.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="py-16 bg-[#f9f6ee]">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          My Wishlist
        </h2>
        <p className="text-gray-600">Your saved favorites, all in one place.</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col relative"
            >
              {/* Close Button */}
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full shadow text-sm flex items-center justify-center"
              >
                <img src={delete_wishlist} alt="" />
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </span>
                  <button
                    onClick={() => navigate("/add-to-cart")}
                    className="bg-[#ffc107] text-white px-4 py-1 rounded hover:bg-[#e6ac00] transition text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="w-full mt-8 flex flex-wrap gap-2 justify-center sm:justify-end">
        <button className="border border-gray-400 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-gray-100">
          <img src={left} alt="left arrow" />
        </button>
        <button className="bg-[#CBA135] text-white shadow p-2 rounded w-8 h-8 flex justify-center items-center">
          1
        </button>
        <button className="border border-gray-400 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-gray-100">
          2
        </button>
        <button className="border border-gray-400 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-gray-100">
          3
        </button>
        <div className="px-2 flex items-center">...</div>
        <button className="border border-gray-400 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-gray-100">
          7
        </button>
        <button className="border border-gray-400 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-gray-100">
          <img src={right} alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default MyWishlist;

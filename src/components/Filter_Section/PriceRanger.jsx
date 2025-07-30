import React, { useState } from "react";

export const PriceRanger = () => {
  const [minPrice, setMinPrice] = useState(0); // Minimum price state (starts at 0)
  const [maxPrice, setMaxPrice] = useState(299000); // Maximum price state (starts at 299000)

  // Handle changes in range slider
  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    if (name === "min") {
      setMinPrice(Math.min(value, maxPrice)); // Prevent minPrice exceeding maxPrice
    } else if (name === "max") {
      setMaxPrice(Math.max(value, minPrice)); // Prevent maxPrice being less than minPrice
    }
  };
  return (
    <div>
      <h3 className="font-semibold text-base p-2.5 border-b border-gray-300">
        Price Range
      </h3>

      {/* Yellow price range slider */}
      <div className="my-4 px-9">
        {/* Custom Yellow Range Slider with Two Circular Knobs */}
        <div className="relative w-full h-3 ml-2">
          {/* Range Track */}
          <input
            type="range"
            min="0"
            max="299000"
            step="1000"
            name="min"
            value={minPrice}
            onChange={handleRangeChange}
            className="absolute top-0 left-[-15px] w-full h-3 bg-yellow-400 rounded-lg appearance-none"
          />

          <input
            type="range"
            min="0"
            max="299000"
            step="1000"
            name="max"
            value={maxPrice}
            onChange={handleRangeChange}
            className="absolute top-0 left-0 w-full h-3 bg-yellow-400 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* Filter Boxes */}
      <div className="flex justify-between items-center space-x-4 p-4">
        {/* First Box */}
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="0"
          className="w-1/2 text-base font-medium px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Second Box */}
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="2,99,000"
          className="w-1/2 text-base font-medium px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </div>
  );
};

import React, { useState, useCallback } from "react";

export const PriceRanger = () => {
  const MIN = 0;
  const MAX = 299000;
  const STEP = 1000;

  const [minPrice, setMinPrice] = useState(MIN);
  const [maxPrice, setMaxPrice] = useState(MAX);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - STEP);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + STEP);
    setMaxPrice(value);
  };

  // Calculate the percentage for the background gradient
  const getBackgroundSize = useCallback(() => {
    const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
    const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;
    return {
      background: `linear-gradient(to right, #d1d5db ${minPercent}%, #fbbd23 ${minPercent}%, #fbbd23 ${maxPercent}%, #d1d5db ${maxPercent}%)`,
    };
  }, [minPrice, maxPrice]);

  // Format numbers with commas for better readability
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="p-4">
      {/* Price Range Slider */}
      <div className="relative h-10 flex items-center">
        <div className="relative w-full">
          {/* Combined track for both sliders */}
          <div
            className="absolute w-full h-1.5 rounded-lg"
            style={getBackgroundSize()}
          />
          {/* Min price slider */}
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={minPrice}
            onChange={handleMinChange}
            className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto"
            aria-label="Minimum Price"
          />
          {/* Max price slider */}
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto"
            aria-label="Maximum Price"
          />
        </div>
      </div>

      {/* Price Input Boxes */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
        {/* Min Price Input */}
        <div className="relative w-full sm:w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="text"
            value={formatPrice(minPrice)}
            readOnly
            className="w-full text-sm font-medium pl-7 pr-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50"
            aria-label="Minimum price display"
          />
        </div>

        {/* Max Price Input */}
        <div className="relative w-full sm:w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="text"
            value={formatPrice(maxPrice)}
            readOnly
            className="w-full text-sm font-medium pl-7 pr-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50"
            aria-label="Maximum price display"
          />
        </div>
      </div>
      <style>{`
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; background-color: #fbbd23; border: 2px solid white; border-radius: 50%; cursor: pointer; margin-top: -6px; box-shadow: 0 0 2px rgba(0,0,0,0.5); }
        input[type="range"]::-moz-range-thumb { width: 16px; height: 16px; background-color: #fbbd23; border: 2px solid white; border-radius: 50%; cursor: pointer; box-shadow: 0 0 2px rgba(0,0,0,0.5); }
      `}</style>
    </div>
  );
};

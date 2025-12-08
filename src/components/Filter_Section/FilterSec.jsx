import { useState } from "react";
import { PriceRanger } from "./PriceRanger";

// Sample data (this can be dynamically fetched from an API)
const sampleData = {
  Brand: [
    "ASUS ROG",
    "HP Omen",
    "Gigabyte AORUS",
    "iBUYPOWER",
    "MSI",
    "Alienware",
    "Corsair",
  ],
  Availability: ["In Stock", "Out of Stock", "Pre-order"],
  Processor: ["Intel", "AMD", "Qualcomm", "Apple M1"],
  RAM: ["8GB", "16GB", "32GB", "64GB"],
  SSD: ["128GB", "256GB", "512GB", "1TB"],
  Graphics: ["NVIDIA", "AMD", "Integrated", "Intel Iris"],
};

// Helper component to render a filter section with checkboxes
// This avoids code repetition and keeps the main component clean.
const FilterSection = ({ title, options }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <h3 className="font-semibold text-base p-2.5">
      {title}
    </h3>
    <div className="p-4 pt-0 space-y-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={`${title}-${index}`}
            name={title}
            value={option}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor={`${title}-${index}`}
            className="ml-3 text-sm text-gray-600"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const FilterSec = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className="w-full lg:w-72 xl:w-80">
      {/* Header and Mobile Toggle */}
      <div className="bg-black w-full text-white flex justify-between px-4 py-2.5 items-center rounded-t-lg">
        <h2 className="text-lg font-semibold">Filter By</h2>
        <div className="flex items-center gap-4">
          <button className="font-semibold text-xs hover:text-yellow-400">
            Reset
          </button>
          <button
            className="lg:hidden"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            aria-expanded={isFilterVisible}
            aria-controls="filter-options"
          >
            {isFilterVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Filter sections */}
      <div
        id="filter-options"
        className={`bg-white shadow-md rounded-b-lg divide-y divide-gray-200 ${
          isFilterVisible ? "block" : "hidden"
        } lg:block`}
      >
        <div className="border-b border-gray-200">
            <h3 className="font-semibold text-base p-2.5">
                Price Range
            </h3>
            <PriceRanger />
        </div>
        <FilterSection title="Brand" options={sampleData.Brand} />
        <FilterSection title="Availability" options={sampleData.Availability} />
        <FilterSection title="Processor" options={sampleData.Processor} />
        <FilterSection title="RAM" options={sampleData.RAM} />
        <FilterSection title="SSD" options={sampleData.SSD} />
        <FilterSection title="Graphics" options={sampleData.Graphics} />
      </div>
    </div>
  );
};

export default FilterSec;

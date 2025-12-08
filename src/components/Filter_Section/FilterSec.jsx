import { useState } from "react";
import { Link } from "react-router-dom";
import { PriceRanger } from "./PriceRanger";
import { FilterDisclosure } from "./FilterDisclosure";

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
        <FilterDisclosure title="Price Range" defaultOpen={true}>
          <PriceRanger />
        </FilterDisclosure>
        <FilterDisclosure title="Brand" options={sampleData.Brand} />
        <FilterDisclosure title="Availability" options={sampleData.Availability} />
        <FilterDisclosure title="Processor" options={sampleData.Processor} />
        <FilterDisclosure title="RAM" options={sampleData.RAM} />
        <FilterDisclosure title="SSD" options={sampleData.SSD} />
        <FilterDisclosure title="Graphics" options={sampleData.Graphics} />
      </div>
    </div>
  );
};

export default FilterSec;

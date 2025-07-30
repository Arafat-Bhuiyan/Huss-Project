import { Link } from "react-router-dom";
import { PriceRanger } from "./priceRanger";
import { FilterWithCheckbox } from "./FilterWithCheckbox";

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
  return (
    <div className="w-full">
      <div className="bg-black w-full text-white flex justify-between px-4 py-2.5 items-center rounded-t-xl">
        <h2 className="text-base font-semibold">Filter By</h2>
        <p>
          <Link className="font-semibold text-xs">Reset</Link>
        </p>
      </div>
      <div className="shadow-md bg-white h-52 mb-2 rounded-b-xl">
        <PriceRanger />
      </div>
      <div className="my-4 shadow-md bg-white mb-2 rounded-xl">
        <FilterWithCheckbox
          title="Availability"
          options={sampleData.Availability}
        />
      </div>
      <div className="my-4 shadow-md bg-white mb-2 rounded-xl">
        <FilterWithCheckbox title="Processor" options={sampleData.Processor} />
      </div>
      <div className="my-4 shadow-md bg-white mb-2 rounded-xl">
        <FilterWithCheckbox title="RAM" options={sampleData.RAM} />
      </div>
      <div className="my-4 shadow-md bg-white mb-2 rounded-xl">
        <FilterWithCheckbox title="SSD" options={sampleData.SSD} />
      </div>
      <div className="my-4 shadow-md bg-white mb-2 rounded-xl">
        <FilterWithCheckbox title="Graphics" options={sampleData.Graphics} />
      </div>
    </div>
  );
};

export default FilterSec;

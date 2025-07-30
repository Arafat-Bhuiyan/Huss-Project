import { useState } from "react";

export const FilterWithCheckbox = ({ title, options }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Handle checkbox changes
  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        : [...prevSelectedItems, item]
    );
  };

  return (
    <div>
      {/* Dynamic Title */}
      <h3 className="font-semibold text-base p-2.5 border-b border-gray-300">
        {title}
      </h3>

      {/* Dynamic Checkboxes */}
      <div className="p-4">
        {options.map((item) => (
          <div key={item} className="flex items-center space-x-2 gap-2 pt-1.5">
            <input
              type="checkbox"
              id={item}
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
              className="form-checkbox h-4 w-4 text-yellow-400"
            />
            <label htmlFor={item} className="text-sm font-medium text-gray-700">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};



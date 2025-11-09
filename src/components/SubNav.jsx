import { useState, useEffect, useRef } from "react";
import HomeIcon from "../assets/img/icons/home-icon.png";
import goArrow from "../assets/img/icons/go-arrow.png";
import { Link } from "react-router-dom";

const subNavItems = [
  {
    name: "Survey Equipment",
    subCategories: ["GPS", "Theodolite", "Laser Scanner"],
  },
  {
    name: "Testing & Lab Equipment",
    subCategories: ["Soil Test", "Concrete Test", "Water Test"],
  },
  {
    name: "Electronics Equipment",
    subCategories: ["Multimeter", "Oscilloscope", "Soldering Tools"],
  },
  {
    name: "Gaming Equipment",
    subCategories: ["Gaming Mouse", "Headset", "Graphics Card"],
  },
  {
    name: "Accessories Equipment",
    subCategories: ["Cables", "Adapters", "Mounts"],
  },
];

const SubNavBar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRef = useRef(null);

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // toggle same index
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="mx-auto flex items-center gap-6 px-28 py-3 relative">
        {/* Home */}
        <div className="flex items-center text-base font-medium text-gray-800 cursor-pointer">
          <Link to="/">
            <img src={HomeIcon} alt="Home" className="w-5 h-5" />
          </Link>
        </div>

        {/* Other Menu Items */}
        {subNavItems.map((item, index) => (
          <div key={index} className="relative" ref={openIndex === index ? dropdownRef : null}>
            <div
              className="text-[16px] font-medium text-gray-800 cursor-pointer hover:text-yellow-500 transition"
              onClick={() => handleClick(index)}
            >
              {item.name}
            </div>

            {/* Dropdown (only if clicked) */}
            {openIndex === index && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 shadow-lg z-50">
                <div className="bg-black text-white px-4 py-2 rounded-t text-start">
                  {item.name}
                </div>
                <ul className="bg-white rounded-b">
                  {item.subCategories.map((sub, i) => (
                    <div
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                      key={i}
                    >
                      <li className="w-full list-none">{sub}</li>
                      <div>
                        <img
                          src={goArrow}
                          alt="Go Arrow"
                          className="mr-2 w-3 h-3"
                        />
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavBar;

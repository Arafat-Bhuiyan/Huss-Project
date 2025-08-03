import { useState, useEffect, useRef } from "react";
import downArrow from "../../assets/img/downArrow.png";
import upArrow from "../../assets/img/upArrow.png";

const locations = [
  { code: "home", name: "Home" },
  { code: "work", name: "Work" },
  { code: "other", name: "Other" },
];

export const LocationSelection = () => {
  const [selected, setSelected] = useState(locations[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mt-5" ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between gap-2 items-center px-4 py-2 bg-white shadow rounded-xl cursor-pointer"
      >
        <p>{selected.name}</p>
        {!open ? <img src={downArrow} alt="" /> : <img src={upArrow} alt="" />}
      </div>

      {open && (
        <div className="absolute top-10 left-0 mt-1.5 w-full rounded-xl shadow-lg">
          {locations.map((location) => (
            <div
              key={location.code}
              onClick={() => {
                setSelected(location);
                setOpen(false);
              }}
              className={`flex items-center px-4 py-2 cursor-pointer rounded-sm mt-0.5 transition-all duration-300 ${
                selected.code === location.code
                  ? "bg-gray-50 mt-2"
                  : "bg-gray-200 hover:bg-amber-400"
              }`}
            >
              {location.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

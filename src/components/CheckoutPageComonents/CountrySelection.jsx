import { useState, useEffect, useRef } from "react";
import flag from "../../assets/img/flag.png";
import downArrow from "../../assets/img/downArrow.png";

const countries = [
  { code: "AU", name: "Australia", flag: flag },
  { code: "US", name: "United States", flag: flag },
  { code: "CA", name: "Canada", flag: flag },
  { code: "GB", name: "United Kingdom", flag: flag },
  { code: "BD", name: "Bangladesh", flag: flag },
];

export const CountrySelection = () => {
  const [selected, setSelected] = useState(countries[4]); // Default to Bangladesh
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Dropdown এর বাহিরে ক্লিক করলে বন্ধ করার জন্য useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative w-full" ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center cursor-pointer px-4 py-2.5 bg-[#f9f6ee] shadow rounded-xl border border-transparent focus-within:ring-yellow-500 focus-within:border-yellow-500"
      >
        <img src={selected.flag} alt={selected.name} className="w-5 h-5" />
        <img src={downArrow} alt="" />
      </div>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-full rounded-xl bg-[#f9f6ee] shadow-lg z-10 max-h-48 overflow-y-auto">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex gap-2 items-center px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              <img src={country.flag} alt={country.name} className="w-5 h-5" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

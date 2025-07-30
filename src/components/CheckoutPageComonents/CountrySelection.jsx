import { useState, useEffect } from "react";
import flag from "../../assets/img/flag.png";
import downArrow from "../../assets/img/downArrow.png";

const countries = [
  { code: "AU", name: "Australia", flag: flag },
  // Add more countries here
];

export const CountrySelection = () => {
  const [selected, setSelected] = useState(countries[0]); // ডিফল্ট AU
  const [open, setOpen] = useState(false);

  // Dropdown এর বাহিরে ক্লিক করলে বন্ধ করার জন্য useEffect
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
    <div className="relative mt-5">
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center px-4 py-2 bg-[#f9f6ee] shadow  rounded-xl"
      >
        <img src={selected.flag} alt={selected.name} className="w-5 h-5" />
        <img src={downArrow} alt="" />
      </div>

      {open && (
        <div className="absolute top-9 left-1.5 mt-1.5 rounded-xl bg-[#f9f6ee] shadow-lg">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex gap-2 items-center px-4 py-2 bg-[#f9f6ee] shadow  rounded-xl"
            >
              <img src={country.flag} alt={country.name} className="w-5 h-5" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

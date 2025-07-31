import { useState, useEffect, useRef } from "react";
import downArrow from "../../assets/img/downArrow.png";

const orders = [
  { id: "1000", name: "Select an order..." },
  { id: "1001", name: "Order #1001" },
  { id: "1002", name: "Order #1002" },
  { id: "1003", name: "Order #1003" },
];

export const OrderSelection = ({ selectedOrder, onChange }) => {
  const [selected, setSelected] = useState(
    orders.find((o) => o.id === selectedOrder) || null
  );
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (order) => {
    setSelected(order);
    setOpen(false);
    onChange?.(order.id);
  };

  return (
    <div className="relative mt-2 w-full" ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between gap-2 items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow cursor-pointer"
      >
        <p className="text-gray-800 text-base">
          {selected?.name || "Select an order..."}
        </p>
        <img src={downArrow} alt="Toggle" className="" />
      </div>

      {open && (
        <div className="absolute z-10 w-full bg-white mt-2 rounded-xl shadow">
          {orders.map((order) => (
            <div
              key={order.id}
              onClick={() => handleSelect(order)}
              className={`px-4 py-2 cursor-pointer text-gray-800 rounded hover:bg-amber-400 transition-all duration-200 ${
                selected?.id === order.id ? "bg-gray-50 mt-2" : ""
              }`}
            >
              {order.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

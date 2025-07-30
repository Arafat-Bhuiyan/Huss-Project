import { useState } from "react";
import ShippingForm from "./ShippingForm";

export const CheckoutUser = () => {
  const [addNewButton, setAddNewButton] = useState(false);
  const handleAddButton = () => {
    setAddNewButton(true);
  };
  return (
    <div>
      {!addNewButton ? (
        <div className="bg-white rounded-lg p-4 shadow flex flex-col items-start justify-between gap-3">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-medium">Safi Mahmud</h1>
            <div className="flex gap-2">
              <button className="bg-yellow-500 hover:bg-yellow-600 font-bold text-base px-3 py-1 text-white rounded-xl">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 font-bold text-base px-3 py-1 text-white rounded-xl">
                Delete
              </button>
            </div>
          </div>

          <p className="text-xl font-medium">
            Home: <span>xyz, xyz, xyz</span>
          </p>
          <p className="text-xl font-medium">
            Collect your parcel from the nearest pick-up Point.
          </p>
          <div className="w-full pt-7 pb-6">
            <button onClick={handleAddButton} className="w-full flex items-center justify-center rounded-lg py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white text-xl font-bold shadow">
              Add New Address
            </button>
          </div>
        </div>
      ) : (
        <ShippingForm />
      )}
    </div>
  );
};

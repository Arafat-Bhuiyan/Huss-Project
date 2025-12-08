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
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow flex flex-col items-start justify-between gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3">
            <h1 className="text-xl sm:text-2xl font-medium">Safi Mahmud</h1>
            <div className="flex gap-2 self-end sm:self-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 font-bold text-sm sm:text-base px-3 py-1.5 text-white rounded-lg">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 font-bold text-sm sm:text-base px-3 py-1.5 text-white rounded-lg">
                Delete
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg font-medium">
            Home: <span>xyz, xyz, xyz</span>
          </p>
          <p className="text-base sm:text-lg font-medium text-gray-600">
            Collect your parcel from the nearest pick-up Point.
          </p>
          <div className="w-full pt-4 sm:pt-7 pb-2 sm:pb-6">
            <button
              onClick={handleAddButton}
              className="w-full flex items-center justify-center rounded-lg py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white text-lg sm:text-xl font-bold shadow"
            >
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

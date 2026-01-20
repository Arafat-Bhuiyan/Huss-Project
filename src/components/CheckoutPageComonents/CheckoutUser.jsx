import ShippingForm from "./ShippingForm";
import { useState } from "react";

export const CheckoutUser = () => {
  const [addNewButton, setAddNewButton] = useState(false);

  // Static Data for Design
  const shippingInfo = {
    fullName: "Sarif Uddin Bhuiyan",
    phoneNumber: "+1 (674) 443-6502",
    emailAddress: "sarif@gmail.com",
    streetAddress: "Mirpur",
    apartmentName: "Dream Place",
    floorNumber: "5",
    flatNumber: "A",
    city: "Dhaka",
    zipCode: "1216",
  };

  const handleAddButton = () => {
    setAddNewButton(true);
  };

  // 1. Edit Mode (Form)
  if (addNewButton) {
    return (
      <div className="relative">
        <button
          onClick={() => setAddNewButton(false)}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black font-bold"
        >
          Close
        </button>
        <ShippingForm onClose={() => setAddNewButton(false)} />
      </div>
    );
  }

  // 2. View Mode (Summary)
  if (shippingInfo) {
    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow flex flex-col items-start justify-between gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3">
          <h1 className="text-xl sm:text-2xl font-medium">
            {shippingInfo.fullName}
          </h1>
          <div className="flex gap-2 self-end sm:self-center">
            <button
              onClick={handleAddButton}
              className="bg-yellow-500 hover:bg-yellow-600 font-bold text-sm sm:text-base px-3 py-1.5 text-white rounded-lg"
            >
              Edit
            </button>
          </div>
        </div>

        <p className="text-base sm:text-lg font-medium">
          Address:{" "}
          <span>
            {shippingInfo.streetAddress}
            {shippingInfo.apartmentName
              ? `, ${shippingInfo.apartmentName}`
              : ""}
            {shippingInfo.city ? `, ${shippingInfo.city}` : ""}
            {shippingInfo.zipCode ? `, ${shippingInfo.zipCode}` : ""}
          </span>
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-600">
          Phone: {shippingInfo.phoneNumber}
        </p>
      </div>
    );
  }

  // 3. Empty State (Visible only if shippingInfo is null, which currently is not)
  return (
    <div className="bg-white rounded-lg p-10 shadow flex flex-col items-center">
      <p className="text-xl font-medium mb-6">No shipping address saved yet.</p>
      <button
        onClick={handleAddButton}
        className="w-full sm:w-auto px-10 rounded-lg py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white text-lg sm:text-xl font-bold shadow"
      >
        Add New Address
      </button>
    </div>
  );
};

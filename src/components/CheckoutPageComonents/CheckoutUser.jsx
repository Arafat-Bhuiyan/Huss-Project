import ShippingForm from "./ShippingForm";
import { useState, useEffect } from "react";
import { useGetProfileQuery } from "../../redux/api/authApi";

export const CheckoutUser = () => {
  const [addNewButton, setAddNewButton] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);

  // Fetch profile data
  const {
    data: profileData,
    isLoading,
    isError,
    refetch,
  } = useGetProfileQuery();

  // Load shipping address from localStorage on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem("shippingAddress");
    if (savedAddress) {
      setShippingAddress(JSON.parse(savedAddress));
    }
  }, []);

  const handleAddButton = () => {
    setAddNewButton(true);
  };

  const handleCloseForm = () => {
    setAddNewButton(false);
    refetch(); // Refetch profile data after form closes

    // Reload shipping address from localStorage
    const savedAddress = localStorage.getItem("shippingAddress");
    if (savedAddress) {
      setShippingAddress(JSON.parse(savedAddress));
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-10 shadow flex flex-col items-center">
        <p className="text-xl font-medium">Loading profile data...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="bg-white rounded-lg p-10 shadow flex flex-col items-center">
        <p className="text-xl font-medium text-red-600 mb-6">
          Failed to load profile data
        </p>
        <button
          onClick={() => refetch()}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  // 1. Edit Mode (Form)
  if (addNewButton) {
    return (
      <div className="relative">
        <button
          onClick={handleCloseForm}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black font-bold z-10"
        >
          Close
        </button>
        <ShippingForm
          onClose={handleCloseForm}
          profileData={profileData}
          setShippingAddress={setShippingAddress}
        />
      </div>
    );
  }

  // 2. View Mode (Summary) - Display shipping address or profile data
  if (profileData) {
    // Use shipping address if available, otherwise use profile data
    const displayData = shippingAddress || profileData;

    // Construct full name
    const fullName = shippingAddress
      ? shippingAddress.full_name
      : `${profileData.first_name || ""} ${profileData.last_name || ""}`.trim();

    // Construct address string
    let addressString = "";
    if (shippingAddress) {
      const parts = [
        shippingAddress.street_address,
        shippingAddress.apartment_name,
        shippingAddress.floor_number
          ? `Floor: ${shippingAddress.floor_number}`
          : "",
        shippingAddress.flat_number
          ? `Flat: ${shippingAddress.flat_number}`
          : "",
        shippingAddress.city,
        shippingAddress.zip_code,
      ].filter(Boolean);
      addressString = parts.join(", ");
    } else {
      addressString = profileData.address || "No address provided";
    }

    const phone = shippingAddress
      ? shippingAddress.phone
      : profileData.phone || "No phone number";
    const email = shippingAddress
      ? shippingAddress.email
      : profileData.email || "No email";

    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow flex flex-col items-start justify-between gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3">
          <h1 className="text-xl sm:text-2xl font-medium">
            {fullName || "User"}
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
          Address: <span>{addressString}</span>
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-600">
          Phone: {phone}
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-600">
          Email: {email}
        </p>
      </div>
    );
  }

  // 3. Empty State
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

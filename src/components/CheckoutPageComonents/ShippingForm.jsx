import { useState, useEffect } from "react";
import { useUpdateShippingAddressMutation } from "../../redux/api/authApi";
import { toast } from "react-toastify";

const ShippingForm = ({ onClose, profileData, setShippingAddress }) => {
  const [updateShippingAddress, { isLoading }] =
    useUpdateShippingAddressMutation();

  // Initialize form data from profileData
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    streetAddress: "",
    apartmentName: "",
    floorNumber: "",
    flatNumber: "",
    city: "",
    zipCode: "",
    billingInfoSame: true,
  });

  // Pre-populate form when profileData is available
  useEffect(() => {
    if (profileData) {
      const fullName =
        `${profileData.first_name || ""} ${profileData.last_name || ""}`.trim();

      setFormData({
        fullName: fullName || "",
        phoneNumber: profileData.phone || "",
        emailAddress: profileData.email || "",
        streetAddress: profileData.address || "",
        apartmentName: "",
        floorNumber: "",
        flatNumber: "",
        city: "",
        zipCode: "",
        billingInfoSame: true,
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload according to API structure
    const payload = {
      full_name: formData.fullName,
      email: formData.emailAddress,
      phone: formData.phoneNumber,
      street_address: formData.streetAddress,
      apartment_name: formData.apartmentName,
      floor_number: formData.floorNumber,
      flat_number: formData.flatNumber,
      city: formData.city,
      zip_code: formData.zipCode,
    };

    try {
      const response = await updateShippingAddress(payload).unwrap();

      // Show success message
      toast.success(response.message || "Address updated successfully!");

      // Save the updated address data to localStorage
      if (response.data) {
        localStorage.setItem("shippingAddress", JSON.stringify(response.data));

        // Update parent component state
        if (setShippingAddress) {
          setShippingAddress(response.data);
        }
      }

      // Close the form after successful update
      if (onClose) onClose();
    } catch (error) {
      // Handle error
      console.error("Failed to update address:", error);
      toast.error(
        error?.data?.message || "Failed to update address. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 sm:p-6 md:p-8 lg:p-12 w-full bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Shipping Information
      </h2>

      <div className="grid grid-cols-1 gap-y-4 mb-6">
        {/* name, country, phone */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-end w-full">
          <div className="w-full md:w-2/3">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="mt-1 text-sm font-medium w-full px-4 py-2.5 bg-[#f9f6ee] shadow rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="w-full md:w-auto flex-grow">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="emailAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter email address"
            className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="House number and street name"
            className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="w-full">
            <label
              htmlFor="apartmentName"
              className="block text-sm font-medium text-gray-700"
            >
              Apartment Name
            </label>
            <input
              type="text"
              id="apartmentName"
              name="apartmentName"
              value={formData.apartmentName}
              onChange={handleChange}
              placeholder="Enter apartment name"
              className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div className="w-full sm:w-32">
            <label
              htmlFor="floorNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Floor Number
            </label>
            <input
              type="text"
              id="floorNumber"
              name="floorNumber"
              value={formData.floorNumber}
              onChange={handleChange}
              placeholder="00"
              className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="w-full">
            <label
              htmlFor="flatNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Flat Number
            </label>
            <input
              type="text"
              id="flatNumber"
              name="flatNumber"
              value={formData.flatNumber}
              onChange={handleChange}
              placeholder="00"
              className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="w-full">
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter zip code"
              className="mt-1 block text-sm font-medium w-full px-4 py-2.5 shadow bg-[#f9f6ee] rounded-xl focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div className="w-full p-4 shadow bg-[#f9f6ee] rounded-xl">
          <h1 className="font-medium text-lg sm:text-xl">
            Billing Information:
          </h1>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="billingInfoSame"
              name="billingInfoSame"
              checked={formData.billingInfoSame}
              onChange={() =>
                setFormData({
                  ...formData,
                  billingInfoSame: !formData.billingInfoSame,
                })
              }
              className="text-yellow-500"
              required
            />
            <label
              htmlFor="billingInfoSame"
              className="text-base font-normal text-gray-700"
            >
              Same as shipping address
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 mt-5 mb-8 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Updating..." : "Save Address"}
      </button>
    </form>
  );
};

export default ShippingForm;

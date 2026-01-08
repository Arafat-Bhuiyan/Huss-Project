import React, { useState, useEffect } from "react";
import personalInfoLogo from "../assets/img/personal-information.png";
import { toast } from "react-toastify";
import { useGetProfileQuery, useUpdateProfileMutation } from "../redux/api/authApi";

export const ProfileSettingsMain = () => {
  const { data: userData, refetch } = useGetProfileQuery();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phone: "",
    address: "",
    photo: null, // file object
  });

  // Populate form when data is fetched
  useEffect(() => {
    if (userData) {
      setFormData((prev) => ({
        ...prev,
        fullName: userData.full_name || `${userData.first_name} ${userData.last_name}`.trim(),
        emailAddress: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
      }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("full_name", formData.fullName);
    submitData.append("phone", formData.phone);
    submitData.append("address", formData.address);
    // Only append photo if a new one is selected
    if (formData.photo) {
      submitData.append("picture", formData.photo);
    }

    try {
      await updateProfile(submitData).unwrap();
      toast.success("Profile info saved successfully!");
      refetch(); // Refresh the data
      setFormData((prev) => ({ ...prev, photo: null })); // Reset file input
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="my-10 w-full">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Profile Settings
        </h2>
      </div>

      {/* Profile Information */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-xl flex flex-col gap-3">
          <img src={personalInfoLogo} className="w-80 h-7 mb-2" alt="" />
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-xl font-bold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 block text-xl font-normal w-full px-4 py-2 shadow bg-white rounded-xl border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-xl font-bold text-gray-700 mt-3"
              >
                Email
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 block text-xl font-normal w-full px-4 py-2 shadow bg-gray-100 rounded-xl border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 cursor-not-allowed"
                readOnly
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-xl font-bold text-gray-700 mt-3"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-2 block text-xl font-normal w-full px-4 py-2 shadow bg-white rounded-xl border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-xl font-bold text-gray-700 mt-3"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="mt-2 block text-xl font-normal w-full px-4 py-2 shadow bg-white rounded-xl border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            {/* Profile Photo */}
            <div className="mt-4">
              <label className="block text-xl font-bold text-gray-700 mb-2">
                Profile Photo
              </label>

              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                className="hidden"
              />

              <div className="flex w-full">
                {/* Custom styled label */}
                <label
                  htmlFor="photo"
                  className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-l-xl cursor-pointer text-base font-medium whitespace-nowrap"
                >
                  Choose File
                </label>

                {/* File name display */}
                <div className="flex items-center px-4 py-2 text-gray-600 text-base font-medium w-full shadow bg-white rounded-r-xl border border-gray-300">
                  {formData.photo ? `${formData.photo.name}` : "No File Chosen"}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold text-2xl py-2.5 my-7 ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"} text-white rounded-xl shadow`}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

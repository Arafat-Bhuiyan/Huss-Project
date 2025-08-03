import React, { useState } from "react";
import personalInfoLogo from "../assets/img/personal-information.png";
import { toast } from "react-toastify";

export const ProfileSettingsMain = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phone: "",
    address: "",
    photo: null, // file object
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", formData.fullName);
    console.log("Email:", formData.emailAddress);
    console.log("Phone Number:", formData.phone);
    console.log("Address:", formData.address);
    console.log("Profile Photo:", formData.photo); // file object

    toast.success("Profile info saved successfully!");
    setFormData({
      fullName: "",
      emailAddress: "",
      phone: "",
      address: "",
      photo: null, // file object
    });
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
                className="mt-2 block text-xl font-normal w-full px-4 py-2 shadow bg-white rounded-xl border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
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
                required
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
              className="w-full font-bold text-2xl py-2.5 my-7 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

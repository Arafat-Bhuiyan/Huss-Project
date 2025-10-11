import React, { useState } from "react";
import { toast } from "react-toastify";

export const CustomerSupportMain = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    problem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login:", formData.emailAddress);
    console.log("Problem:", formData.problem);
    // Show success toast
    toast.success("Message sent successfully!");
    setFormData({
      emailAddress: "",
      problem: "",
    });
  };

  return (
    <div className="my-10">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Customer Support
        </h2>
      </div>

      {/* Need Help */}
      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-5xl my-8">Need Help?</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white py-3 px-5 w-full shadow rounded-xl"
        >
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-2xl font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Enter email address"
              className="mt-2 block text-base font-normal w-full px-4 py-2 shadow bg-white rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="problem"
              className="mt-3 block text-2xl font-semibold text-gray-700"
            >
              Problem
            </label>
            <textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              className="mt-2 block text-base font-normal w-full px-4 py-2 shadow bg-white rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-60 h-14 font-semibold text-2xl py-3 mt-5 mb-8 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

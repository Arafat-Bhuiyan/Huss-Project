import React from "react";
import { CustomerSupportMain } from "../components/CustomerSupportMain";

export const CustomerSupport = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-28 py-3">
      {/* Breadcrumb */}
      <div className=" text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Home / </span>
        <span className="text-black font-bold text-xl">Customer Support</span>
      </div>

      {/* Customer Support Main Section */}
      <CustomerSupportMain />
    </div>
  );
};

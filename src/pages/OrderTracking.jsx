import React from "react";
import { TrackOrderID } from "../components/OrderTrackingPageComponent/TrackOrderID";

export const OrderTracking = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-4 sm:px-6 lg:px-8 xl:px-28 py-3">
      {/* Breadcrumb */}
      <div className="text-left font-medium text-lg sm:text-xl">
        <span className="text-gray-600">Home / </span>
        <span className="text-black font-bold">Add to Cart / </span>
        <span className="text-black font-bold">Checkout / </span>
        <span className="text-black font-bold">Confirm Order / </span>
        <span className="text-black font-bold">Order Tracking</span>
      </div>

      {/* Tracking Order */}
      <TrackOrderID />
    </div>
  );
};

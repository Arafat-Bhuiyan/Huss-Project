import React from "react";
import { TrackOrderID } from "../components/OrderTrackingPageComponent/TrackOrderID";

export const OrderTracking = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-28 py-3">
      {/* Breadcrumb */}
      <div className=" text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Home / </span>
        <span className="text-black font-bold text-xl">Add to Cart / </span>
        <span className="text-black font-bold text-xl">Checkout / </span>
        <span className="text-black font-bold text-xl">Confirm Order / </span>
        <span className="text-black font-bold text-xl">Order Tracking</span>
      </div>

      {/* Tracking Order */}
      <TrackOrderID />
    </div>
  );
};

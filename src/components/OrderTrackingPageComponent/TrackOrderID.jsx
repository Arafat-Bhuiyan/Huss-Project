import React, { useState } from "react";
import { OrderTrackMain } from "./OrderTrackMain";
import { toast } from "react-toastify";


export const TrackOrderID = () => {
  const [showOrderTrack, setShowOrderTrack] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleTrackOrder = () => {
    if (orderId.trim() === "#ORD-1234") {
      setShowOrderTrack(true);
    } else {
      toast.error("Please give your order id", {
        autoClose: 3000,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div>
      {!showOrderTrack ? (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-200 my-12">
          <h1 className="font-semibold text-2xl py-3">Track Your Order</h1>
          <div className="border-b border-gray-300"></div>
          <h1 className="font-semibold text-2xl py-3">Enter your order Id</h1>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full p-2 rounded-xl font-normal text-sm border border-gray-300"
            placeholder="Enter your order id"
          />
          <button
            onClick={handleTrackOrder}
            className="w-full mt-5 font-bold text-xl bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-xl transition"
          >
            Track My Order
          </button>
        </div>
      ) : (
        <OrderTrackMain />
      )}
    </div>
  );
};

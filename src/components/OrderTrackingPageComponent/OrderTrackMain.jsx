import React from "react";
import { TrackOrderSummary } from "./TrackOrderSummary";

export const OrderTrackMain = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Order tracking
        </h2>
        <p className="text-gray-600">
          Track your order and manage delivery details{" "}
        </p>
      </div>

      {/* Middle */}
      <TrackOrderSummary />
    </div>
  );
};

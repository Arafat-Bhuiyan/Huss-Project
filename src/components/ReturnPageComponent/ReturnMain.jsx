import React from "react";
import { PolicyOverview } from "./PolicyOverview";
import { ReturnExchangeForm } from "./ReturnExchange";
import { ScrollRestoration } from "react-router-dom";

export const ReturnMain = () => {
  return (
    <div className="my-10 w-full">
      <ScrollRestoration />
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Return & Return Policy
        </h2>
      </div>
      {/* Return Policy Overview */}
      <PolicyOverview />
      <ReturnExchangeForm />
    </div>
  );
};

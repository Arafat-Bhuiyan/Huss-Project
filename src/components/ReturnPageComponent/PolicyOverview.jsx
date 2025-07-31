import { useEffect, useState } from "react";
import packaging from "../../assets/img/packaging.png";
import assemblyCosts from "../../assets/img/assembly-costs.png";
import returnWindow from "../../assets/img/return-window.png";
import exchange from "../../assets/img/exchange.png";
import shippingVan from "../../assets/img/shipping-van.png";
import refund from "../../assets/img/refund.png";

const mockAPI = [
  {
    title: "7-Day Return Window",
    description: "Returns must be initiated within 7 days of delivery",
    icon: returnWindow,
  },
  {
    title: "Assembly Costs",
    description: "Pc assembly costs are non-refundable",
    icon: assemblyCosts,
  },
  {
    title: "Original Packaging",
    description: "Items must be unused and in original packaging",
    icon: packaging,
  },
  {
    title: "Refund Processing",
    description: "Refunds processed within 3–5 business days",
    icon: refund,
  },
  {
    title: "Free Return Shipping",
    description: "We provide prepaid return labels for all eligible returns",
    icon: shippingVan,
  },
  {
    title: "Exchanges Available",
    description: "Exchange for different size or color when available",
    icon: exchange,
  },
];

export const PolicyOverview = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setPolicies(mockAPI);
    }, 500);
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white shadow rounded-xl p-6">
      <h1 className="font-bold text-3xl text-center py-3">
        Return Policy Overview
      </h1>

      <div className="grid md:grid-cols-2 gap-6 my-5">
        {policies.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.icon} alt="" />
            <div>
              <h4 className="font-semibold text-base">{item.title}</h4>
              <p className="text-gray-600 text-base font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-semibold text-base text-center py-5">
        <a href="">Read Full Return Policy</a>
      </p>
    </div>
  );
};

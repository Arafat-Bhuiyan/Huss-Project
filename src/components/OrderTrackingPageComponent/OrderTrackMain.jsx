import { TrackOrderSummary } from "./TrackOrderSummary";
import { OrderStatus } from "./OrderStatus";
import DeliveryDetailsForm from "./DeliveryDetailsForm";

export const OrderTrackMain = () => {
  return (
    <div className="my-10">
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
      <div className="flex items-center w-full gap-3">
        <div className="w-2/3">
          {/* Order Status */}
          <OrderStatus />
          {/* Delivery Details */}
          <DeliveryDetailsForm />
        </div>
        <div className="w-1/3 flex items-start">
          {" "}
          <TrackOrderSummary />
        </div>
      </div>
    </div>
  );
};

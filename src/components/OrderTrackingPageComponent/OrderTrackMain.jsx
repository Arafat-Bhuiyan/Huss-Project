import { TrackOrderSummary } from "./TrackOrderSummary";
import { OrderStatus } from "./OrderStatus";
import DeliveryDetailsForm from "./DeliveryDetailsForm";

export const OrderTrackMain = () => {
  return (
    <div className="my-6 md:my-10 px-4">
      {/* Header */}
      <div className="text-start mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Order tracking
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Track your order and manage delivery details{" "}
        </p>
      </div>

      {/* Middle */}
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6 lg:items-start">
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {/* Order Status */}
          <OrderStatus />
          {/* Delivery Details */}
          <DeliveryDetailsForm />
        </div>
        <div className="w-full lg:w-1/3">
          {" "}
          <TrackOrderSummary />
        </div>
      </div>
    </div>
  );
};

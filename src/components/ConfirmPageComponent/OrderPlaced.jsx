import tic from "../../assets/img/tic.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSuccessOrderQuery } from "../../redux/api/authApi";

export const OrderPlaced = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const { data, isLoading } = useSuccessOrderQuery(orderId, {
    skip: !orderId,
  });

  const orderDetails = data?.order_details;
  const items = orderDetails?.items || [];
  const summary = orderDetails?.summary;

  const handleTrackOrder = () => {
    navigate("/add-to-cart/checkout/confirm-order/order-tracking");
  };

  const handleContinueShopping = () => {
    navigate("/#products");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 text-xl font-bold">
        Loading order details...
      </div>
    );
  }

  if (!orderId) {
    return (
      <div className="flex flex-col justify-center items-center py-20 gap-4">
        <p className="text-xl font-bold text-red-500">No order ID found.</p>
        <button
          onClick={handleContinueShopping}
          className="px-6 py-2 bg-yellow-400 font-bold rounded-lg"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-white max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-sm">
      <div className="flex flex-col justify-center items-center gap-1 mb-6 sm:mb-10 text-center">
        <div className="rounded-full p-2 bg-[#f8f5ee]">
          <img src={tic} alt="Success" />
        </div>
        <h1 className="font-semibold text-2xl sm:text-3xl">
          Order Placed Successfully!
        </h1>
        <p className="text-sm sm:text-base font-normal">
          Thank You for Your Order
        </p>
      </div>

      <div className="flex flex-col gap-3 justify-start text-sm sm:text-base font-normal">
        <h1 className="font-semibold text-xl sm:text-2xl">Order Details</h1>
        <div className="flex w-full justify-between">
          <p>Order Number</p>
          <p className="font-semibold">{orderDetails?.order_number || "N/A"}</p>
        </div>
        <div className="flex w-full justify-between">
          <p>Estimated Delivery</p>
          <p className="font-semibold">
            {orderDetails?.estimated_delivery || "N/A"}
          </p>
        </div>
      </div>

      <div className="border-b border-gray-300"></div>

      {/* Product Items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="py-1">
            <div className="flex justify-between w-full font-semibold text-base sm:text-lg md:text-xl">
              <h1 className="pr-4">{item.product_name}</h1>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <h3 className="w-full font-normal text-sm sm:text-base text-gray-600">
              QTY: {item.quantity} | Subtotal: ${item.subtotal.toFixed(2)}
            </h3>
          </div>
        ))}
      </div>

      <div className="border-b border-gray-300"></div>

      {/* Summary */}
      <div className="space-y-2 text-base sm:text-lg">
        <div className="flex justify-between font-normal">
          <p>Subtotal ({orderDetails?.items?.length || 0} items)</p>
          <p>${summary?.subtotal?.toFixed(2) || "0.00"}</p>
        </div>
        <div className="flex justify-between font-normal">
          <p>Delivery fee</p>
          <p>${summary?.delivery_fee?.toFixed(2) || "0.00"}</p>
        </div>
        <div className="flex justify-between font-normal">
          <p>Tax</p>
          <p>${summary?.tax?.toFixed(2) || "0.00"}</p>
        </div>
        <div className="flex justify-between font-normal text-green-600">
          <p>Total Discount</p>
          <p>-${summary?.total_discount?.toFixed(2) || "0.00"}</p>
        </div>

        <div className="border-b border-gray-300"></div>

        <div className="flex justify-between items-center pt-2">
          <p className="font-semibold text-xl sm:text-2xl">Total</p>
          <p className="font-semibold text-2xl sm:text-3xl text-yellow-400">
            ${summary?.total_amount?.toFixed(2) || "0.00"}
          </p>
        </div>
      </div>

      <button
        onClick={handleTrackOrder}
        className="flex items-center justify-center rounded-lg py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white text-lg sm:text-xl font-bold shadow transition-colors"
      >
        Track My Order
      </button>
      <button
        onClick={handleContinueShopping}
        className="flex items-center justify-center border rounded-lg py-2.5 border-yellow-400 bg-white hover:bg-gray-50 text-black text-lg sm:text-xl font-bold shadow transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

import tic from "../../assets/img/tic.png";
import { useNavigate } from "react-router-dom";

export const OrderPlaced = () => {
  const product = {
    title: "Intel Core Ultra 5 245K Desktop PC",
    shop: "by Mtech.com",
    price: 2369,
  };
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    navigate("/add-to-cart/checkout/confirm-order/order-tracking");
  };

  const handleContinueShopping = () => {
    navigate("/#products");
  };
  return (
    <div className="flex flex-col gap-4 bg-white max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-1 mb-6 sm:mb-10 text-center">
        <div className="rounded-full p-2 bg-[#f8f5ee]">
          <img src={tic} alt="" />
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
        <div className="flex w-full justify-between ">
          <p>Order ID</p>
          <p>#ORD-7245</p>
        </div>
        <div className="flex w-full justify-between ">
          <p>Estimated Delivery</p>
          <p>Jul 20-07, 2025</p>
        </div>
      </div>

      <div className="border-b border-gray-300"></div>
      {/* Product Items */}
      <div className="space-y-3">
        <div className="py-1">
          <div className="flex justify-between w-full font-semibold text-base sm:text-lg md:text-xl">
            <h1 className="pr-4">{product.title}</h1>
            <p>${product.price}</p>
          </div>
          <h3 className="w-full font-normal text-sm sm:text-base">QTY: 1</h3>
        </div>
        <div className="py-1">
          <div className="flex justify-between w-full font-semibold text-base sm:text-lg md:text-xl">
            <h1 className="pr-4">{product.title}</h1>
            <p>${product.price}</p>
          </div>
          <h3 className="w-full font-normal text-sm sm:text-base">QTY: 1</h3>
        </div>
        <div className="py-1">
          <div className="flex justify-between w-full font-semibold text-base sm:text-lg md:text-xl">
            <h1 className="pr-4">{product.title}</h1>
            <p>${product.price}</p>
          </div>
          <h3 className="w-full font-normal text-sm sm:text-base">QTY: 1</h3>
        </div>
      </div>

      <div className="border-b border-gray-300"></div>
      {/* Summary */}
      <div className="space-y-2 text-base sm:text-lg">
        <div className="flex justify-between font-normal">
        <p>Subtotal (3 items)</p>
        <p>$7000.00</p>
      </div>
        <div className="flex justify-between font-normal">
        <p>Delivery fee</p>
        <p>$80.00</p>
      </div>
        <div className="flex justify-between font-normal">
        <p>Tax</p>
        <p>$50.00</p>
      </div>
        <div className="flex justify-between font-normal">
        <p>Total Discount</p>
        <p>15%</p>
      </div>
      <div className="border-b border-gray-300"></div>
        <div className="flex justify-between items-center pt-2">
          <p className="font-semibold text-xl sm:text-2xl">Total</p>
          <p className="font-semibold text-2xl sm:text-3xl text-yellow-400">
            $7130.00
          </p>
        </div>
      </div>
      <button
        onClick={() => handleTrackOrder()}
        className="flex items-center justify-center rounded-lg py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white text-lg sm:text-xl font-bold shadow"
      >
        Track My Order
      </button>
      <button
        onClick={handleContinueShopping}
        className="flex items-center justify-center border rounded-lg py-2.5 border-yellow-400 bg-white hover:bg-gray-50 text-black text-lg sm:text-xl font-bold shadow"
      >
        Continue Shopping
      </button>
      <div className="py-2 flex flex-col justify-center items-center text-center text-xs sm:text-sm font-medium">
        <p className="text-black">
          By clicking Place Order, you accept Mtech
        </p>
        <p className="text-yellow-400 hover:underline cursor-pointer">
          return & shipping policies
        </p>
      </div>
    </div>
  );
};

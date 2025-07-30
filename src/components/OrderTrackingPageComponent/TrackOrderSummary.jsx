import { CheckoutOrderItems } from "../CheckoutPageComonents/CheckoutOrderItems";
import van from "../../assets/img/van.png";

export const TrackOrderSummary = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-xl">
      <h1 className="font-semibold text-2xl">Order Summary</h1>
      <CheckoutOrderItems />
      <CheckoutOrderItems />
      <CheckoutOrderItems />
      <div className="border-b border-gray-300"></div>

      <div className="flex justify-between font-normal text-xl">
        <p>Subtotal (3 items)</p>
        <p>$7000.00</p>
      </div>
      <div className="flex justify-between font-normal text-xl">
        <p>Delivery fee</p>
        <p>$80.00</p>
      </div>
      <div className="flex justify-between font-normal text-xl">
        <p>Tax</p>
        <p>$50.00</p>
      </div>
      <div className="flex justify-between font-normal text-xl">
        <p>Total Discount</p>
        <p>15%</p>
      </div>
      <div className="border-b border-gray-300"></div>
      <div className="flex justify-between">
        <p className="font-semibold text-2xl">Total</p>
        <p className="font-semibold text-3xl text-yellow-400">$7130.00</p>
      </div>

      <div className="w-full bg-[#FAF8F2] p-4 rounded-xl">
        <div className="mb-2 flex gap-2">
          <img src={van} alt="" />
          <h1 className="font-medium text-sm">Delivery Info</h1>
        </div>
        <div className="font-normal text-xs text-gray-600 flex flex-col justify-start">
          <p>Order: #ORD-7245</p>
          <p>Expected: July 20, 2024</p>
          <p>Carrier: XYZ</p>
        </div>
      </div>

      <button
        onClick={() => handleOrderPlace()}
        className="flex items-center justify-center rounded-lg py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white text-xl font-bold shadow"
      >
        Contact Support
      </button>
    </div>
  );
};

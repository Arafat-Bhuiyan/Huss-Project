import { useState } from "react";
import { CheckoutOrderItems } from "./CheckoutOrderItems";
import { useNavigate } from "react-router-dom";

export const CheckoutOrder = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const navigate = useNavigate();
  const handleCheckout = () => {
    setPlaceOrder(true);
  };

  const handlePlaceOrder = () => {
    setTimeout(() => {
      navigate("/add-to-cart/checkout/confirm-order");
    }, 1500);
  };

  const handleContinueShopping = () => {
    navigate("/#products");
  };
  return (
    <div>
      {!placeOrder ? (
        <div className="flex flex-col gap-4">
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
          <div className="border-b border-gray-300"></div>
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Total</p>
            <p className="font-semibold text-3xl text-yellow-400">$7130.00</p>
          </div>
          <button
            onClick={() => handleCheckout()}
            className="flex items-center justify-center rounded-lg py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white text-xl font-bold shadow"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={handleContinueShopping}
            className="flex items-center justify-center border rounded-lg py-1.5 border-yellow-400 bg-white hover:bg-gray-50 text-black text-xl font-bold shadow"
          >
            Continue Shopping
          </button>
          <div className="py-2 flex flex-col justify-center items-center text-xs font-medium">
            <p className="text-black">
              By clicking Place Order, you accept Mtech
            </p>
            <p className="text-yellow-400">return & shipping policies</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
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

          <button
            onClick={() => handlePlaceOrder()}
            className="flex items-center justify-center rounded-lg py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white text-xl font-bold shadow"
          >
            Place Order
          </button>
          <div className="py-2 flex flex-col justify-center items-center text-xs font-medium">
            <p className="text-black">
              By clicking Place Order, you accept Mtech
            </p>
            <p className="text-yellow-400">return & shipping policies</p>
          </div>
        </div>
      )}
    </div>
  );
};

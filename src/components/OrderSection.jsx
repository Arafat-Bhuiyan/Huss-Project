import { useNavigate } from "react-router-dom";

export const OrderSection = ({ summary }) => {
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/add-to-cart/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/#products");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-xl sm:text-2xl">Order Summary</h1>
      <div className="flex justify-between font-normal text-base sm:text-lg">
        <p>Subtotal ({summary?.item_count || 0} items)</p>
        <p>${summary?.subtotal || 0}</p>
      </div>
      <div className="flex justify-between font-normal text-base sm:text-lg">
        <p>Delivery fee</p>
        <p>${summary?.delivery_fee || 0}</p>
      </div>
      <div className="flex justify-between font-normal text-base sm:text-lg">
        <p>Tax</p>
        <p>${summary?.tax || 0}</p>
      </div>
      <div className="border-b border-gray-300"></div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl sm:text-2xl">Total</p>
        <p className="font-semibold text-2xl sm:text-3xl text-yellow-400">
          ${summary?.total || 0}
        </p>
      </div>
      <button
        onClick={handleGoToCheckout}
        className="flex items-center justify-center rounded-lg py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white text-lg sm:text-xl font-bold shadow"
      >
        Proceed to Checkout
      </button>
      <button
        onClick={handleContinueShopping}
        className="flex items-center justify-center border rounded-lg py-2.5 border-yellow-400 bg-white text-black text-lg sm:text-xl font-bold shadow"
      >
        Continue Shopping
      </button>
    </div>
  );
};

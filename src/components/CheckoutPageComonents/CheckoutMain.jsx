import { CheckoutOrder } from "./CheckoutOrder";
import { CheckoutUser } from "./CheckoutUser";

export const CheckoutMain = () => {
  return (
    <div className="py-16 bg-[#f9f6ee]">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Checkout
        </h2>
        <p className="text-gray-600">
          Almost there! Confirm your details to complete your order
        </p>
      </div>

      {/* Checkout user and order section */}
      <div className="w-full flex justify-between items-start gap-3">
        <div className="w-2/3 flex flex-col gap-5">
          <CheckoutUser />
        </div>
        <div className="w-1/3 bg-white rounded-lg p-4 shadow">
          <CheckoutOrder />
        </div>
      </div>
    </div>
  );
};

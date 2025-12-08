import { CheckoutOrder } from "./CheckoutOrder";
import { CheckoutUser } from "./CheckoutUser";

export const CheckoutMain = () => {
  return (
    <div className="py-8 md:py-16 bg-[#f9f6ee]">
      {/* Header */}
      <div className="text-start mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Checkout
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Almost there! Confirm your details to complete your order
        </p>
      </div>

      {/* Checkout user and order section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          <CheckoutUser />
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-4 shadow">
          <CheckoutOrder />
        </div>
      </div>
    </div>
  );
};

import PaymentMethod from "../components/ConfirmPageComponent/PaymentMethod";

export const ConfirmOrder = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-4 sm:px-6 lg:px-8 xl:px-28 py-3">
      {/* Breadcrumb */}
      <div className="text-left font-medium text-lg sm:text-xl">
        <span className="text-gray-600">Home / </span>
        <span className="text-black font-bold">Add to Cart / </span>
        <span className="text-black font-bold">Checkout / </span>
        <span className="text-black font-bold">Confirm Order</span>
      </div>

      {/* Payment Method Section */}
      <PaymentMethod />
    </div>
  );
};

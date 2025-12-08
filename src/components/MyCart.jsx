import { OrderSection } from "./OrderSection";
import { CartItem } from "./CartItem";
import { CartSuggetion } from "./CartSuggetion";

export const MyCart = () => {
  return (
    <div className="py-16 bg-[#f9f6ee]">
      {/* Header */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          My Cart
        </h2>
        <p className="text-gray-600">
          Review your selected items before checkout
        </p>
      </div>

      {/* Cart Product Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-4 shadow">
          <OrderSection />
        </div>
      </div>

      {/* Product Suggestion */}
      <div className="pt-16">
        <CartSuggetion />
      </div>
    </div>
  );
};

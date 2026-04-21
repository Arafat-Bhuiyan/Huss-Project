import { useState } from "react";
import { CheckoutOrderItems } from "./CheckoutOrderItems";
import { useNavigate } from "react-router-dom";
import {
  useGetCartQuery,
  useGetShippingAddressQuery,
  usePlaceOrderMutation,
} from "../../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setOrderId } from "../../redux/features/checkoutSlice";

export const CheckoutOrder = () => {
  const [placeOrderToggle, setPlaceOrderToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCartQuery();
  const [placeOrderMutation, { isLoading: isPlacingOrder }] =
    usePlaceOrderMutation();
  // const { shippingInfo } = useSelector((state) => state.checkout);
  const {
    data: shippingInfo ,
    isLoading: isFetching,
    refetch,
  } = useGetShippingAddressQuery();
  console.log("Shipping Info:", shippingInfo);
  const cartDetails = data?.cart_details || [];
  const orderSummary = data?.order_summary;

  const handleCheckout = () => {

    if (!shippingInfo) {
      toast.error("Please add shipping information first. Then try checkout.");
      return;
    }
    setPlaceOrderToggle(true);
  };

  const handlePlaceOrder = async () => {
    if (!shippingInfo) {
      toast.error("Shipping information is missing.");
      return;
    }

    const payload = {
      shipping_info: {
        full_name: shippingInfo.full_name,
        email: shippingInfo.email,
        phone: shippingInfo.phone,
        street_address: shippingInfo.street_address,
        apartment_name: shippingInfo.apartment_name,
        floor_number: shippingInfo.floor_number,
        flat_number: shippingInfo.flat_number,
        city: shippingInfo.city,
        zip_code: shippingInfo.zip_code,
      },
    };

    try {
      const response = await placeOrderMutation(payload).unwrap();
      if (response.stripe_url) {
        if (response.order_uuid) {
          dispatch(setOrderId(response.order_uuid));
        }
        window.location.href = response.stripe_url;
      } else {
        toast.error("Stripe URL not found in response.");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to place order.");
    }
  };

  const handleContinueShopping = () => {
    navigate("/#products");
  };

  if (isLoading) {
    return <div className="p-10 text-center font-bold">Loading order...</div>;
  }

  return (
    <div>
      {!placeOrderToggle ? (
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-xl sm:text-2xl">Order Summary</h1>
          <div className="flex flex-col gap-3">
            {cartDetails.map((item) => (
              <CheckoutOrderItems key={item.id} item={item} />
            ))}
          </div>
          <div className="border-b border-gray-300"></div>

          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Subtotal ({orderSummary?.item_count || 0} items)</p>
            <p>${orderSummary?.subtotal || 0}</p>
          </div>
          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Delivery fee</p>
            <p>${orderSummary?.delivery_fee || 0}</p>
          </div>
          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Tax</p>
            <p>${orderSummary?.tax || 0}</p>
          </div>
          <div className="border-b border-gray-300"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl sm:text-2xl">Total</p>
            <p className="font-semibold text-2xl sm:text-3xl text-[#D5B56E]">
              ${orderSummary?.total || 0}
            </p>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isPlacingOrder}
            className="flex items-center justify-center rounded-lg py-2.5 bg-[#D5B56E] hover:bg-[#D5B56E]/90 text-white text-lg sm:text-xl font-bold shadow"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={handleContinueShopping}
            className="flex items-center justify-center border rounded-lg py-2.5 border-[#D5B56E] bg-white hover:bg-gray-50 text-black text-lg sm:text-xl font-bold shadow"
          >
            Continue Shopping
          </button>
          <div className="py-2 flex flex-col justify-center items-center text-center text-xs sm:text-sm font-medium">
            <p className="text-black">
              By clicking Place Order, you accept 1ezybuy
            </p>
            <p className="text-[#D5B56E] hover:underline cursor-pointer">
              return & shipping policies
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-xl sm:text-2xl">Order Summary</h1>
          <div className="flex flex-col gap-3">
            {cartDetails.map((item) => (
              <CheckoutOrderItems key={item.id} item={item} />
            ))}
          </div>
          <div className="border-b border-gray-300"></div>

          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Subtotal ({orderSummary?.item_count || 0} items)</p>
            <p>${orderSummary?.subtotal || 0}</p>
          </div>
          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Delivery fee</p>
            <p>${orderSummary?.delivery_fee || 0}</p>
          </div>
          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Tax</p>
            <p>${orderSummary?.tax || 0}</p>
          </div>
          <div className="flex justify-between font-normal text-base sm:text-lg">
            <p>Total Discount</p>
            <p>15%</p>
          </div>
          <div className="border-b border-gray-300"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl sm:text-2xl">Total</p>
            <p className="font-semibold text-2xl sm:text-3xl text-[#D5B56E]">
              ${orderSummary?.total || 0}
            </p>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className="flex items-center justify-center rounded-lg py-2.5 bg-[#D5B56E] hover:bg-[#D5B56E]/90 text-white text-lg sm:text-xl font-bold shadow disabled:opacity-50"
          >
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </button>
          <div className="py-2 flex flex-col justify-center items-center text-center text-xs sm:text-sm font-medium">
            <p className="text-black">
              By clicking Place Order, you accept 1ezybuy
            </p>
            <p className="text-[#D5B56E] hover:underline cursor-pointer">
              return & shipping policies
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

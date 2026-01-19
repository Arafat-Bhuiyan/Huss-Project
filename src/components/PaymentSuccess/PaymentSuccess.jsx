import tic from "../../assets/img/tic.png";
import { useNavigate, useSearchParams } from "react-router-dom";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_uuid");

  const handleTrackOrder = () => {
    if (orderId) {
      navigate(`/add-to-cart/checkout/confirm-order?order_uuid=${orderId}`);
    } else {
      // Fallback if no order ID is present (though ideally shouldn't happen in this flow)
      navigate("/add-to-cart/checkout/confirm-order");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-sm min-h-[80vh]">
      <div className="w-full max-w-xl">
        <div className="flex flex-col justify-center items-center gap-1 mb-6 sm:mb-10 text-center space-y-3">
          <div className="rounded-full p-2 mb-3 bg-[#f8f5ee]">
            <img src={tic} alt="Success" />
          </div>
          <h1 className="font-semibold text-3xl sm:text-5xl">
            Payment Successfull!
          </h1>
          <p className="text-base sm:text-xl font-normal">
            Thank You for Your Order
          </p>
        </div>

        <button
          onClick={handleTrackOrder}
          className="w-full flex items-center justify-center rounded-lg py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white text-lg sm:text-xl font-bold shadow transition-colors"
        >
          Go for order details
        </button>
      </div>
    </div>
  );
};

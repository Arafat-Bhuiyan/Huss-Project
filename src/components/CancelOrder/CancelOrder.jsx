import tic from "../../assets/img/tic.png";
import { useNavigate } from "react-router-dom";

export const CancelOrder = () => {
  const navigate = useNavigate();
  const handleReturnToCheckout = () => {
    navigate("/add-to-cart/checkout");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-sm min-h-[80vh]">
      <div className="w-full max-w-xl">
        <div className="flex flex-col justify-center items-center gap-1 mb-6 sm:mb-10 text-center space-y-3">
          <div className="rounded-full p-4 mb-3 bg-red-50 text-red-500">
            {/* Simple X icon using SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="font-semibold text-3xl sm:text-5xl text-red-600">
            Payment Cancelled!
          </h1>
          <p className="text-base sm:text-xl font-normal text-gray-600">
            The payment process was not completed. <br />
            No funds were deducted from your account.
          </p>
        </div>

        <button
          onClick={handleReturnToCheckout}
          className="w-full flex items-center justify-center rounded-lg py-2.5 bg-red-500 hover:bg-red-600 text-white text-lg sm:text-xl font-bold shadow transition-colors"
        >
          Return to Checkout
        </button>
      </div>
    </div>
  );
};

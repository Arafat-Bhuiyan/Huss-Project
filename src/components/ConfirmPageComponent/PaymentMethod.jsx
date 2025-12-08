import { useState } from "react";
import Lock from "../../assets/img/lock.png";
import secure from "../../assets/img/secure.png";
import { toast } from "react-toastify";
import { OrderPlaced } from "./OrderPlaced";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [confirmOrder, setConfirmOrder] = useState(false);

  const confirmButton = () => {
    if (!selectedMethod.trim()) {
      toast.error("Please select a payment method");
    } else {
      toast.success(`Selected Method: ${selectedMethod}`);
      setConfirmOrder(true);
    }
  };

  const paymentMethods = [
    {
      id: "Mobile Money",
      title: "Mobile Money",
      subtitle: "M-Pesa, Airtel Money, MTN MoMo",
    },
    {
      id: "Card",
      title: "Credit/Debit Card",
      subtitle: "Visa, Mastercard, Verve",
    },
    {
      id: "Bank Transfer",
      title: "Bank Transfer",
      subtitle: "Direct bank transfer",
    },
  ];

  return (
    <div className="py-8 md:py-16 bg-[#f9f6ee]">
      {!confirmOrder ? (
        <div>
          {/* Header */}
          <div className="text-start mb-6 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Confirm Order
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Almost there! Confirm your details to complete your order
            </p>
          </div>

          {/* Payment Method */}
          <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
              <div className="flex items-center gap-2">
                <img src={Lock} alt="" />
                <h2 className="text-xl sm:text-2xl font-medium">Payment Method</h2>
              </div>
              <span className="text-sm sm:text-base text-yellow-500 font-normal">
                Secure & Encrypted
              </span>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition ${
                    selectedMethod === method.id
                      ? "border-yellow-500 bg-yellow-50"
                      : "shadow bg-[#f9f6ee] hover:border-yellow-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 h-5 w-5 text-yellow-500 focus:ring-yellow-500 rounded-full"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={() => setSelectedMethod(method.id)}
                  />
                  <div>
                    <p className="text-base sm:text-lg font-medium">{method.title}</p>
                    <p className="text-sm sm:text-base font-normal text-gray-600">
                      {method.subtitle}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-4 text-sm sm:text-base font-normal text-yellow-500 bg-[#f9f6ee] p-2 rounded-xl flex items-center gap-2 shadow">
              <img src={secure} alt="" />
              <span>Your payment information is encrypted and secure</span>
            </div>

            <button
              className="w-full mt-5 font-bold text-lg sm:text-xl bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-xl transition"
              onClick={() => confirmButton()}
            >
              Confirm Order
            </button>
          </div>
        </div>
      ) : (
        <OrderPlaced />
      )}
    </div>
  );
};

export default PaymentMethod;

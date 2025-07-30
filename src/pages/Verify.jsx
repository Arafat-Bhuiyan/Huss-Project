import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ResetPassword from "./ResetPassword";

const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);

  // OTP ইনপুট হ্যান্ডলার
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return false;

    setOtp([...otp.map((data, idx) => (idx === index ? value : data))]);

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  // OTP পেস্ট হ্যান্ডলার
  const handlePaste = (e, index) => {
    const pastedValue = e.clipboardData.getData("Text");
    const newOtp = [...otp];

    // পেস্ট করা ভ্যালু ৪টি ইনপুটে সঠিকভাবে বিভক্ত হবে
    for (let i = 0; i < pastedValue.length; i++) {
      if (index + i < 4) {
        newOtp[index + i] = pastedValue[i];
      }
    }

    setOtp(newOtp);

    // পরবর্তী ইনপুট ফোকাস করা
    if (index + pastedValue.length < otp.length) {
      document
        .getElementById(`otp-input-${index + pastedValue.length}`)
        .focus();
    }
  };

  // OTP ভ্যালিডেশন
  const verifyOtp = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const otpString = otp.join("");
    const numOtpStr = Number(otpString);
    console.log("OTP Submitted: ", numOtpStr); // Check OTP before verifying
    if (numOtpStr === 1234) {
      toast.success("OTP Verified Successfully!");
      setIsVerified(true);
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      {!isVerified ? (
        <div>
          {/* Breadcrumb */}
          <div className="w-full bg-[#f9f6ee] px-28 py-3 text-left text-sm text-black font-medium">
            <span className="text-gray-600 font-medium text-xl">
              Account /{" "}
            </span>
            <span className="text-black font-bold text-xl">
              Forget Password
            </span>
          </div>
          <div className="bg-[#f9f6ee] pt-8 pb-14 flex flex-col items-center justify-center px-4">
            {/* Login Box */}
            <div className="w-full max-w-md border border-yellow-400 rounded-md p-8 bg-white shadow-md">
              <form onSubmit={verifyOtp}>
                <h3 className="text-gray-500 font-semibold text-2xl mb-4">
                  Verify OTP
                </h3>
                <p className="text-gray-500 font-normal text-base mb-4">
                  We have sent a 4-digit code to your email.{" "}
                </p>

                {/* OTP Input Boxes */}
                <div className="mb-4 flex justify-between gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      id={`otp-input-${index}`}
                      maxLength="1"
                      onChange={(e) => handleOtpChange(e, index)}
                      onPaste={(e) => handlePaste(e, index)}
                      placeholder="0"
                      className="w-20 h-16 font-semibold text-lg text-center bg-[#FFEFC4] border border-[#FFBA07] rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <button
                  type="submit" // Important: ensure it's of type 'submit'
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-xl py-2 rounded-md transition mt-4"
                >
                  Verify OTP
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center my-4 text-sm font-medium text-gray-500">
                  <p>
                    Didn't get the code?{" "}
                    <span className="text-yellow-500">
                      <Link to="/login">Resend OTP</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <ResetPassword />
      )}
    </div>
  );
};

export default Verify;

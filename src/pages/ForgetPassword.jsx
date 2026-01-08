import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Verify from "./Verify";
import { useSendOtpMutation } from "../redux/api/authApi";

const ForgetPassword = () => {
  const [form, setForm] = useState({ email: "" });
  const [otpSent, setOtpSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const [sendOtp, { isLoading }] = useSendOtpMutation();

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to handle OTP expiry
  useEffect(() => {
    let timer;
    if (otpSent && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      toast.error("OTP Expired! Please try again.");
      setOtpSent(false); // Reset OTP Sent status
      setTimeLeft(30); // Reset the timer
    }
    return () => clearInterval(timer);
  }, [otpSent, timeLeft]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "") {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const res = await sendOtp(form).unwrap();
      setOtpSent(true); // OTP sent status
      toast.success(res.message || "OTP has been sent to your email.");
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to send OTP. Please try again.");
    }
  };

  return (
    <div>
      {/* Conditional Rendering */}
      {!otpSent ? (
        <div>
          {/* Breadcrumb */}
          <div className="w-full bg-[#f9f6ee] px-4 sm:px-8 md:px-16 lg:px-28 py-3 text-left text-sm text-black font-medium">
            <span className="text-gray-600 font-medium text-lg sm:text-xl">
              Account /{" "}
            </span>
            <span className="text-black font-bold text-lg sm:text-xl">
              Forget Password
            </span>
          </div>
          <div className="bg-[#f9f6ee] pt-8 pb-14 flex flex-col items-center justify-center px-4">
            {/* Login Box */}
            <div className="w-full max-w-md border border-yellow-400 rounded-md p-6 sm:p-8 bg-white shadow-md">
              <form onSubmit={handleSubmit}>
                <h3 className="text-gray-500 font-semibold text-xl sm:text-2xl mb-4">
                  Forget Password
                </h3>
                <p className="text-gray-500 font-normal text-base mb-4">
                  Enter your email address and we’ll send you a link to reset
                  your password.
                </p>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-base mb-1 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Send OTP Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"} text-white font-medium text-lg sm:text-xl py-3 rounded-md transition`}
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center my-4 text-sm text-gray-500">
                  <p>
                    Back to{" "}
                    <span className="text-yellow-500">
                      <Link to="/login">Login</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // Conditional Rendering of Verify Component - if otpSent is true then show verify component
        <Verify email={form.email} />
      )}
    </div>
  );
};

export default ForgetPassword;

import { useState } from "react";
import { Link } from "react-router-dom";
import Congratulation from "./Congratulation";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [passChanged, setPassChanged] = useState(false);
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = form;

    if (newPassword.trim() === "" || confirmPassword.trim() === "") {
      toast.error("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // ✅ Here you can send password to the server using API call
    console.log("Password Reset Successfully:", newPassword);

    toast.success("Your password has been reset successfully!");
    setPassChanged(true);
    // Redirect to login if needed
  };

  return (
    <div>
      {!passChanged ? (
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

          {/* Reset Password Form */}
          <div className="bg-[#f9f6ee] pt-8 pb-14 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md border border-yellow-400 rounded-md p-6 sm:p-8 bg-white shadow-md">
              <form onSubmit={handleSubmit}>
                <h3 className="text-gray-500 font-semibold text-xl sm:text-2xl mb-4">
                  Reset Password ?
                </h3>
                <p className="text-gray-500 font-normal text-base mb-4">
                  Enter your new password below to reset your account.
                </p>

                {/* New Password Input */}
                <div className="mb-4">
                  <label className="block text-base mb-1 text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Confirm Password Input */}
                <div className="mb-4">
                  <label className="block text-base mb-1 text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                {/* Reset Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-lg sm:text-xl py-3 rounded-md transition"
                >
                  Reset Password
                </button>

                {/* Back to Login */}
                <div className="flex items-center justify-center my-4 text-sm text-gray-500">
                  <p>
                    Back to{" "}
                    <Link to="/login" className="text-yellow-500 font-medium">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Congratulation />
      )}
    </div>
  );
};

export default ResetPassword;

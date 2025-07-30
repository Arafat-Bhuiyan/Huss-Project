import { useState } from "react";
import welcome from "../assets/img/welcome.png";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Congratulation = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to Verify component without changing routes
    navigate("/login");
  };
  return (
    <div>
      {/* Breadcrumb */}
      <div className="w-full bg-[#f9f6ee] px-28 py-3 text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Account / </span>
        <span className="text-black font-bold text-xl">Forget Password</span>
      </div>

      {/* Reset Password Form */}
      <div className="bg-[#f9f6ee] pt-8 pb-14 flex flex-col items-center justify-center px-4">
        <div className=" w-full max-w-md border border-yellow-400 rounded-md p-8 bg-white shadow-md">
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <img src={welcome} alt="" />
            <h3 className="text-gray-500 font-semibold text-2xl mb-4">
              Congratulations!
            </h3>
            <p className="text-gray-500 font-normal text-base mb-4">
              You are ready to explore our web!
            </p>

            {/* Explore Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-xl py-2 rounded-md transition"
            >
              Explore
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Congratulation;

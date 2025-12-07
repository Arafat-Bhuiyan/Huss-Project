import { useState } from "react";
import googleImg from "../assets/img/google.png";
import reg_side_img from "../assets/img/reg-side-img-2.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    toast.success("Register done");

    navigate("/login");
  };

  return (
    <div className="bg-[#f9f6ee] px-4 sm:px-6 md:px-12 lg:px-28 py-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-4 sm:py-8">
        {/* Breadcrumb */}
        <div className="bg-[#f9f6ee] py-3 text-left text-sm text-black font-medium">
          <span className="text-gray-600 font-medium text-lg sm:text-xl">
            Account /{" "}
          </span>
          <span className="text-black font-bold text-lg sm:text-xl">Register</span>
        </div>

        <p className="text-base font-normal">
          Already have an account?{" "}
          <span className="text-yellow-500 hover:underline">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full lg:p-8 h-full gap-8">
          {/* Left side: Background image */}
          <img
            src={reg_side_img}
            alt="Register side image"
            className="hidden lg:block lg:w-1/2 h-auto object-contain rounded-lg self-center"
          />

          {/* Right side: Registration form */}
          <div className="w-full lg:w-1/2 h-auto border border-yellow-400 rounded-md p-6 sm:p-8 bg-white shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-500 mb-6">
              Register Account
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="mb-4 w-full sm:w-1/2">
                  <label className="block text-base font-medium mb-1 text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-4 w-full sm:w-1/2">
                  <label className="block text-base font-medium mb-1 text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium mb-1 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2196F3] hover:bg-[#0088ff] text-white font-semibold text-lg rounded-md transition duration-300"
              >
                Continue
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4 text-sm text-gray-500">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2">Or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social media buttons */}
            <div className="mt-4 flex justify-center">
              <button className="px-4 py-2 flex gap-2 justify-center items-center bg-white border border-gray-300 rounded-full hover:bg-gray-100">
                <img src={googleImg} alt="Google" className="w-6 h-6" />
                <p className="text-gray-500 text-sm">Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

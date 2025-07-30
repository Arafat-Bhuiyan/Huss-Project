import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import profileImg from "../assets/img/profile.png"

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "Alex Martin" && form.password === "123456") {
      const loggedInUser = {
        name: "Alex",
        photo: profileImg,
      };
      setUser(loggedInUser);
      console.log(form);
      navigate("/");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="w-full bg-[#f9f6ee] px-28 py-3 text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Account / </span>
        <span className="text-black font-bold text-xl">Log In</span>
      </div>
      <div className="bg-[#f9f6ee] pt-8 pb-14 flex flex-col items-center justify-center px-4">
        {/* Login Box */}
        <div className="w-full max-w-md border border-yellow-400 rounded-md p-8 bg-white shadow-md">
          <h2 className="text-center text-3xl font-bold text-yellow-500 mb-4">
            Welcome
          </h2>

          <form onSubmit={handleSubmit}>
            <h3 className="text-gray-500 font-semibold text-2xl mb-4">
              Account Login
            </h3>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-base mb-1 text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-base mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <div className="text-right mt-1 text-sm font-normal">
                <Link
                  to="/forget-password"
                  className="text-gray-500 hover:text-yellow-500"
                >
                  Forgotten Password?
                </Link>
              </div>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-xl py-2 rounded-md transition"
            >
              Log In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4 text-sm text-gray-500">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2">Don't have an account?</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Create Account */}
            <Link to="/register">
              <button
                type="button"
                className="w-full border border-gray-400 text-gray-500 font-bold text-xl py-2 rounded-md hover:bg-gray-100 transition"
              >
                Create Your Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

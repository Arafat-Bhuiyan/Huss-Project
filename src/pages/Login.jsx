import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import profileImg from "../assets/img/profile.png";
import { useLoginMutation } from "../redux/api/authApi";
import { setUser } from "../redux/features/authSlice";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form).unwrap();

      // Map API response to Navbar expectations
      const userData = {
        ...res.data,
        name: `${res.data.first_name} ${res.data.last_name}`,
        photo: res.data.picture || profileImg, // Use API picture or fallback
      };

      dispatch(setUser({ user: userData, token: res.access_token }));
      toast.success(res.message || "Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.detail || "Invalid email or password");
    }
  };

  return (
    <div className="bg-[#f9f6ee]">
      {/* Breadcrumb */}
      <div className="w-full bg-[#f9f6ee] px-4 sm:px-8 md:px-16 lg:px-28 py-3 text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-lg sm:text-xl">
          Account /{" "}
        </span>
        <span className="text-black font-bold text-lg sm:text-xl">Log In</span>
      </div>
      <div className="pt-8 pb-14 flex flex-col items-center justify-center px-4">
        {/* Login Box */}
        <div className="w-full max-w-md border border-yellow-400 rounded-md p-6 sm:p-8 bg-white shadow-md">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-yellow-500 mb-4">
            Welcome
          </h2>

          <form onSubmit={handleSubmit}>
            <h3 className="text-gray-500 font-semibold text-xl sm:text-2xl mb-4">
              Account Login
            </h3>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-base mb-1 text-gray-700">
                Email Address
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

            {/* Password */}
            <div className="mb-4">
              <label className="block text-base mb-1 text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff strokeWidth={1} />
                  ) : (
                    <Eye strokeWidth={1} />
                  )}
                </button>
              </div>
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
              disabled={isLoading}
              className={`w-full ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#2196F3] hover:bg-[#0088ff]"
              } text-white font-medium text-lg sm:text-xl py-3 rounded-md transition`}
            >
              {isLoading ? "Logging in..." : "Log In"}
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
                className="w-full border border-gray-400 text-[#2196F3] font-bold text-lg sm:text-xl py-3 rounded-md hover:bg-gray-100 transition"
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

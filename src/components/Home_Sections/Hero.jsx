import { useNavigate } from "react-router-dom";
import rightImg from "../../assets/img/HomeSec1_img.png";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#f9f6ee] flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Discover Your Perfect <br />
            <span className="text-yellow-500">
              M<span className="text-black">tech</span>
            </span>
          </h1>
          <p className="text-gray-700 text-2xl font-medium mb-8">
            Find everything you need, all in one place. <br />
            From electronics to Survey equipment, Lab <br />
            equipment, we've got you covered.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/#products")}
              className="bg-yellow-500 text-white font-semibold text-2xl px-6 py-3 rounded-2xl shadow hover:bg-yellow-600 transition"
            >
              Start Shopping
            </button>
            <button
              onClick={() => navigate("/wishlist")}
              className="border border-yellow-500 text-black font-semibold text-2xl px-6 py-3 rounded-2xl hover:bg-w-full bg-[#f9f6ee] hover:bg-yellow-500 transition"
            >
              View Wishlist
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg max-w-xl">
          <img
            src={rightImg}
            alt="Electronics Lab Equipment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

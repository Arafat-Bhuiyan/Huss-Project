import { useNavigate } from "react-router-dom";
import rightImg from "../../assets/img/H.png";
import { ShieldCheck, Truck, CheckCircle } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-28 py-16 md:py-0 relative overflow-hidden"
      style={{
        backgroundColor: '#f3f4f6',
        backgroundImage: `
          radial-gradient(at 90% 20%, rgba(213, 181, 110, 0.12) 0px, transparent 40%),
          radial-gradient(at 10% 80%, rgba(213, 181, 110, 0.08) 0px, transparent 40%),
          linear-gradient(115deg, transparent 40%, rgba(213, 181, 110, 0.03) 44%, rgba(213, 181, 110, 0.08) 48%, rgba(213, 181, 110, 0.12) 50%, rgba(213, 181, 110, 0.08) 52%, rgba(213, 181, 110, 0.03) 56%, transparent 60%)
        `
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 z-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Discover Your Perfect <br />
            <span className="text-[#D5B56E]">
              1<span className="text-[#0B3C5D]">ezy</span>
              <span className="text-[#D5B56E]">buy</span>
            </span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl font-medium mb-8">
            Find everything you need — all in one place. <br />
            From electronics to surveying and lab equipment, <br />
            we've got you covered.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/#products")}
              className="bg-[#D5B56E] text-white font-semibold text-lg sm:text-xl px-8 py-3 rounded-xl shadow-lg hover:bg-[#c4a45d] transition flex items-center gap-2"
            >
              Shop Now <span className="text-sm">→</span>
            </button>
            <button
              onClick={() => navigate("/wishlist")}
              className="border-2 border-gray-300 text-gray-800 font-semibold text-lg sm:text-xl px-8 py-3 rounded-xl hover:bg-gray-100 transition bg-white/50 backdrop-blur-sm"
            >
              View Wishlist
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 rounded-3xl overflow-hidden shadow-2xl max-w-md lg:max-w-xl transition-transform hover:scale-[1.02] duration-500">
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

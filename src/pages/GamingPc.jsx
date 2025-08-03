import GamingPc from "../assets/img/gamingpc.png";
import FilterSec from "../components/Filter_Section/filterSec";
import left from "../assets/img/left-angle.png";
import right from "../assets/img/right-angle.png";
import { useNavigate } from "react-router-dom";

const pcList = new Array(12).fill(null).map((_, index) => ({
  title: "AMD Ryzen 5 5600G Custom Desktop PC",
  price: "$2,800",
  image: GamingPc,
  specs: [
    "AMD Ryzen 5 5600G Processor with Radeon Graphics (Tray Box)",
    "MSI A520M-A Pro AMD AM4 Micro-ATX Motherboard",
    "Team T-Create EXPERT 8GB DDR4 3200MHz Desktop RAM",
    "MPIN M120S3 256GB M.2 PCIe Gen3 NVMe SSD",
  ],
}));

const GamingPCPage = () => {
  const navigate = useNavigate();
  return (
    <div className="py-6 px-28 bg-[#FAF8F2] min-h-screen flex">
      {/* Filter Section (1/4 width) */}
      <div className="w-1/4 rounded-lg">
        <FilterSec />
      </div>

      {/* Card Section (3/4 width) */}
      <div className="w-3/4 pl-6">
        <div className="bg-black w-full text-white flex justify-between py-2.5 px-4 mb-4 items-center rounded-t-xl">
          <h1 className="text-base font-semibold">Gaming PC</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pcList.slice(0).map((pc, index) => (
            <div key={index} className="bg-white rounded-xl shadow">
              <img
                src={pc.image}
                alt="Gaming PC"
                className="h-48 w-full object-cover rounded-t-lg mb-4"
                onClick={() => navigate("/gaming-equipent/gaming-pc/intel-pc")}
              />
              <h2 className="text-lg font-semibold mb-2 p-4">{pc.title}</h2>
              <ul className="text-sm text-gray-600 mb-4 list-disc pl-8 p-4">
                {pc.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center p-4">
                <span className="text-xl font-bold">{pc.price}</span>
                <button onClick={() => navigate("/add-to-cart")} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="bg-white w-56 py-1.5 pr-2.5 mt-4 rounded-lg flex gap-2 justify-end ml-auto">
          <div className="border border-gray-400 p-2 rounded w-6 h-6 flex justify-center items-center">
            <img src={left} alt="left arrow" />
          </div>
          <div className="bg-[#CBA135] text-white shadow p-2 rounded w-6 h-6 flex justify-center items-center">
            1
          </div>
          <div className="border border-gray-400 p-2 rounded w-6 h-6 flex justify-center items-center">
            2
          </div>
          <div className="border border-gray-400 p-2 rounded w-6 h-6 flex justify-center items-center">
            3
          </div>
          <div>...</div>
          <div className="border border-gray-400 p-2 rounded w-6 h-6 flex justify-center items-center">
            7
          </div>
          <div className="border border-gray-400 p-2 rounded w-6 h-6 flex justify-center items-center">
            <img src={right} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingPCPage;

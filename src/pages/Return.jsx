import { ReturnMain } from "../components/ReturnPageComponent/ReturnMain";

export const Return = () => {
  return (
    <div className="w-full bg-[#f9f6ee] px-28 py-3">
      {/* Breadcrumb */}
      <div className=" text-left text-sm text-black font-medium">
        <span className="text-gray-600 font-medium text-xl">Home / </span>
        <span className="text-black font-bold text-xl">Return & Return Policy</span>
      </div>

      {/* Return Main Section */}
      <ReturnMain />
    </div>
  );
};

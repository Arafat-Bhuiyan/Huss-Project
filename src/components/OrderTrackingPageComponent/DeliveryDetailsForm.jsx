import mapButton from "../../assets/img/map.png";
import downArrow from "../../assets/img/downArrow.png";
import { LocationSelection } from "./LocationType";

const DeliveryDetailsForm = () => {
  return (
    <div className="w-full bg-white p-6 mt-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Delivery Details
      </h2>

      {/* Location Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location Type
        </label>
        <div className="relative">
          <LocationSelection />
        </div>
      </div>

      {/* Landmark Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Landmark Description
        </label>
        <input
          type="text"
          placeholder="Near Central Mosque, opposite University"
          className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
        />
      </div>

      {/* GPS Pinning */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          GPS Pinning
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button type="button">
            <img src={mapButton} alt="" className="w-20 h-12" />
          </button>
        </div>
      </div>

      {/* Note to Driver */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Note to Driver
        </label>
        <textarea
          rows="3"
          placeholder="Call when you arrive. House has a blue gate."
          className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
        ></textarea>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-xl py-2 rounded-xl transition"
      >
        Save
      </button>
    </div>
  );
};

export default DeliveryDetailsForm;

import { toast } from "react-toastify";
import mapButton from "../../assets/img/map.png";
import { LocationSelection } from "./LocationType";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useOrderTrackingQuery } from "../../redux/api/authApi";

const DeliveryDetailsForm = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_uuid");

  const { data, isLoading } = useOrderTrackingQuery(orderId, {
    skip: !orderId,
  });

  const [locationType, setLocationType] = useState("Home");
  const [address, setAddress] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [landmark, setLandmark] = useState("");
  const [gps1, setGps1] = useState("");
  const [gps2, setGps2] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (data?.delivery_details) {
      setLocationType(data.delivery_details.location_type || "Home");
      setAddress(data.delivery_details.address || "");
      setTrackingNumber(data.delivery_details.tracking_number || "");
    }
  }, [data]);

  const handleDeliveryInfo = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Saved delivery info successfully!");

    // Reset non-API form fields (keeping API data for display)
    setLandmark("");
    setGps1("");
    setGps2("");
    setNote("");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleDeliveryInfo}
      className="w-full bg-white p-4 md:p-6 rounded-xl shadow-md"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Delivery Details
      </h2>

      {/* Location Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location Type
        </label>
        <div className="relative">
          <input
            type="text"
            value={locationType}
            readOnly
            className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none"
          />
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <textarea
          value={address}
          readOnly
          rows="2"
          className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none resize-none"
        />
      </div>

      {/* Tracking Number */}
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tracking Number
        </label>
        <input
          type="text"
          value={trackingNumber}
          readOnly
          className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none"
        />
      </div> */}

      {/* Landmark Description */}
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Landmark Description
        </label>
        <input
          type="text"
          placeholder="Near Central Mosque, opposite University"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
          required
        />
      </div> */}

      {/* GPS Pinning */}
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          GPS Pinning
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={gps1}
            onChange={(e) => setGps1(e.target.value)}
            className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            value={gps2}
            onChange={(e) => setGps2(e.target.value)}
            className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button type="button" className="w-full sm:w-auto py-2 sm:py-0">
            <img
              src={mapButton}
              alt="Map"
              className="hidden sm:block w-20 h-12 object-contain"
            />
          </button>
        </div>
      </div> */}

      {/* Note to Driver */}
      {/* <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Note to Driver
        </label>
        <textarea
          rows="3"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Call when you arrive. House has a blue gate."
          className="w-full text-base font-normal px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
          required
        ></textarea>
      </div> */}

      {/* Save Button */}
      {/* <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-lg md:text-xl py-2 rounded-xl transition"
      >
        Save
      </button> */}
    </form>
  );
};

export default DeliveryDetailsForm;

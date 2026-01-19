import { useState, useEffect } from "react";
import upload from "../../assets/img/upload.png";
import { toast } from "react-toastify";
import { useReturnExchangeMutation } from "../../redux/api/authApi";
import { useSearchParams } from "react-router-dom";

export const ReturnExchangeForm = () => {
  const [returnExchange, { isLoading }] = useReturnExchangeMutation();
  const [searchParams] = useSearchParams();
  const urlOrderUuid = searchParams.get("id");

  const [formData, setFormData] = useState({
    id: "",
    reason: "",
    image: null,
  });

  useEffect(() => {
    if (urlOrderUuid) {
      setFormData((prev) => ({
        ...prev,
        id: urlOrderUuid,
      }));
    }
  }, [urlOrderUuid]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("order_id", formData.id);
    data.append("reason", formData.reason);
    // User requested to remove product_id, so we don't append it.
    // data.append("product_id", formData.product_id);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await returnExchange(data).unwrap();
      toast.success(response?.message || "Return Request Submitted!");

      // Only reset reason and image, keep id if user wants to submit another?
      // Or reset all. Let's reset all but likely user will navigate away.
      setFormData({
        id: urlOrderUuid || "", // Keep the ID if we are on that specific page
        reason: "",
        image: null,
      });
    } catch (error) {
      // Handle "A return request for this order has already been submitted." specifically if needed,
      // otherwise show whatever backend sends.
      toast.error(
        error?.data?.error ||
          error?.data?.message ||
          "Failed to submit return request.",
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-[#EAE7E1] p-8 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Return / Exchange Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Order Details */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Order Details
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Order ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="Enter Order ID"
                className={`mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${urlOrderUuid ? "bg-gray-100 cursor-not-allowed" : ""}`}
                readOnly={!!urlOrderUuid}
                required
              />
            </div>
          </div>
        </div>

        {/* Step 2: Reason */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Reason for Return
            </h3>
          </div>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter your Reason"
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Step 3: Photo Upload */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Upload Photos (Optional)
            </h3>
          </div>

          <label
            htmlFor="image"
            className="mt-3 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl px-4 py-6 cursor-pointer text-center hover:border-yellow-500"
          >
            <img src={upload} className="mb-2" alt="" />
            <p className="text-gray-500">
              {formData.image
                ? formData.image.name
                : "Drag and drop images here, or click to browse"}
            </p>
            <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              className="hidden"
              accept="image/png, image/jpeg"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`text-white text-lg font-semibold py-3 px-6 rounded-lg shadow transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            {isLoading ? "Submitting..." : "Submit Return Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

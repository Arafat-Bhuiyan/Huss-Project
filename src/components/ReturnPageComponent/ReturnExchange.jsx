import { useState } from "react";
import upload from "../../assets/img/upload.png";
import { toast } from "react-toastify";
import { OrderSelection } from "./OrderSelection";

export const ReturnExchangeForm = () => {
  const [formData, setFormData] = useState({
    order: "",
    reason: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order:", formData.order);
    console.log("Reason:", formData.reason);
    console.log("Photo:", formData.photo);
    toast.success("Return Request Submitted!");

    setFormData({
      order: "",
      reason: "",
      photo: null,
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-[#EAE7E1] p-8 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Return / Exchange Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1 */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Select Product from Your Orders
            </h3>
          </div>
          <OrderSelection
            selectedOrder={formData.order}
            onChange={(selectedOrderId) =>
              setFormData({ ...formData, order: selectedOrderId })
            }
          />
        </div>

        {/* Step 2 */}
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

        {/* Step 3 */}

        {formData.photo ? (
          <p className="text-base font-medium text-gray-600 mt-1 text-center border border-gray-300 px-4 py-2 shadow rounded-lg bg-white">
            {formData.photo.name}
          </p>
        ) : (
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
              htmlFor="photo"
              className="mt-3 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl px-4 py-6 cursor-pointer text-center hover:border-yellow-500"
            >
              <img src={upload} className="mb-2" alt="" />
              <p className="text-gray-500">
                Drag and drop images here, or click to browse
              </p>
              <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleChange}
                className="hidden"
                accept="image/png, image/jpeg"
                required
              />
            </label>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow"
          >
            Submit Return Request
          </button>
        </div>
      </form>
    </div>
  );
};

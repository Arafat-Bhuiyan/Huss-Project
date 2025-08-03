// ProductPage.jsx
import { useState } from "react";

import { ProductImgDet } from "../components/ProductImgDet";
import ReviewImg from "../assets/img/review.png";
import { toast } from "react-toastify";

export default function ProductViewPage() {
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [formData, setFormData] = useState({
    review: "",
    photo: null, // file object
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

const handleSubmit = () => {
  if (!formData.review.trim() && !formData.photo) {
    toast.warn("Please provide your review before submitting.");
    return;
  }

  console.log("Review:", formData.review);
  console.log("Product Image:", formData.photo);

  setFormData({
    review: "",
    photo: null,
  });

  toast.success("Your review has been submitted successfully. Thank you!");
};

  return (
    <div className="bg-[#fdfaf6] text-[#1c1c1c] px-28 py-6 gap-6">
      {/* Breadcrumb */}
      <div className=" text-left text-sm text-black font-medium pb-6">
        <span className="text-gray-600 font-medium text-xl">
          Gaming Equipment /{" "}
        </span>
        <span className="text-black font-bold text-xl">Gaming PC /</span>
        <span className="text-black font-bold text-xl"> Intel PC</span>
      </div>
      {/* Left Main Section */}
      <div className="flex-1 justify-center w-full">
        <ProductImgDet />

        {/* Tabs */}
        <div className="mt-10  rounded-lg bg-white">
          <div className="py-3 pl-5 flex gap-4">
            <button className="w-52 h-12 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold text-xl">
              Specifications
            </button>
            <button className="w-52 h-12 rounded-lg bg-gray-300 hover:bg-gray-400 text-black font-bold text-xl">
              Description
            </button>
            <button className="w-52 h-12 rounded-lg bg-gray-300 hover:bg-gray-400 text-black font-bold text-xl">
              Reviews
            </button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="font-semibold text-xl">Product Specifications</h1>
          <div className="flex gap-4 mt-4 w-full text-base">
            <div className="flex flex-col w-1/2">
              <div className="flex justify-between pb-2 border-b border-gray-300 mb-2">
                <p>Material</p>
                <p>Plastic</p>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-300 mb-2">
                <p>Color</p>
                <p>Navy</p>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-300 mb-2">
                <p>Weight</p>
                <p>4 KG</p>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="flex justify-between pb-2 border-b border-gray-300 mb-2">
                <p>Warranty</p>
                <p>2 Years Limited</p>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-300 mb-2">
                <p>Country of Origin</p>
                <p>Italy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="font-bold text-2xl">Description</h1>
          <h3 className="font-semibold text-xl mb-2">
            Intel Core Ultra 5 245K Desktop PC
          </h3>
          <p className="text-lg text-gray-700">
            The Intel Core Ultra 5 245K Desktop PC is a simply constructed
            system that creates a new standard for high-performance Intel
            Desktop PCs, making it ideal for both professional workloads and
            intensive gaming sessions. This Intel Core Ultra 5 PC is powered by
            the cutting-edge Intel Core Ultra 5 245K Arrow Lake Processor, which
            delivers enhanced multi-core performance, while the sturdy DeepCool
            AG620 DIGITAL BK CPU Air Cooler ensures optimal heat management even
            under heavy loads. This Intel Core Ultra 5 Desktop PC is based on
            the versatile MSI MAG B860M MORTAR WIFI LGA 1851 mATX Motherboard,
            which allows for easy networking and extension, making it an
            excellent foundation for an Intel Core Ultra 5 Gaming PC. This
            design exemplifies speed a
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">Reviews</h3>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md text-sm font-medium"
              onClick={() => setShowReviewBox(!showReviewBox)}
            >
              Write a Review
            </button>
          </div>
          <div className="text-gray-700 text-xl mt-2">
            Get specific details about this product from customers who own it.
          </div>
          <div className="flex flex-col justify-center items-center gap-3 mt-7">
            <img src={ReviewImg} alt="" />
            <p className="font-medium text-xl text-gray-700">
              This product has no reviews yet. Be the first one to write a
              review.
            </p>
          </div>
        </div>
      </div>

      {/* Review Sidebar */}
      {showReviewBox && (
        <div className="flex justify-center pt-6">
          <div className="w-[581px] bg-[#FAF8F2] p-4 rounded-lg shadow-md h-fit">
            <h3 className="text-lg font-semibold mb-3">Write a Review</h3>

            <p className="font-medium text-base pb-1">Your Review</p>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="w-full border p-2 rounded-md h-24 mb-3"
              required
            />

            {/* <p className="font-medium text-base pb-1">Product Image</p> */}
            <div className="mt-4">
              <label className="block text-xl font-bold text-gray-700 mb-2">
                Product Image
              </label>

              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                className="hidden"
                required
              />

              <div className="flex w-full">
                {/* Custom styled label */}
                <label
                  htmlFor="photo"
                  className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-l-xl cursor-pointer text-sm font-medium whitespace-nowrap"
                >
                  Choose File
                </label>

                {/* File name display */}
                <div className="flex items-center px-4 py-2 text-gray-600 text-base font-normal w-full shadow bg-white rounded-r-xl border border-gray-300">
                  {formData.photo ? `${formData.photo.name}` : "No File Chosen"}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <label
                  key={star}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <span className="text-yellow-500 text-xl pb-1">★</span>
                  <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 rounded-full border border-gray-300 checked:bg-yellow-500 checked:border-transparent"
                  />
                </label>
              ))}
            </div>

            <button
              onClick={() => handleSubmit()}
              className="bg-yellow-400 text-white w-full py-2 rounded-md font-semibold"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

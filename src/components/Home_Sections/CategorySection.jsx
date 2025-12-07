import React from "react";
import electronicImg from "../../assets/img/electronic.png";
import testingImg from "../../assets/img/testing.png";
import surveyImg from "../../assets/img/survey.png";

export const CategorySection = () => {
  const categories = [
    {
      title: "Electronics Equipment",
      description: "Smartphones, laptops, audio devices and more",
      image: electronicImg, // Replace with actual path
    },
    {
      title: "Survey Equipment",
      description: "Professional tools for precision measurements",
      image: surveyImg, // Replace with actual path
    },
    {
      title: "Testing & Lab Equipment",
      description: "Professional laboratory instruments and supplies",
      image: testingImg, // Replace with actual path
    },
  ];

  return (
    <div className="py-16 bg-white text-center px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Featured Category
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-10">
        Get Your Desired Product from Featured Category!
      </p>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col text-center sm:text-left"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-base md:text-lg font-medium text-gray-600 mb-4">
                {category.description}
              </p>
              <button className="bg-[#ffc107] text-white text-base font-semibold px-5 py-2 rounded-md w-fit mx-auto sm:mx-0 hover:bg-[#e6ac00] transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        <span className="w-3 h-3 bg-[#ffc107] rounded-full inline-block" />
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
      </div>
    </div>
  );
};

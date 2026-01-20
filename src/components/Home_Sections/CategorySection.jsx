import React, { useState } from "react";
import { useGetCategoryListQuery } from "../../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import electronicImg from "../../assets/img/electronic.png";
import testingImg from "../../assets/img/testing.png";
import surveyImg from "../../assets/img/survey.png";

const BASE_URL = "http://10.10.13.20:8001";

export const CategorySection = () => {
  const navigate = useNavigate();
  const { data: categoryList, isLoading } = useGetCategoryListQuery();
  const [currentPage, setCurrentPage] = useState(0);

  // Group categories into chunks of 3 for the carousel
  const categories = categoryList || [];
  const chunks = [];
  for (let i = 0; i < categories.length; i += 3) {
    chunks.push(categories.slice(i, i + 3));
  }

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

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
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {chunks.map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-1"
            >
              {chunk.map((category, index) => {
                const imageUrl = category.image
                  ? `${BASE_URL}${category.image}`
                  : category.category_name.includes("Electronics")
                    ? electronicImg
                    : category.category_name.includes("Survey")
                      ? surveyImg
                      : testingImg;

                return (
                  <div
                    key={index}
                    className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col text-center sm:text-left"
                  >
                    <img
                      src={imageUrl}
                      alt={category.category_name}
                      className="w-full h-56 object-contain p-4 bg-white"
                    />
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                        {category.category_name}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-gray-600 mb-4 line-clamp-2">
                        {category.description ||
                          "No description available for this category."}
                      </p>
                      <div className="flex justify-center">
                        <button
                          onClick={() =>
                            navigate(
                              `/category/${encodeURIComponent(
                                category.category_name,
                              )}`,
                            )
                          } // Updated onClick to navigate
                          className="bg-[#ffc107] text-white text-base font-semibold px-5 py-2 rounded-md w-fit mx-auto sm:mx-0 hover:bg-[#e6ac00] transition"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {chunks.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentPage === index ? "bg-[#ffc107]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

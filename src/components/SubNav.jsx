import { useState, useEffect, useRef } from "react";
import HomeIcon from "../assets/img/icons/home-icon.png";
import goArrow from "../assets/img/icons/go-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useGetCategoryListQuery } from "../redux/api/authApi";
import { useSelector } from "react-redux";

const SubNavBar = () => {
  const navigate = useNavigate();
  const { data: categoryList, isLoading } = useGetCategoryListQuery();
  const subNavItems = categoryList || [];
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Check if user is logged in
  const isAuthenticated = useSelector((state) => state.auth?.access);

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // toggle same index
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
    setOpenIndex(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenIndex(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  // Don't render if user is not logged in
  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm border-b" ref={navRef}>
      <div className="mx-auto flex items-center justify-start gap-6 px-4 sm:px-6 md:px-12 lg:px-28 py-3 relative">
        {/* Home */}
        <Link to="/" className="flex-shrink-0">
          <img src={HomeIcon} alt="Home" className="w-5 h-5" />
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-6">
          {subNavItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className="text-[16px] font-medium text-gray-800 cursor-pointer hover:text-yellow-500 transition"
                onClick={() => handleCategoryClick(item.category_name)}
              >
                {item.category_name}
              </div>

              {/* Desktop Dropdown */}
              {openIndex === index && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 shadow-lg z-50">
                  <div className="bg-black text-white px-4 py-2 rounded-t text-start">
                    {item.category_name}
                  </div>
                  <ul className="bg-white rounded-b">
                    {(item.subCategories || []).map((sub, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                      >
                        <span className="w-full">{sub}</span>
                        <img
                          src={goArrow}
                          alt="Go Arrow"
                          className="ml-2 w-3 h-3"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-4">
            {subNavItems.map((item, index) => (
              <li key={index} className="border-b last:border-b-0">
                <div
                  className="flex justify-between items-center py-3 text-[16px] font-medium text-gray-800 cursor-pointer"
                  onClick={() => handleCategoryClick(item.category_name)}
                >
                  <span>{item.category_name}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <ul className="pl-4 pb-3">
                    {(item.subCategories || []).map((sub, i) => (
                      <li
                        key={i}
                        className="py-2 text-gray-600 hover:text-black cursor-pointer"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SubNavBar;

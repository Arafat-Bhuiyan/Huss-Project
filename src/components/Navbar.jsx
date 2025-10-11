import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import searchIcon from "../assets/img/icons/search_icon.png";
import heartIcon from "../assets/img/icons/heart.png";
import categoryIcon from "../assets/img/icons/category.png";
import cartIcon from "../assets/img/icons/cart.png";
import accountIcon from "../assets/img/icons/accout.png";
import goArrow from "../assets/img/icons/go-arrow.png";
import { UserContext } from "../userContext";

const subCategories = [
  "Survey Equipment",
  "Testing & Lab Equipment",
  "Electronics Equipment",
  "Gaming Equipment",
  "Accessories Equipment",
];

export const Navbar = () => {
  const { user } = useContext(UserContext);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-28 py-3 bg-black text-white shadow relative">
      {/* Left: Brand */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-white transition">
          Shop<span className="text-yellow-500">Nest</span>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-2 flex justify-center">
        <div className="relative w-72 md:w-96 flex items-center">
          <span className="absolute right-0 h-full flex items-center">
            <span className="bg-yellow-500 rounded-r-full px-6 py-[10px] border border-gray-100 flex items-center">
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
            </span>
          </span>
          <input
            type="text"
            placeholder="Search for Products..."
            className="w-full px-4 py-2 rounded-full placeholder:text-base placeholder:font-normal placeholder:text-gray-100 border border-gray-100 bg-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>
      </div>

      {/* Right: Nav Links */}
      <div className="flex-1 flex justify-end items-center gap-6 relative">
        {/* Save */}
        <div className="flex items-center gap-2">
          <div>
            <img src={heartIcon} alt="" className="pt-1" />
          </div>
          <NavLink
            to="/wishlist"
            className="text-white font-medium text-xl hover:text-yellow-500 transition"
          >
            Save
          </NavLink>
        </div>
        {/* Categories Dropdown */}
        <div className="flex items-center gap-2">
          <div>
            <img src={categoryIcon} alt="" className="pt-1" />
          </div>
          <div className="relative">
            <button
              className="text-white font-medium text-xl hover:text-yellow-500 transition"
              onClick={() => setShowCategories((prev) => !prev)}
            >
              Categories
            </button>
            {showCategories && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 shadow-lg z-50">
                <div className="bg-black text-white px-4 py-2 rounded-t">
                  All Categories
                </div>
                <ul className="bg-white rounded-b">
                  {subCategories.map((cat) => (
                    <div
                      className="flex items-center justify-between"
                      key={cat}
                      onClick={() => {
                        const routeMap = {
                          "Gaming Equipment": "/gaming-equipent/gaming-pc",
                          "Survey Equipment": "/survey-tools",
                          "Testing & Lab Equipment": "/testing-lab",
                        };
                        if (routeMap[cat]) {
                          navigate(routeMap[cat]);
                        }
                      }}
                    >
                      <li
                        key={cat}
                        className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                      >
                        {cat}
                      </li>
                      <div>
                        <img src={goArrow} alt="Go Arrow" className="mr-2" />
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Cart */}
        <div className="flex items-center gap-2">
          <div>
            <img src={cartIcon} alt="" className="pt-1" />
          </div>
          <NavLink
            to="/add-to-cart"
            className="text-white font-medium text-xl hover:text-yellow-500 transition"
          >
            Cart
          </NavLink>
        </div>

        {/* Account */}
        {user ? (
          <div
            className="flex items-center gap-2"
            onClick={() => navigate("/profile-settings")}
          >
            <img
              src={user.photo}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div>
              <img src={accountIcon} alt="" />
            </div>
            <NavLink
              to="/login"
              className="text-white font-medium text-xl hover:text-yellow-500 transition"
            >
              Account
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

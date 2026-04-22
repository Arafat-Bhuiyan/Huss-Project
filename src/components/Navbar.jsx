import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import searchIcon from "../assets/img/icons/search_icon.png";
import heartIcon from "../assets/img/icons/heart.png";
import categoryIcon from "../assets/img/icons/category.png";
import cartIcon from "../assets/img/icons/cart.png";
import accountIcon from "../assets/img/icons/accout.png";
import goArrow from "../assets/img/icons/go-arrow.png";
import logo from "../assets/img/1ezybuy-logo2.png";
import { LogOut } from "lucide-react";
import { logout } from "../redux/features/authSlice";
import { setSearchTerm } from "../features/products/productSlice";
import {
  useGetCategoryListQuery,
  useGetProfileQuery,
} from "../redux/api/authApi";
import { api } from "../redux/api/api";

export const Navbar = () => {
  const { data: categoryList } = useGetCategoryListQuery();
  const { access: token, user } = useSelector((state) => state.auth);
  const { data: userData } = useGetProfileQuery(undefined, {
    skip: !token,
  });
  const subCategories = categoryList || [];
  const profileUser = token ? (userData || user) : null;
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoriesRef = useRef(null);
  const navigate = useNavigate();
  console.log(userData);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(api.util.resetApiState());
    navigate("/");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate("/#products");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the categories dropdown or the mobile menu button
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setShowCategories(false);
        // Do not close mobile menu here to allow interaction inside it
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoriesRef]);

  return (
    <header className="bg-black text-white shadow relative" ref={categoriesRef}>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-28 py-3">
        {/* Left: Brand */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="transition hover:opacity-80">
            <img
              src={logo}
              alt="1ezybuy Logo"
              className="h-14 sm:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden lg:flex flex-1 justify-center px-4">
          <div className="relative w-72 md:w-96 flex items-center">
            <span className="absolute right-0 h-full flex items-center">
              <span
                onClick={handleSearch}
                className="bg-[#D5B56E] rounded-r-full px-6 py-[10px] border border-gray-100 flex items-center cursor-pointer hover:bg-[#C9A85E] transition"
              >
                <img src={searchIcon} alt="Search" className="w-5 h-5" />
              </span>
            </span>
            <input
              type="text"
              placeholder="Search for Products..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="w-full px-4 py-2 rounded-full placeholder:text-base placeholder:font-normal placeholder:text-gray-100 border border-gray-100 bg-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            />
          </div>
        </div>

        {/* Right: Nav Links */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
          {/* Save */}
          <div
            onClick={() => navigate("/wishlist")}
            className="flex items-center gap-2"
          >
            <div>
              <img src={heartIcon} alt="" className="pt-1" />
            </div>
            <NavLink
              to="/wishlist"
              className="text-white font-medium text-xl hover:text-[#D5B56E] transition"
            >
              Wishlist
            </NavLink>
          </div>
          {/* Categories Dropdown */}
          <div className="flex items-center gap-2 relative">
            <div>
              <img src={categoryIcon} alt="" className="pt-1" />
            </div>
            <div>
              <button
                className="text-white font-medium text-xl hover:text-[#D5B56E] transition"
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
                        key={cat.id || cat.category_name}
                        onClick={() => {
                          navigate(
                            `/category/${encodeURIComponent(cat.category_name)}`,
                          );
                          setShowCategories(false);
                        }}
                      >
                        <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                          {cat.category_name}
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
              className="text-white font-medium text-xl hover:text-[#D5B56E] transition"
            >
              Cart
            </NavLink>
          </div>

          {/* Account */}
          {profileUser ? (
            <div>
              <div className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowProfile((prev) => !prev)}
              >
                <img
                  // onClick={() => navigate("/profile-settings")}
                  src={profileUser.picture || profileUser.photo || accountIcon}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
             
                <LogOut
                  size={20}
                  color="#FFBA07"
                  
                  className="cursor-pointer"
                />
              </div>

              {showProfile && (
                <div className="absolute right-2 mt-2 w-48 bg-white rounded-2xl overflow-hidden shadow-lg z-50">
               <div className="flex items-center gap-2 px-4 py-2 border-b">
                     <img
                  // onClick={() => navigate("/profile-settings")}
                  src={profileUser.picture || profileUser.photo || accountIcon}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                   <span className="block px-4 py-2 text-gray-800 font-bold text-xl " onClick={() => navigate("/profile-settings")}>
                {profileUser.first_name && profileUser.last_name
                  ? `${profileUser.first_name} ${profileUser.last_name}`
                  : profileUser.name || "Profile"}
              </span>
               </div>
                  <NavLink
                    to="/profile-settings"
                    className="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100"
                    onClick={() => setShowProfile(false)}
                  >
                    Account Settings
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 font-semibold text-2xl text-gray-800 hover:bg-red-100"
                    onClick={() => setShowProfile(false)}
                    onClick={handleLogout}
                  >
                    sign out
                  </NavLink>
                </div>
              )}

            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* <div>
                <img src={accountIcon} alt="" />
              </div> */}
              <NavLink
                to="/login"
                className="text-white font-medium text-xl hover:text-[#D5B56E] transition"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
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
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile S
              onClick={handleSearch}
              className="bg-[#D5B56E] rounded-r-full px-4 py-[10px] border border-gray-100 flex items-center cursor-pointer hover:bg-[#C9A85E] transition"
            >
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
            </span>
          </span>
          <input
            type="text"
            placeholder="Search for Products..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            onKeyPress={(e) => e.key === "Enter" && handleSearch(
            type="text"
            placeholder="Search for Products..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="w-full px-4 py-2 rounded-full placeholder:text-sm placeholder:font-normal placeholder:text-gray-100 border border-gray-100 bg-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 z-40">
          <div className="flex flex-col p-4 gap-4 text-lg">
            {/* Wishlist */}
            <NavLink
              to="/wishlist"
              className="flex items-center gap-3 hover:text-[#D5B56E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img src={heartIcon} alt="Wishlist" className="w-5 h-5" />
              <span>Wishlist</span>
            </NavLink>

            {/* Categories */}
            <div>
              <div
                className="flex items-center justify-between gap-3 cursor-pointer"
                onClick={() => setShowCategories(!showCategories)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={categoryIcon}
                    alt="Categories"
                    className="w-5 h-5"
                  />
                  <span>Categories</span>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${showCategories ? "rotate-180" : ""
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
              {showCategories && (
                <ul className="pl-8 pt-2 space-y-2 text-base">
                  {subCategories.map((cat) => (
                    <li
                      key={cat.id || cat.category_name}
                      className="hover:text-[#D5B56E] cursor-pointer"
                      onClick={() => {
                        navigate(
                          `/category/${encodeURIComponent(cat.category_name)}`,
                        );
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {cat.category_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart */}
            <NavLink
              to="/add-to-cart"
              className="flex items-center gap-3 hover:text-[#D5B56E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5" />
              <span>Cart</span>
            </NavLink>

            {/* Account */}
            {profileUser ? (
              <>
                <div
                  className="flex items-center gap-3 hover:text-[#D5B56E] cursor-pointer"
                  onClick={() => {
                    navigate("/profile-settings");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <img
                    src={profileUser.picture || profileUser.photo || accountIcon}
                    alt="Profile"
                    className="w-8 h-8 rounded-full shadow-sm"
                  />
                  <span className="font-medium">
                    {profileUser.first_name && profileUser.last_name
                      ? `${profileUser.first_name} ${profileUser.last_name}`
                      : profileUser.name || "Profile"}
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 hover:text-red-500 cursor-pointer transition-colors"
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogOut size={20} color="#FFBA07" />
                  <span className="font-medium">Logout</span>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className="flex items-center gap-3 hover:text-[#D5B56E]"
                onClick={() => setIsMobileMenuOpen(false)}
              >

                <span className="font-medium">Login</span>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

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
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  useAcceptOrDeclineNotificationMutation,
  useGetCartQuery,
  useGetCategoryListQuery,

  useGetNotificationQuery,
  useGetProfileQuery,
} from "../redux/api/authApi";
import { api } from "../redux/api/api";

import { Toaster, toast } from "react-hot-toast";
import { FaTimeline } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

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
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoriesRef = useRef(null);
  const notificationsRef = useRef(null);
  const navigate = useNavigate();
  console.log(userData);

  const { data, isLoading } = useGetCartQuery();
  const { data: getNotification } = useGetNotificationQuery();

  const [acceptOrDeclineNotification] = useAcceptOrDeclineNotificationMutation();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(api.util.resetApiState());
    navigate("/");
  };

  const handleAcceptNotification = async (notification) => {
    if (notification.status === "declined" || notification.status === "decline") {
      toast.error("This offer has already been declined");
      return;
    }
    try {
      if (notification.notification_type === "offer") {
        await acceptOrDeclineNotification({ offer_id: notification.related_id, action: "accept" }).unwrap();
      }
      setShowNotifications(false);
      navigate("/add-to-cart/checkout");
    } catch (e) {
      console.log(e);
      navigate("/add-to-cart/checkout");
      setShowNotifications(false);
    }
  };

  const handleDeclineNotification = async (notification) => {
    try {
      if (notification.notification_type === "offer") {
        await acceptOrDeclineNotification({ offer_id: notification.related_id, action: "decline" }).unwrap();
      }
      setShowNotifications(false);
      toast.success("Notification declined successfully");
    } catch (e) {
      console.log(e);
      toast.error(e?.data?.error || "Failed to decline notification");
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate("/#products");
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);

    if (diffInSeconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;

    return past.toLocaleDateString();
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
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoriesRef, notificationsRef]);

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
          <NavLink to="/add-to-cart" className="flex items-center gap-2 relative">
            <div>
              <img src={cartIcon} alt="" className="pt-1" />
            </div>
            <div

              className="text-white font-medium text-xl hover:text-[#D5B56E] transition "
            >
              <span className=" font-semibold text-gray-300 absolute -top-2 right-0 px-1 bg-red-500 rounded-full text-sm">{`${data?.order_summary?.item_count || 0}`}</span>
            </div>
          </NavLink>
          <div className="flex items-center gap-2 relative cursor-pointer" ref={notificationsRef}>
            <div onClick={() => setShowNotifications(!showNotifications)}>
              <IoMdNotificationsOutline className="text-2xl text-[#D5B56E] " />
            </div>
            <div
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-white font-medium text-xl hover:text-[#D5B56E] transition "
            >
              <span className=" font-semibold text-gray-300 absolute -top-2 right-1 px-1 bg-red-500 rounded-full text-sm">
                {Array.isArray(getNotification) ? (getNotification.filter(n => !n.is_read).length || 0) : (getNotification?.unread_count || 0)}
              </span>
            </div>

            {showNotifications && (
              <div className="absolute top-10 right-0 w-80 bg-white rounded-md shadow-lg z-50 text-black max-h-96 overflow-y-auto">
                <div className="p-3 border-b font-bold text-lg">Notifications</div>
                {Array.isArray(getNotification) && getNotification.length > 0 ? (
                  <div className="flex flex-col">
                    {getNotification.map((notif) => (
                      <div key={notif.id} className="p-3 border-b hover:bg-gray-50 flex flex-col gap-2">
                       <div className="flex items-center justify-between gap-1">
                         <div className="font-semibold text-sm">{notif.title}</div>
                         {notif.is_read === false && <button className="bg-gray-300 text-[#ffffff] px-3 py-1 text-[10px] rounded hover:opacity-80">Unread</button>}
                       </div>
              
                        <div className="text-xs text-gray-600">{notif.message}</div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 mt-1 items-center">
                            <button
                              onClick={() => handleAcceptNotification(notif)}
                              className="bg-black text-[#D5B56E] px-3 py-1 text-xs rounded hover:opacity-80"
                            >
                              Accept
                            </button>
                            {acceptOrDeclineNotification?.data?.status === "declined" || acceptOrDeclineNotification?.data?.status === "decline" ? (
                              <span className="text-red-500 font-semibold text-xs py-1">Declined</span>
                            ) : (
                              <button
                                onClick={() => handleDeclineNotification(notif)}
                                className="bg-red-500 text-white px-3 py-1 text-xs rounded hover:opacity-80"
                              >
                                Decline
                              </button>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-gray-500">
                            <IoTimeOutline />
                            {formatTimeAgo(notif?.created_at)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">No new notifications</div>
                )}
              </div>
            )}
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
                <p className="text-white font-medium text-xl">{profileUser.first_name + " " + profileUser.last_name || "Profile"}</p>

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
                    onClick={() => {
                      setShowProfile(false);
                      handleLogout();
                    }}
                  >
                    Sign Out
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
                className="text-white font-medium border border-gray-400 px-2 py-1 rounded text-xl hover:text-[#D5B56E] transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-white font-medium border border-gray-400 px-2 py-1 rounded text-xl hover:text-[#D5B56E] transition"
              >
                Register
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
              className="flex items-center gap-3 hover:text-[#D5B56E] relative"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5" />
              <span className=" font-semibold text-gray-300 absolute -top-3 left-3 px-1 bg-red-500 rounded-full text-sm">{`${data?.order_summary?.item_count || 0}`}</span>
            </NavLink>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 relative cursor-pointer hover:text-[#D5B56E]" onClick={() => setShowNotifications(!showNotifications)}>
                <div>
                  <IoMdNotificationsOutline className="text-2xl text-[#D5B56E] " />
                </div>
                <div className="text-white font-medium text-xl transition ">
                  <span className="font-semibold text-gray-300 absolute -top-2 left-3 px-1 bg-red-500 rounded-full text-sm">
                    {Array.isArray(getNotification) ? getNotification.filter(n => !n.is_read).length : (getNotification?.unread_count || 0)}
                  </span>
                </div>
                <span>Notifications</span>
              </div>
              {showNotifications && (
                <div className="bg-white rounded-md shadow-lg w-full text-black max-h-60 overflow-y-auto mt-2">
                  <div className="p-3 border-b font-bold text-lg">Notifications</div>
                  {Array.isArray(getNotification) && getNotification.length > 0 ? (
                    <div className="flex flex-col">
                      {getNotification.map((notif) => (
                        <div key={notif.id} className="p-3 border-b hover:bg-gray-50 flex flex-col gap-2">
                          <div className="font-semibold text-sm">{notif.title}</div>
                          <div className="text-xs text-gray-600">{notif.message}</div>
                          <div className="flex gap-2 mt-1 items-center">
                            <button
                              onClick={() => handleAcceptNotification(notif)}
                              className="bg-black text-[#D5B56E] px-3 py-1 text-xs rounded"
                            >
                              Accept
                            </button>
                            {notif.status === "declined" || notif.status === "decline" ? (
                              <span className="text-red-500 font-semibold text-xs py-1">Declined</span>
                            ) : (
                              <button
                                onClick={() => handleDeclineNotification(notif)}
                                className="bg-red-500 text-white px-3 py-1 text-xs rounded"
                              >
                                Decline
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">No new notifications</div>
                  )}
                </div>
              )}
            </div>

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
      <Toaster />
    </header>
  );
};

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-8 md:px-16 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand Description */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Shop<span className="text-yellow-500">Nest</span>
          </h2>
          <p className="text-white font-normal text-base">
            Your one-stop destination for quality products and exceptional
            shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-1 text-white font-normal text-base">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Products</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Categories</h3>
          <ul className="space-y-1 text-white font-normal text-base">
            <li className="hover:text-yellow-500 cursor-pointer">
              Survey Equipment
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Test & Lab Equipment
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Electronics Equipment
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Gaming Equipment
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Accessories Equipment
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Customer Service</h3>
          <ul className="space-y-1 text-white font-normal text-base">
            <li className="hover:text-yellow-500 cursor-pointer">
              Return & Return Policy
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Customer Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-base font-semibold text-white">
        <p>
          © 2023 <span className="">Shop<span className="text-yellow-500">Nest</span></span>. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to='/terms-of-conditions' className="hover:text-yellow-500 cursor-pointer">
            Terms of Conditions
          </Link>
          <Link to='/privacy-policy' className="hover:text-yellow-500 cursor-pointer">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

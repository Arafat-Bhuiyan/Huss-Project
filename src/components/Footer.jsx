import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-4 sm:px-8 md:px-16 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand Description */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-3xl font-bold mb-2">
            <Link className="text-yellow-500" to="/">M<span className="text-white">tech</span></Link>
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
            <li>
              <Link to="/" className="hover:text-yellow-500 cursor-pointer">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link to="/#products">Products</Link></li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">
            Customer Service
          </h3>
          <ul className="space-y-1 text-white font-normal text-base">
            <li>
              <Link
                to="/return-policy"
                className="hover:text-yellow-500 cursor-pointer"
              >
                Return & Return Policy
              </Link>
            </li>
            <li>
              <Link
                to="/customer-support"
                className="hover:text-yellow-500 cursor-pointer"
              >
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base font-semibold text-white">
        <p>
          © 2023{" "}
          <span className="text-yellow-500">
            M<span className="text-white">tech</span>
          </span>{" "}
          . All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link
            to="/terms-of-conditions"
            className="hover:text-yellow-500 cursor-pointer"
          >
            Terms of Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-yellow-500 cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

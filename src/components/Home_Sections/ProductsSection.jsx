import Headphone from "../../assets/img/headphone.png";
import controller from "../../assets/img/controller.png";
import microscope from "../../assets/img/microscope.png";
import laser from "../../assets/img/laser.png";
import white_save from "../../assets/img/white_save.png";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Wireless Headphones",
    description: "Premium sound quality with noise cancellation",
    price: "$129.99",
    image: Headphone,
  },
  {
    name: "Digital Laser Level",
    description: "Professional precision measuring tool",
    price: "$89.95",
    image: laser,
  },
  {
    name: "Digital Microscope",
    description: "1000x magnification with LCD display",
    price: "$199.99",
    image: microscope,
  },
  {
    name: "Pro Gaming Controller",
    description: "Customizable buttons with RGB lighting",
    price: "$69.99",
    image: controller,
  },
];

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <div id="products" className="py-16 bg-[#f9f6ee] px-4 sm:px-6 lg:px-8 xl:px-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Check & Get Your Desired Product!
          </p>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <a
            href="#"
            className="text-base text-blue-500 font-semibold hover:underline"
          >
            See All
          </a>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {Array(3)
          .fill(products)
          .flat()
          .map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col relative"
            >
              {/* Save Button */}
              <button
                onClick={() => navigate("/wishlist")}
                className="absolute top-2 right-2 w-6 h-6 rounded-full shadow text-sm flex items-center justify-center"
              >
                <img src={white_save} alt="" />
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
                onClick={() => navigate("/gaming-equipent/gaming-pc/intel-pc")}
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </span>
                  <button
                    onClick={() => navigate("/add-to-cart")}
                    className="bg-[#ffc107] text-white px-4 py-1 rounded hover:bg-[#e6ac00] transition text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsSection;

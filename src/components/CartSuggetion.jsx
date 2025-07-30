import Headphone from "../assets/img/headphone.png";
import controller from "../assets/img/controller.png";
import microscope from "../assets/img/microscope.png";
import laser from "../assets/img/laser.png";
import white_save from "../assets/img/white_save.png";

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

export const CartSuggetion = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          You may also need{" "}
        </h2>
        <div className=" mt-2">
          <a
            href="#"
            className="text-sm text-yellow-500 font-semibold hover:underline"
          >
            See All
          </a>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(1)
          .fill(products)
          .flat()
          .map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col relative"
            >
              {/* Close Button */}
              <button className="absolute top-2 right-2 w-6 h-6 rounded-full shadow text-sm flex items-center justify-center">
                <img src={white_save} alt="" />
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
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
                  <button className="bg-[#ffc107] text-white px-4 py-1 rounded hover:bg-[#e6ac00] transition text-sm font-medium">
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

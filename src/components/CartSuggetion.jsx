import Headphone from "../assets/img/headphone.png";
import white_save from "../assets/img/white_save.png";
import { toast } from "react-toastify";
import {
  useGetProductListQuery,
  useAddToCartMutation,
} from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://10.10.13.20:8001";

export const CartSuggetion = () => {
  const navigate = useNavigate();
  const { data: productList, isLoading: isProductsLoading } =
    useGetProductListQuery();
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const products = productList || [];
  // Show only a few suggestions, e.g., 4
  const suggestedProducts = products.slice(0, 4);

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCart({
        product_id: productId.toString(),
        quantity: 1,
      }).unwrap();

      toast.success(response.message || "Product added to cart!");
      // Scroll to top to see cart updates
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong.");
    }
  };

  if (isProductsLoading) {
    return <div className="py-10 text-center">Loading suggestions...</div>;
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-0">
          You may also need{" "}
        </h2>
        <div className="self-end sm:self-center">
          <a
            href="/#products"
            className="text-sm text-yellow-500 font-semibold hover:underline"
          >
            See All
          </a>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {suggestedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col relative"
          >
            {/* Save Button */}
            <button
              onClick={() => navigate("/wishlist")}
              className="absolute top-2 right-2 w-6 h-6 rounded-full shadow text-sm flex items-center justify-center bg-white"
            >
              <img src={white_save} alt="Save" />
            </button>

            {/* Image */}
            <img
              src={product.image ? `${BASE_URL}${product.image}` : Headphone}
              alt={product.product_name}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {product.product_name}
              </h3>
              <p className="text-sm text-gray-600 flex-grow line-clamp-2">
                {product.description || "No description available."}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={isAdding}
                  className={`bg-[#ffc107] text-white px-4 py-1 rounded hover:bg-[#e6ac00] transition text-sm font-medium ${
                    isAdding ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isAdding ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import x from "../assets/img/xbtn.png";
import minus from "../assets/img/minusbtn.png";
import plus from "../assets/img/plusbtn.png";
import { useAddToCartMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";

export const CartItem = ({ item }) => {
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  if (!item) return null;

  const handleIncrease = async () => {
    try {
      // Use prouct_id as seen in the user's provided response example
      const productId = item.prouct_id || item.product_id;
      if (!productId) {
        toast.error("Product ID not found");
        return;
      }

      await addToCart({ product_id: productId }).unwrap();
      toast.success("Quantity increased!");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to increase quantity");
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Product Info */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-base sm:text-lg md:text-xl leading-tight">
            {item.product_name}
          </h1>
          <p className="font-normal text-sm text-gray-500">by Mtech.com</p>
          <h3 className="font-bold text-base sm:text-lg md:text-xl mt-1">
            Price: ${item.price}
          </h3>
        </div>
      </div>
      {/* Quantity Controls */}
      <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-center">
        <img
          src={minus}
          alt="Decrease quantity"
          className="cursor-pointer w-6 h-6"
        />
        <p className="text-base font-medium w-4 text-center">{item.quantity}</p>
        <img
          src={plus}
          alt="Increase quantity"
          onClick={handleIncrease}
          className={`cursor-pointer w-6 h-6 ${
            isAdding ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <img
          src={x}
          alt="Remove item"
          className="cursor-pointer w-5 h-5 ml-2"
        />
      </div>
    </div>
  );
};

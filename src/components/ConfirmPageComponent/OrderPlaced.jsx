import tic from "../../assets/img/tic.png";
import { useNavigate } from "react-router-dom";

export const OrderPlaced = () => {
  const product = {
    title: "Intel Core Ultra 5 245K Desktop PC",
    shop: "by ShopNest.com",
    price: 2369,
  };
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    navigate("/add-to-cart/checkout/confirm-order/order-tracking");
  };

  const handleContinueShopping = () => {
    navigate("/#products");
  };
  return (
    <div className="flex flex-col gap-4 bg-white max-w-3xl mx-auto p-8 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-1 mb-10">
        <div className="rounded-full p-2 bg-[#f8f5ee]">
          <img src={tic} alt="" />
        </div>
        <h1 className="font-semibold text-3xl">Order Placed Successfully!</h1>
        <p className="text-base font-normal">Thank You for Your Order</p>
      </div>
      <div className="flex flex-col gap-4 justify-start text-base font-normal">
        <h1 className="font-semibold text-2xl">Order Details</h1>
        <div className="flex w-full justify-between">
          <p>Order ID</p>
          <p>#ORD-7245</p>
        </div>
        <div className="flex w-full justify-between">
          <p>Estimated Delivery</p>
          <p>Jul 20-07, 2025</p>
        </div>
      </div>

      <div className="border-b border-gray-300"></div>

      <div className="py-1">
        <div className="flex justify-between w-full font-semibold text-xl">
          <h1>{product.title}</h1>
          <p>${product.price}</p>
        </div>
        <h3 className="w-full font-normal text-base">QTY: 1</h3>
      </div>
      <div className="py-1">
        <div className="flex justify-between w-full font-semibold text-xl">
          <h1>{product.title}</h1>
          <p>${product.price}</p>
        </div>
        <h3 className="w-full font-normal text-base">QTY: 1</h3>
      </div>
      <div className="py-1">
        <div className="flex justify-between w-full font-semibold text-xl">
          <h1>{product.title}</h1>
          <p>${product.price}</p>
        </div>
        <h3 className="w-full font-normal text-base">QTY: 1</h3>
      </div>

      <div className="border-b border-gray-300"></div>

      <div className="flex justify-between font-normal text-xl">
        <p>Subtotal (3 items)</p>
        <p>$7000.00</p>
      </div>
      <div className="flex justify-between font-normal text-xl">
        <p>Delivery fee</p>
        <p>$80.00</p>
      </div>
      <div className="flex justify-between font-normal text-xl">
        <p>Tax</p>
        <p>$50.00</p>
      </div>
      <div className="flex justify-between font-normal text-xl">
        <p>Total Discount</p>
        <p>15%</p>
      </div>
      <div className="border-b border-gray-300"></div>
      <div className="flex justify-between">
        <p className="font-semibold text-2xl">Total</p>
        <p className="font-semibold text-3xl text-yellow-400">$7130.00</p>
      </div>
      <button
        onClick={() => handleTrackOrder()}
        className="flex items-center justify-center rounded-lg py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white text-xl font-bold shadow"
      >
        Track My Order
      </button>
      <button
        onClick={handleContinueShopping}
        className="flex items-center justify-center border rounded-lg py-1.5 border-yellow-400 bg-white hover:bg-gray-50 text-black text-xl font-bold shadow"
      >
        Continue Shopping
      </button>
      <div className="py-2 flex flex-col justify-center items-center text-xs font-medium">
        <p className="text-black">
          By clicking Place Order, you accept ShopNest
        </p>
        <p className="text-yellow-400">return & shipping policies</p>
      </div>
    </div>
  );
};

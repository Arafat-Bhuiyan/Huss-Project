import yellowTic from "../../assets/img/yellow-tic.png";
import lightYellowTic from "../../assets/img/light-yellow-tic.png";
import grayTic from "../../assets/img/gray-tic.png";
import yellowLine from "../../assets/img/yellow-line.png";
import grayLine from "../../assets/img/gray-line.png";

export const OrderStatus = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col gap-3">
      <h1 className="font-semibold text-2xl pb-4">Order Status</h1>
      {/* Order status with tic and line */}
      <div className="flex gap-3 justify-center items-center">
        <div className="flex flex-col items-center gap-1 justify-center">
          <img src={yellowTic} />
          <p className="font-medium text-sm">Order Placed</p>
          <p className="font-normal text-xs">Jul 10, 2:30 PM</p>
        </div>

        <img src={yellowLine} alt="" />
        <div className="flex flex-col items-center gap-1 justify-center">
          <img src={yellowTic} />
          <p className="font-medium text-sm">Processing</p>
          <p className="font-normal text-xs">Jul 12, 9:00 PM</p>
        </div>

        <img src={yellowLine} alt="" />
        <div className="flex flex-col items-center gap-1 justify-center">
          <img src={lightYellowTic} />
          <p className="font-medium text-sm text-yellow-400">Shipped</p>
          <p className="font-normal text-xs">Jul 14, 3:00 PM</p>
        </div>

        <img src={grayLine} alt="" />

        <div className="flex flex-col items-center gap-1 justify-center text-gray-400">
          <img src={grayTic} />
          <p className="font-medium text-sm">Out for Delivery</p>
          <p className="font-normal text-xs">Pending</p>
        </div>

        <img src={grayLine} alt="" />

        <div className="flex flex-col items-center gap-1 justify-center text-gray-400">
          <img src={grayTic} />
          <p className="font-medium text-sm">Delivered</p>
          <p className="font-normal text-xs">Pending</p>
        </div>
      </div>
      {/* Current status */}
      <div className="bg-stone-200 p-4 rounded-xl ">
        <h1 className="text-base font-medium">
          Current Status: <span>Shipped</span>
        </h1>
        <p className="text-sm font-normal text-gray-500">
          Your order is on the way. Expected delivery:{" "}
          <span>July 20, 2025</span>
        </p>
      </div>
    </div>
  );
};

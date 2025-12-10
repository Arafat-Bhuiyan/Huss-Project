import yellowTic from "../../assets/img/yellow-tic.png";
import lightYellowTic from "../../assets/img/light-yellow-tic.png";
import grayTic from "../../assets/img/gray-tic.png";
import yellowLine from "../../assets/img/yellow-line.png";
import grayLine from "../../assets/img/gray-line.png";

const StatusStep = ({ icon, title, date, colorClass = "text-gray-900", isLast = false, connector, connectorColor }) => (
  <div className="flex md:flex-col items-center gap-2 md:gap-1 flex-1">
    <div className={`flex flex-col items-center text-center ${colorClass}`}>
      <img src={icon} alt={`${title} status`} className="w-6 h-6 md:w-auto md:h-auto" />
      <p className="font-medium text-xs sm:text-sm">{title}</p>
      <p className="font-normal text-[10px] sm:text-xs">{date}</p>
    </div>
    {!isLast && (
      <>
        {/* Vertical line for mobile */}
        <div className={`h-8 w-px md:hidden ${connectorColor === 'yellow' ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
        {/* Horizontal line for desktop */}
        <img src={connector} alt="" className="hidden md:block flex-1" />
      </>
    )}
  </div>
);

export const OrderStatus = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl flex flex-col gap-4">
      <h1 className="font-semibold text-xl md:text-2xl pb-2 md:pb-4">Order Status</h1>
      {/* Order status with tic and line */}
      <div className="flex md:flex-row flex-col items-stretch md:items-center justify-between gap-2 md:gap-3">
        <StatusStep
          icon={yellowTic}
          title="Order Placed"
          date="Jul 10, 2:30 PM"
          connector={yellowLine}
          connectorColor="yellow"
        />
        <StatusStep
          icon={yellowTic}
          title="Processing"
          date="Jul 12, 9:00 PM"
          connector={yellowLine}
          connectorColor="yellow"
        />
        <StatusStep
          icon={lightYellowTic}
          title="Shipped"
          date="Jul 14, 3:00 PM"
          colorClass="text-yellow-400"
          connector={grayLine}
          connectorColor="gray"
        />
        <StatusStep
          icon={grayTic}
          title="Out for Delivery"
          date="Pending"
          colorClass="text-gray-400"
          connector={grayLine}
          connectorColor="gray"
        />
        <StatusStep icon={grayTic} title="Delivered" date="Pending" colorClass="text-gray-400" isLast={true} />
      </div>
      {/* Current status */}
      <div className="bg-stone-200 p-4 rounded-xl ">
        <h2 className="text-sm sm:text-base font-medium">
          Current Status: <span>Shipped</span>
        </h2>
        <p className="text-xs sm:text-sm font-normal text-gray-500">
          Your order is on the way. Expected delivery:{" "}
          <span>July 20, 2025</span>
        </p>
      </div>
    </div>
  );
};

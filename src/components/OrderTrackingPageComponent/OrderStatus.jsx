import yellowTic from "../../assets/img/yellow-tic.png";
import lightYellowTic from "../../assets/img/light-yellow-tic.png";
import grayTic from "../../assets/img/gray-tic.png";
import yellowLine from "../../assets/img/yellow-line.png";
import grayLine from "../../assets/img/gray-line.png";
import { useSearchParams } from "react-router-dom";
import { useOrderTrackingQuery } from "../../redux/api/authApi";

const StatusStep = ({
  icon,
  title,
  date,
  colorClass = "text-gray-900",
  isLast = false,
  connector,
  connectorColor,
}) => (
  <div className="flex md:flex-col items-center gap-2 md:gap-1 flex-1">
    <div className={`flex flex-col items-center text-center ${colorClass}`}>
      <img
        src={icon}
        alt={`${title} status`}
        className="w-6 h-6 md:w-auto md:h-auto"
      />
      <p className="font-medium text-xs sm:text-sm">{title}</p>
      <p className="font-normal text-[10px] sm:text-xs">{date}</p>
    </div>
    {!isLast && (
      <>
        {/* Vertical line for mobile */}
        <div
          className={`h-8 w-px md:hidden ${
            connectorColor === "yellow" ? "bg-yellow-400" : "bg-gray-300"
          }`}
        ></div>
        {/* Horizontal line for desktop */}
        <img src={connector} alt="" className="hidden md:block flex-1" />
      </>
    )}
  </div>
);

export const OrderStatus = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  const { data, isLoading, isError } = useOrderTrackingQuery(orderId, {
    skip: !orderId,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading order status.</div>;

  const { order_status_section } = data;
  const { steps, current_status, updated_at, estimated_delivery } =
    order_status_section;

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl flex flex-col gap-4">
      <h1 className="font-semibold text-xl md:text-2xl pb-2 md:pb-4">
        Order Status
      </h1>
      {/* Order status with tic and line */}
      <div className="flex md:flex-row flex-col items-stretch md:items-center justify-between gap-2 md:gap-3">
        <StatusStep
          icon={steps.pending ? yellowTic : grayTic}
          title="Order Placed"
          date={updated_at}
          connector={steps.processing ? yellowLine : grayLine}
          connectorColor={steps.processing ? "yellow" : "gray"}
        />
        <StatusStep
          icon={steps.processing ? yellowTic : grayTic}
          title="Processing"
          date={steps.processing ? updated_at : "Pending"}
          connector={steps.shipped ? yellowLine : grayLine}
          connectorColor={steps.shipped ? "yellow" : "gray"}
        />
        <StatusStep
          icon={steps.shipped ? yellowTic : grayTic}
          title="Shipped"
          date={steps.shipped ? updated_at : "Pending"}
          colorClass={steps.shipped ? "text-yellow-400" : "text-gray-400"}
          connector={steps.out_for_delivery ? yellowLine : grayLine}
          connectorColor={steps.out_for_delivery ? "yellow" : "gray"}
        />
        <StatusStep
          icon={steps.out_for_delivery ? yellowTic : grayTic}
          title="Out for Delivery"
          date={steps.out_for_delivery ? updated_at : "Pending"}
          colorClass={
            steps.out_for_delivery ? "text-yellow-400" : "text-gray-400"
          }
          connector={steps.delivered ? yellowLine : grayLine}
          connectorColor={steps.delivered ? "yellow" : "gray"}
        />
        <StatusStep
          icon={steps.delivered ? yellowTic : grayTic}
          title="Delivered"
          date={steps.delivered ? updated_at : "Pending"}
          colorClass={steps.delivered ? "text-yellow-400" : "text-gray-400"}
          isLast={true}
        />
      </div>
      {/* Current status */}
      <div className="bg-stone-200 p-4 rounded-xl ">
        <h2 className="text-sm sm:text-base font-medium">
          Current Status: <span className="capitalize">{current_status}</span>
        </h2>
        <p className="text-xs sm:text-sm font-normal text-gray-500">
          Your order is {current_status}. Expected delivery:{" "}
          <span>{estimated_delivery}</span>
        </p>
      </div>
    </div>
  );
};

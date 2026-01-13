export const CheckoutOrderItems = ({ item }) => {
  if (!item) return null;
  return (
    <div className="w-full bg-white rounded-lg p-2 sm:p-3 flex items-start justify-between gap-2 sm:gap-4">
      <div className="flex-grow flex flex-col sm:flex-row justify-between">
        <div>
          <h1 className="font-bold text-sm md:text-base lg:text-lg leading-tight">
            {item.product_name}
          </h1>
          <p className="font-normal text-xs text-gray-500">by Mtech.com</p>
          <h3 className="font-bold text-xs mt-1">QTY: {item.quantity}</h3>
        </div>
        <div className="text-left sm:text-right mt-1 sm:mt-0">
          <h3 className="font-bold text-sm md:text-base lg:text-lg">
            Price: ${item.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

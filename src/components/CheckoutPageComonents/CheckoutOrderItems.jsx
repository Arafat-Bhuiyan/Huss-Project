export const CheckoutOrderItems = ({ product }) => {
  return (
    <div className="w-full bg-white rounded-lg p-2 sm:p-3 flex items-start justify-between gap-2 sm:gap-4">
      <div className="flex-shrink-0">
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex-grow flex flex-col sm:flex-row justify-between">
        <div>
          <h1 className="font-bold text-sm md:text-base lg:text-lg leading-tight">{product.title}</h1>
          <p className="font-normal text-xs text-gray-500">{product.shop}</p>
          <h3 className="font-bold text-xs mt-1">QTY: {product.quantity}</h3>
        </div>
        <div className="text-left sm:text-right mt-1 sm:mt-0">
          <h3 className="font-bold text-sm md:text-base lg:text-lg">Price: ${product.price}</h3>
        </div>
      </div>
    </div>
  );
};

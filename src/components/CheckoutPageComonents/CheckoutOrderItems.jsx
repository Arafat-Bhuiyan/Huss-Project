import smallCpu from "../../assets/img/small-cpu.png";

const product = {
  title: "Intel Core Ultra 5 245K Desktop PC",
  shop: "by Mtech.com",
  price: 2369,
};

export const CheckoutOrderItems = () => {
  return (
    <div className="w-full bg-white rounded-lg p-2 flex items-start justify-between gap-3">
      <div className="flex-shrink-0">
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
          src={smallCpu}
          alt={product.title}
        />
      </div>
      <div className="flex-grow flex flex-col min-[400px]:flex-row justify-between">
        <div>
          <h1 className="font-bold text-sm leading-tight">{product.title}</h1>
          <p className="font-normal text-xs text-gray-500">{product.shop}</p>
          <h3 className="font-bold text-xs mt-1">QTY: 1</h3>
        </div>
        <div className="text-left min-[400px]:text-right mt-1 min-[400px]:mt-0">
          <h3 className="font-bold text-sm">Price: ${product.price}</h3>
        </div>
      </div>
    </div>
  );
};

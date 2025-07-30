import smallCpu from "../../assets/img/small-cpu.png";

const product = {
  title: "Intel Core Ultra 5 245K Desktop PC",
  shop: "by ShopNest.com",
  price: 2369,
};

export const CheckoutOrderItems = () => {
  return (
    <div className="w-full bg-white rounded-lg py-2 px-1 flex items-start justify-between gap-3">
      <div className="w-2/3 flex gap-3">
        <img className="w-14 h-9" src={smallCpu} alt="" />
        <div>
          <h1 className="font-bold text-xs">{product.title}</h1>
          <p className="font-normal text-[9px]">{product.shop}</p>
          <h3 className="w-full font-bold text-xs">QTY: 1</h3>
        </div>
      </div>
      <h3 className="w-1/3 font-bold text-xs text-right">
        Price: ${product.price}
      </h3>
    </div>
  );
};

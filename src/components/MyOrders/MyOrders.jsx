import React from "react";
import { useGetMyOrdersQuery } from "../../redux/api/authApi";
import { ScrollRestoration, useNavigate } from "react-router-dom";

export const MyOrders = () => {
  const navigate = useNavigate();
  const { data: myOrders, isLoading } = useGetMyOrdersQuery();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl font-bold">
        Loading orders...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f9f6ee] px-4 sm:px-6 lg:px-8 xl:px-28 py-3 min-h-screen">
        <ScrollRestoration />
      {/* Breadcrumb */}
      <div className="text-left font-medium mb-6">
        <span className="text-gray-600 text-lg sm:text-xl">Home / </span>
        <span className="text-black font-bold text-lg sm:text-xl">
          My Orders
        </span>
      </div>

      <div className="w-full">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            My Orders
          </h2>

          {!myOrders || myOrders.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-lg">
              You have no orders yet.
            </div>
          ) : (
            <div className="space-y-6">
              {myOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#f8f5ee] border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-gray-800">
                        {order.order_id}
                      </h3>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "processing"
                              ? "bg-blue-100 text-blue-700"
                              : order.status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        Items:
                      </p>
                      <ul className="text-sm text-gray-700 list-disc list-inside">
                        {order.products.map((product, idx) => (
                          <li key={idx} className="truncate max-w-xs">
                            {product.product_name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 self-end sm:self-center">
                    <button
                      onClick={() =>
                        navigate(
                          `/return-policy?id=${order.id}`,
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors whitespace-nowrap"
                    >
                      Return Item
                    </button>
                    <button
                      onClick={() =>
                        navigate(
                          `/add-to-cart/checkout/confirm-order?order_uuid=${order.order_uuid}`,
                        )
                      }
                      className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors whitespace-nowrap"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

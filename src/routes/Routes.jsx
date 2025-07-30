import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import GamingPCPage from "../pages/GamingPc";
import { Wishlist } from "../pages/Wishlist";
import { AddToCart } from "../pages/AddToCart";
import ProductViewPage from "../pages/ProductViewPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { ConfirmOrder } from "../pages/ConfirmOrder";
import { OrderTracking } from "../pages/OrderTracking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/terms-of-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/gaming-pc",
        element: <GamingPCPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/add-to-cart",
        element: <AddToCart />,
      },
      {
        path: "/product-view",
        element: <ProductViewPage />,
      },
      {
        path: "/add-to-cart/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/add-to-cart/checkout/confirm-order",
        element: <ConfirmOrder />,
      },
      {
        path: "/add-to-cart/checkout/confirm-order/order-tracking",
        element: <OrderTracking />,
      },
    ],
  },
]);

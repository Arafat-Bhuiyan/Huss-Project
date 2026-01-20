import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { Wishlist } from "../pages/Wishlist";
import { AddToCart } from "../pages/AddToCart";
import ProductViewPage from "../pages/ProductViewPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { ConfirmOrder } from "../pages/ConfirmOrder";
import { OrderTracking } from "../pages/OrderTracking";
import { CustomerSupport } from "../pages/CustomerSupport";
import { ProfileSettings } from "../pages/ProfileSettings";
import { Return } from "../pages/Return";
import { PaymentSuccess } from "../components/PaymentSuccess/PaymentSuccess";
import { CancelOrder } from "../components/CancelOrder/CancelOrder";
import { MyOrders } from "../components/MyOrders/MyOrders";
import CatWiseProduct from "../pages/CatWiseProduct";

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
        path: "/category/:categoryName",
        element: <CatWiseProduct />,
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
        path: "/products/:id/detail",
        element: <ProductViewPage />,
      },
      {
        path: "/add-to-cart/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/cancel-order",
        element: <CancelOrder />,
      },
      {
        path: "/add-to-cart/checkout/confirm-order",
        element: <ConfirmOrder />,
      },
      {
        path: "/add-to-cart/checkout/confirm-order/order-tracking",
        element: <OrderTracking />,
      },
      {
        path: "/customer-support",
        element: <CustomerSupport />,
      },
      {
        path: "/profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/return-policy",
        element: <Return />,
      },
    ],
  },
]);

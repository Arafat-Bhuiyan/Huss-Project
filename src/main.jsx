import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { router } from "./routes/Routes";
import UserProvider from "./userContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);

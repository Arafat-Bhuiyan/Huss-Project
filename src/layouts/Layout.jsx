import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import SubNavBar from "../components/SubNav";

export const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <SubNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

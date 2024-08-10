import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

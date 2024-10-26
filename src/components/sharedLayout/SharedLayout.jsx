import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./sharedLayout.css";
import Footer from "../footer/Footer";
const SharedLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="shared-layout-inner-contents">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;

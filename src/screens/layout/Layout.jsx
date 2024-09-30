import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Layout() {
  return (
    <>
      <Header />
      <div className="w-full body grid md:grid-cols-12 ">
        <div className=" hidden md:col-span-2 md:block">
          <Sidebar />
        </div>
        <div className="heroSection col-span-12 md:col-span-10">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
// import Navbar from "../Component/Navbar/Navbar";

const MainLayout = () => {
   return (
      <div>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayout;
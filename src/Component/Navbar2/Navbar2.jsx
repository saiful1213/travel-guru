import { CgMenu } from "react-icons/cg"
import logo from '/logo.png'
import { Link, NavLink } from "react-router-dom";



const Navbar2 = () => {

   const navLinks = <>
      <li className="mr-8"><NavLink to="/news">News</NavLink></li>
      <li className="mr-8"><NavLink to="/destination">Destination</NavLink></li>
      <li className="mr-8"><NavLink to="/blog">Blog</NavLink></li>
      <li className="mr-8"><NavLink to="/contact">Contact</NavLink></li>
   </>

   return (
      <div>
         <div className="navbar md:px-32 lg:py-9 z-10">
            
            {/* navbar start */}
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <CgMenu className="text-2xl font-semibold" />
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <Link to="/"><img src={logo} className="w-28" /></Link>
            </div>

            {/* navbar end */}
            <div className="navbar-end hidden lg:flex items-center">
               <ul className="menu menu-horizontal px-1 flex flex-nowrap">
                  {navLinks}
               </ul>
               <Link to="/login"><a className="btn bg-primaryColor border-0 capitalize px-7 py-3">Login</a></Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar2;
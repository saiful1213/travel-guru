import { CgMenu } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom";
import logo from '/Frame.png'



const Navbar = () => {
   
   const navLinks = <>
      <li className="mr-8"><NavLink to="/news" className="hover:bg-white">News</NavLink></li>
      <li className="mr-8"><NavLink to="/destination" className="hover:bg-white">Destination</NavLink></li>
      <li className="mr-8"><NavLink to="/blog" className="hover:bg-white">Blog</NavLink></li>
      <li className="mr-8"><NavLink to="/contact" className="hover:bg-white">Contact</NavLink></li>
   </>

   return (
      <div className="navbar md:px-32 lg:py-9 text-white absolute z-10">
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
         {/* navbar center */}
         <div className="navbar-center hidden lg:flex items-center">
            <div className="relative mr-11">
               <input type="text" placeholder="Search your Destination..." className="input input-bordered border border-white placeholder:text-white placeholder:font-medium bg-[#ffffff33] w-full max-w-sm px-12 text-white" />
               <BsSearch className="top-4 absolute left-4 text-white" />
            </div>
            <ul className="menu menu-horizontal px-1 flex flex-nowrap">
               {navLinks}
            </ul>
         </div>
         {/* navbar end */}
         <div className="navbar-end">
            <Link to="/login"><a className="btn bg-primaryColor border-0 capitalize px-7 py-3">Login</a></Link>
         </div>
      </div>
   );
};

export default Navbar;
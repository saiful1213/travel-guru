import Navbar2 from "../../Component/Navbar2/Navbar2";
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Link } from "react-router-dom";


const Register = () => {

   return (
      <div>
         <Navbar2></Navbar2>
         <div className="pb-16">
            <div className="hero">

               <div className="card w-full max-w-md bg-base-100 border rounded-none border-[#ABABAB]">
                  <h2 className="text-2xl font-bold text-[#000] px-8 pt-9">Create an account</h2>
                  <form className="card-body">
                     <div className="form-control mt-8 border-b border-[#C5C5C5]">
                        <input type="text" placeholder="First Name" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="text" placeholder="Last Name" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="email" placeholder="Username or Email" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="password" placeholder="Passowrd" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="password" placeholder="Confrim Passowrd" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn bg-primaryColor capitalize">Create an account</button>
                     </div>
                  </form>
                  <p className="text-[#000] font-medium text-center pb-6">Already have an account? <Link to="/login" className="text-primaryColor underline">Login</Link></p>
               </div>
            </div>

               <p className="text-center my-6 font-medium text-[#000]">Or</p>
               <div className="mx-auto w-1/3 border border-[#C7C7C7] rounded-full relative">
                  <FaFacebook className="text-3xl top-3 left-2 absolute text-blue-600"/>
                  <p className="text-[#000] font-medium pl-8 pt-3 pb-5 text-center">Continue with Facebook</p>
               </div>
               <div className="mx-auto w-1/3 mt-2 border border-[#C7C7C7] rounded-full relative">
                  <FcGoogle className="text-3xl top-3 left-2 absolute text-blue-600"/>
                  <p className="text-[#000] font-medium pl-8 pt-3 pb-5 text-center">Continue with Google</p>
               </div>
         </div>
      </div>
   );
};

export default Register;
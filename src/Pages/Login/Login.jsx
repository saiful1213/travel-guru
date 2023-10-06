import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../../Component/Navbar2/Navbar2";
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {

   const { EmailSignIn, googleSignUp, FBSignUp } = useContext(AuthContext);
   const navigate = useNavigate();

   // login with Email and Password
   const handleLogin = e => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;

      EmailSignIn(email, password)
         .then(() => {
            console.log('succesfully user login')
            navigate('/')
         })
         .then((err) => {
            console.log('something is wrong', err)
         })
   }


   // login with Google
   const handleGoogleSignUp = () => {
      googleSignUp()
         .then(result => {
            console.log(result.user)
            navigate('/')

         })
         .catch(err => {
            console.log(err.message)
            alert('something is wrong')
         })
   }


   const handleFBSignUp = () =>{
      FBSignUp()
      .then(result =>{
         console.log(result.user)
         navigate('/')
      })
      .catch(err =>{
         console.log(err.message)
         alert('something is wrong')
      })
   }

   return (
      <div>
         <Navbar2></Navbar2>
         <div className="pb-16">
            <div className="hero">

               <div className="card w-full max-w-md bg-base-100 border rounded-none border-[#ABABAB]">
                  <h2 className="text-2xl font-bold text-[#000] px-8 pt-9">Login</h2>
                  <form className="card-body" onSubmit={handleLogin}>
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="email" name="email" placeholder="Username or Email" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="password" name="password" placeholder="Passowrd" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>
                     <div className="flex justify-between mt-6">
                        <div className="flex gap-2"><input type="checkbox" name="" id="" />
                           <p>Remember Me</p></div>
                        <Link className="text-primaryColor underline">Forgot Password</Link>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn bg-primaryColor capitalize">Login</button>
                     </div>
                  </form>
                  <p className="text-[#000] font-medium text-center pb-6">Don’t have an account?  <Link to="/register" className="text-primaryColor underline">Create an account</Link></p>
               </div>
            </div>

            <p className="text-center my-6 font-medium text-[#000]">Or</p>
            <div onClick={handleFBSignUp} className="mx-auto w-1/3 border border-[#C7C7C7] rounded-full relative">
               <FaFacebook className="text-3xl top-3 left-2 absolute text-blue-600" />
               <p className="text-[#000] font-medium pl-8 pt-3 pb-5 text-center">Continue with Facebook</p>
            </div>
            <div onClick={handleGoogleSignUp} className="mx-auto w-1/3 mt-2 border border-[#C7C7C7] rounded-full relative">
               <FcGoogle className="text-3xl top-3 left-2 absolute text-blue-600" />
               <p className="text-[#000] font-medium pl-8 pt-3 pb-5 text-center">Continue with Google</p>
            </div>
         </div>
      </div>
   );
};

export default Login;
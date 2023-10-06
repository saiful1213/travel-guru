import { useContext, useState } from "react";
import Navbar2 from "../../Component/Navbar2/Navbar2";
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";


const Register = () => {

   const navigate = useNavigate();
   const [error, setErr] = useState('');
   const { signUp, googleSignUp, FBSignUp } = useContext(AuthContext);


   // signUpWithEmailAndPassword
   const handleRegister = e => {
      e.preventDefault()
      const fName = e.target.fName.value;
      const lName = e.target.lName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      setErr('')

      signUp(email, password)
         .then(result => {
            console.log(result.user)
            alert('successfully user created')
            updateProfile(result.user, {
               displayName: fName + lName
            })
            navigate('/');
         })
         .catch(error => {
            console.error(error)
            setErr(error.message)
         })
   }


   // signUpWithFacebook
   const handleFBSignUp = () => {
      FBSignUp()
         .then(result => {
            console.log(result.user)
            navigate('/')
         })
         .catch(err => {
            console.log(err.message)
            alert('something is wrong')
         })
   }

   // signUpWithGoogle
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

   return (
      <div>
         <Navbar2></Navbar2>
         <div className="pb-16">
            <div className="hero">

               <div className="card w-full max-w-md bg-base-100 border rounded-none border-[#ABABAB]">
                  <h2 className="text-2xl font-bold text-[#000] px-8 pt-9">Create an account</h2>

                  <form className="card-body" onSubmit={handleRegister}>

                     {/* fname */}
                     <div className="form-control mt-8 border-b border-[#C5C5C5]">
                        <input type="text" name="fName" placeholder="First Name" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>

                     {/* lname */}
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="text" name="lName" placeholder="Last Name" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>

                     {/* email */}
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="email" name="email" placeholder="Username or Email" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>

                     {/* password */}
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="password" name="password" placeholder="Passowrd" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>

                     {/* cPassword */}
                     <div className="form-control mt-6 border-b border-[#C5C5C5]">
                        <input type="password" placeholder="Confrim Passowrd" className="py-1 font-medium text-[#000] placeholder:text-[#000] placeholder:font-medium" required />
                     </div>

                     {/* register */}
                     <div className="form-control mt-6">
                        <button className="btn bg-primaryColor capitalize">Create an account</button>
                     </div>
                  </form>

                  {
                     error && <p className="text-red-500 text-center font-semibold mb-2">{error}</p>
                  }

                  <p className="text-[#000] font-medium text-center pb-6">Already have an account? <Link to="/login" className="text-primaryColor underline">Login</Link></p>
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

export default Register;
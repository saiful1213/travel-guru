/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signInWithEmailAndPassword     } from "firebase/auth";
import auth from "../firebase/firebase.config"

export const AuthContext = createContext(null); 
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProviders = ({children}) => {
   const [user, setUser] = useState(null);
   
   //createUserWithEmailAndPassword
   const signUp = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
   }

   //createUserWithGoogleSignUp
   const googleSignUp = () =>{
      return signInWithPopup(auth, googleProvider)
   }

   //createUserWithFBSignUp
   const FBSignUp = () =>{
      return signInWithPopup(auth, facebookProvider)
   }


   //Sign in a user with an email address and password
   const EmailSignIn = (email, password) =>{
      return signInWithEmailAndPassword (auth, email, password)
   }
   
   //getCurrentlySignedInUser
   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser)
      })
      return ()=>{
         unSubscribe()
      }
   },[])

   const authInfo = {signUp, user, googleSignUp, FBSignUp, EmailSignIn};
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProviders;
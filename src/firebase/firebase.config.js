// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVqStGAxjJ3axnYJ5UkWXMXHiE_3DgCe0",
  authDomain: "travel-guru-d1bd3.firebaseapp.com",
  projectId: "travel-guru-d1bd3",
  storageBucket: "travel-guru-d1bd3.appspot.com",
  messagingSenderId: "1041647920018",
  appId: "1:1041647920018:web:6dab618c7ed6444206974b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
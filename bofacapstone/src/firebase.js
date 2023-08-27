// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClNBiaXSA-W5Sb1UTkibo45kaFwrx-z3A",
  authDomain: "bofa-capstone.firebaseapp.com",
  projectId: "bofa-capstone",
  storageBucket: "bofa-capstone.appspot.com",
  messagingSenderId: "87426139295",
  appId: "1:87426139295:web:17b2ee43da502f78e68eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create an object to export everything
const firebaseExports = {
	app,
	auth,
  };
  
  export default firebaseExports;
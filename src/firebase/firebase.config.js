// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACdwhobYuWXQJOPaz6FiHhQJaTKDcloGg",
  authDomain: "conceptualfirebase-auth-simple.firebaseapp.com",
  projectId: "conceptualfirebase-auth-simple",
  storageBucket: "conceptualfirebase-auth-simple.appspot.com",
  messagingSenderId: "454043109228",
  appId: "1:454043109228:web:78c37dc6ff49db81679549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
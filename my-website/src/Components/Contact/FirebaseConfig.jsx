// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSJxEU1L0jsJNHTvmISG-QGqRl5SYGKe4",
  authDomain: "my-react-portfolio-c6d3e.firebaseapp.com",
  projectId: "my-react-portfolio-c6d3e",
  storageBucket: "my-react-portfolio-c6d3e.appspot.com",
  messagingSenderId: "903409105305",
  appId: "1:903409105305:web:27222108e0a43456ac7b08",
  measurementId: "G-HETEL9MHHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
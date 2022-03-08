// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3pSOw0z_XJtA8G2DRSUpEIGV5-kxKbb4",
  authDomain: "fanpage-da786.firebaseapp.com",
  projectId: "fanpage-da786",
  storageBucket: "fanpage-da786.appspot.com",
  messagingSenderId: "763430438104",
  appId: "1:763430438104:web:55d2b9fd7b82ae186cc3ad",
  measurementId: "G-E11KHYFE84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
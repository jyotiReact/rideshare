import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0qBlOqr4LXLhNhwCb-HJ47yQJVoxizsI",
  authDomain: "reachyo-ride-share.firebaseapp.com",
  projectId: "reachyo-ride-share",
  storageBucket: "reachyo-ride-share.firebasestorage.app",
  messagingSenderId: "1063573410380",
  appId: "1:1063573410380:web:bb935ffd7cff9d2ad99ae9",
  measurementId: "G-8QSB6312NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


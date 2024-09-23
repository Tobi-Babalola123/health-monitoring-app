import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBT2f9lQjexw5DLwRuOblVlPy6eJQsR_8",
  authDomain: "health-monitoring-app-3e55a.firebaseapp.com",
  projectId: "health-monitoring-app-3e55a",
  storageBucket: "health-monitoring-app-3e55a.appspot.com",
  messagingSenderId: "840950323974",
  appId: "1:840950323974:web:4e1a0d3569eb8803259c87",
  measurementId: "G-BFFEJB5X12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

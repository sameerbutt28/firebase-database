import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyBOuc4-OUCPmTVnc15Uu18bZtsC20ncQDI",
  authDomain: "auhentication-app-a896e.firebaseapp.com",
  databaseURL: "https://auhentication-app-a896e-default-rtdb.firebaseio.com",
  projectId: "auhentication-app-a896e",
  storageBucket: "auhentication-app-a896e.appspot.com",
  messagingSenderId: "1037162023200",
  appId: "1:1037162023200:web:5d8fa67ce2b154fe49af45",
  measurementId: "G-T43D1W3XVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

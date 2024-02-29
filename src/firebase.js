import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

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
const app = initializeApp(firebaseConfig); //here we are initializinf the app 
const db = getFirestore(app); // here we are accessing the firestore with the creditianls of our app with in firebaseconfig.


// Add a new document with a generated id.
// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), { //To create or overwrite a single document, use the following language-specific set() methods:
//here the first DB is for the database then CITIES here is the collection in which we are putting a new document LA and under which the object is the sub fields of the collection cites under the document LA.

  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
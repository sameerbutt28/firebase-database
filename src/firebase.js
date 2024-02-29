import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, deleteField} from "firebase/firestore"; 

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
const cityRef = doc(db, 'cities', 'BJ'); //the cityRef here act as an indicator and the LA show that here in this document we are going to merge fields.
setDoc(cityRef, { capital: true,
environemnt:"good" }, { merge: true }); // here the first arguement is the indcator we can add as much fields as we want and the third argueent is a bool value whether u want ot merge it or not.



//ADDING A NEW COLLECTION TO A DATABASE WITH AN AUTO GENEATED ID.



// Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan" // everytime the node file will run this will make a new instnace to the database 
// });
// console.log("Document written with ID: ", docRef.id);



//UPDATING THE FIELDS WITHIN THE DOCUMENTS 
const washingtonRef = doc(db, "cities", "BJ");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: "DC",
  environemnt: "bad",
});
await deleteDoc(doc(db, "cities", "DC"));




// DELETEINGGGGGGGGGG A DOCUMENT
// await deleteDoc(doc(db, "cities", "BJ")); //here through the whole of the docment of the BJ is deleted from the database.




// DELETEINGGGGGGGGGG A FIELD

const cityyRef = doc(db, 'cities', 'BJ');

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
    environemnt: deleteField(),
    capital: deleteField()
});
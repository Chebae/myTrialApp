// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrpmNQxd7ksTFnoHNMvsruamobUiOuQw",
  authDomain: "mytrial-app.firebaseapp.com",
  projectId: "mytrial-app",
  storageBucket: "mytrial-app.appspot.com",
  messagingSenderId: "1017470154092",
  appId: "1:1017470154092:web:407188a29f424c301f2f49",
  measurementId: "G-MKWVW0KK6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export{app}
export{analytics}
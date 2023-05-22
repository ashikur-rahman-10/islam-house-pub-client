// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7Vji48LhtOoN4IsAPlbEdvYO5s5gGV5E",
    authDomain: "islam-house-publications.firebaseapp.com",
    projectId: "islam-house-publications",
    storageBucket: "islam-house-publications.appspot.com",
    messagingSenderId: "163284094196",
    appId: "1:163284094196:web:aa00e41665e873758462a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
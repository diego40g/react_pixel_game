import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCfocqRVF-SwH5DJd3QXDqItGbpiCAOFqg",
    authDomain: "react-crud-50094.firebaseapp.com",
    projectId: "react-crud-50094",
    storageBucket: "react-crud-50094.appspot.com",
    messagingSenderId: "900776081018",
    appId: "1:900776081018:web:a18e4d9caa28d37fdaadc3",
    measurementId: "G-Y1GL6SS5HY"
  };

const app=initializeApp(firebaseConfig)
export const analytics=getAnalytics(app)
export const db=getFirestore(app)


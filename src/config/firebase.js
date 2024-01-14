import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcWTnUdNL8bKG2GwkB4KmW_XVj6s8nt5A",
  authDomain: "ecommerce-react-a02e9.firebaseapp.com",
  projectId: "ecommerce-react-a02e9",
  storageBucket: "ecommerce-react-a02e9.appspot.com",
  messagingSenderId: "735671144281",
  appId: "1:735671144281:web:b4ba7a54845a72ad264648"
};

 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)
 
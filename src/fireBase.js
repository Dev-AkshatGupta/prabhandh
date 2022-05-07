import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBWQtUsLQmot6hePXZc-tE9mco-YpcWf0",
  authDomain: "tracker-63593.firebaseapp.com",
  projectId: "tracker-63593",
  storageBucket: "tracker-63593.appspot.com",
  messagingSenderId: "583576596934",
  appId: "1:583576596934:web:84b8acc36bc5aae768c2c7",
  measurementId: "G-W30CMZR8C4"
};



const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export default app;
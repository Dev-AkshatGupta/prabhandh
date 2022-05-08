import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore,doc,setDoc} from "@firebase/firestore";


const firebaseConfig = {
// apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket ,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
//   measurementId:process.env.REACT_APP_measurementId
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
// export const createUser=async(user,userDetails)=>{
 
//  try{
//    await setDoc(doc(db,"users",user.uid),userDetails)} 
// catch(error){
//   console.log({error})
// } 
// }


export const createUserDocument = async (user, details) => {
  if (!user) return;

  // const userRef = collection(db,`users/${user.uid}`);

  // const snapshot = await userRef.get();

  if (true) {
     
 try{
   await setDoc(doc(db,"users",user.uid),details)} 
catch(error){
  console.log({error})
} 
  }
};

export default app;
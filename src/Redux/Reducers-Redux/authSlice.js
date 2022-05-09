import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  updateDoc,
  getDocs,
} from "@firebase/firestore";
import { db } from "./../../fireBase";
import { createUserDocument } from "./../../fireBase";
import { auth } from "./../../fireBase";
// import { getDatabase, ref, onValue} from "firebase/database";

export const logIn = createAsyncThunk("auth/logIn", async function (details) {
  const email = details.email,
    password = details.password;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(user ? user : null));
    return user;
  } catch (error) {
    console.log(error.response);
  }
});

export const signUp = createAsyncThunk("auth/signUp", async function (details) {
  const email = details.email,
    password = details.password;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user ? user : null));
    createUserDocument(user, {
      address: "",
      email: user.email,
      latitude: "",
      longitude: "",
    });
    return user;
  } catch (error) {
    console.log(error.response);
  }
});

export const logout = createAsyncThunk("auth/logout", async function(){
  localStorage.setItem("user", null);
  return null;
})

export const getPumpUserData = createAsyncThunk(
  "auth/getPumpUserData",
  async (user) => {
    console.log("triggered");
    const userRef = collection(db, "users");
    const data = await getDocs(userRef);
    const userDataObj = data.docs
      .map((user) => ({ ...user.data(), id: user.id }))
      .filter((item) => item.id === user.uid)[0];
    console.log(userDataObj);
    return userDataObj;
  }
);
export const updateThePumpData = createAsyncThunk(
  "auth/createThePumpData",
  async (details) => {
    const userDoc = doc(db, "users", details.uid);
    // so details.data is basically a object needs to be updated with the help of this function
    const newFields = details.data;
    await updateDoc(userDoc, newFields);
  }
);

const initialState = {
  currentUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  pumpUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(getPumpUserData.fulfilled, (state, action) => {
        state.pumpUser = action.payload;
      });
  },
});
export const { authStateChange } = authSlice.actions;
export default authSlice.reducer;

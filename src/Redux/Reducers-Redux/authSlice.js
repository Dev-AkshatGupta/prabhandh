import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth";
import { createUserDocument } from "./../../fireBase";
import { auth } from "./../../fireBase";


export const logIn = createAsyncThunk("auth/logIn", async function (details) {
    const email = details.email, password = details.password;
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem(
            "user",
            JSON.stringify(user ? user : null)
        );
        return user;
    } catch (error) {
        console.log(error.response);
    }
});
export const signUp = createAsyncThunk("auth/signUp", async function (details) {
    const email = details.email, password = details.password;
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        localStorage.setItem(
            "user",
            JSON.stringify(user ? user : null)
        );
        //   await createUserDocument(user,{address:"",email:user.email,latitude:"",longitude:"",} ); 
        //  createUser(user, details); 
        return user;
    } catch (error) {
        console.log(error.response);
    }
});


const initialState = {
    currentUser: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    loading: false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authStateChange: (state) => {
            onAuthStateChanged(auth, currentUser => { state.currentUser = currentUser });
        },
    },
    extraReducers(builder) {
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
    },
})
export const { authStateChange } = authSlice.actions
export default authSlice.reducer;
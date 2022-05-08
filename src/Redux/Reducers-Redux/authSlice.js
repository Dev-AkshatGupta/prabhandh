import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import {notifySuccess,notifyError} from "Utilities/Notifications";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {auth} from "./../../fireBase";
export const logIn=createAsyncThunk("auth/logIn", async  function (details){
        const email=details.email , password=details.password;
    try {
        // console.log({details});
        const {data}=await signInWithEmailAndPassword(auth,email,password);
        onAuthStateChanged(auth,(currentUser)=>console.log(currentUser));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.response);
    }
    });
export const signUp=createAsyncThunk("auth/signUp",async function (details){
      const email=details.email , password=details.password;
    try {
        const data=await  createUserWithEmailAndPassword(auth,email,password);
        
    } catch (error) {
        console.log(error.response);
    }
    });
  

const initialState={
    currentUser:{},
    loading:false
    }


const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers(builder){
        builder
   .addCase(logIn.fulfilled,(state,action)=>{
   onAuthStateChanged(auth,(currentUser)=>state.currentUser=currentUser);
   })
   .addCase(signUp.fulfilled,(state,action)=>{
    onAuthStateChanged(auth,(currentUser)=>state.currentUser=currentUser);
   })
    },
})
export default authSlice.reducer;
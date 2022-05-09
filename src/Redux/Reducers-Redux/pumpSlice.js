import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { collection,getDocs} from "firebase/firestore";
import { notifyInfo,notifyError } from "Utilities/Notifications";
import {db} from "./../../fireBase";

const cngPumpRef=collection(db,"users"); 

export const cngPumpData=createAsyncThunk("pump/cngPumpData",async ()=>{
    const data=await getDocs(cngPumpRef);
   
    return data.docs.map(pump=>({...pump.data(),id:pump.id}));
});




const initialState={
    cngPump:[],

};

const pumpSlice=createSlice({
    name:"pump",
    initialState,
    extraReducers(builder){
        builder
        .addCase(cngPumpData.fulfilled,(state,action)=>{
            state.cngPump=action.payload;
            notifyInfo("Welcome user");
        })
        
    },
})

    export default pumpSlice.reducer;
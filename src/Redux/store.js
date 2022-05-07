import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers-Redux/authSlice";
import pumpsReducer from "./Reducers-Redux/pumpSlice";
 const store=configureStore({
    reducer:{
        auth:authReducer,
        pumps:pumpsReducer,    
    }
});

export default store;
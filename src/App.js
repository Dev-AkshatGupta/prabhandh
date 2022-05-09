import "./app.css"
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cngPumpData } from "./Redux/Reducers-Redux/pumpSlice";
import { useEffect } from "react";
import { Header, Footer } from "Components"
import { PumpOwner } from "./Pages/PumpOwner/PumpOwner";
import PrivateRoute from "./Components/CustomRoute/PrivateRoute";
import {RestrictedRoute} from "./Components/CustomRoute/RestrictedRoute";
import AuthenticationPage  from "./Pages/AuthenticationPage/AuthenticationPage";
import { authStateChange } from "./Redux/Reducers-Redux/authSlice";
import ExperimentPage from "./ExperimentPage";
import { getPumpUserData } from "./Redux/Reducers-Redux/authSlice";
import UpdateMachine from "./Pages/UpdateMachine/UpdateMachine";
import UpdatePump from "./Pages/UpdatePump/UpdatePump";
import Settings from "./Pages/Settings/Settings";
const  App = () =>{
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(cngPumpData());
  },[])
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<AuthenticationPage />} path="/authentication" />
        
        <Route element={<PrivateRoute />}>

          {/* <Route element={<PumpOwner />} path="/myDetails" />
          <Route path="/myDetails/:profileAction" element={<PumpOwner />} /> */}

          <Route path="/updateMachine" element={<UpdateMachine />} />
          <Route path="/updatePump" element={<UpdatePump />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>

      <Footer/>
      <ExperimentPage/>
    </div>
  );
}

export default App;

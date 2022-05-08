import "./app.css"
import LandingPage from "./Pages/LandingPage/LandingPage";
import {Routes,Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cngPumpData} from "./Redux/Reducers-Redux/pumpSlice";
import { useEffect } from "react";
import {Header,Footer} from "Components"
import { PumpOwner } from "./Pages/PumpOwner/PumpOwner";

import AuthenticationPage  from "./Pages/AuthenticationPage/AuthenticationPage";
import { authStateChange } from "./Redux/Reducers-Redux/authSlice";

const  App = () =>{
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(cngPumpData());
// dispatch(authStateChange());
  },[])
  return (
    <div className="App ">

      <Header />
{/* 
      <Routes>
        <Route element={<LandingPage/>} path="/"></Route>
        <Route element={<PumpOwner/>} path="/myDetails">
          <Route path=":profileAction" element={<PumpOwner />} />
        </Route>
      <Route element={<AuthenticationPage/>} path="/"></Route>
      </Routes> */}
      
     <AuthenticationPage/>
<Footer/>
    </div>
  );
}

export default App;

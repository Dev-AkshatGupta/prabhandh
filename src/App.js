import LandingPage from "./Pages/LandingPage/LandingPage";
import {Routes,Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cngPumpData} from "./Redux/Reducers-Redux/pumpSlice";
import { useEffect } from "react";
const  App = () =>{
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(cngPumpData());
  },[])
  return (
    <div className="App ">
      <Routes>
        <Route element={<LandingPage/>} path="/"></Route>
      </Routes>

    </div>
  );
}

export default App;

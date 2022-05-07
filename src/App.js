import LandingPage from "./Pages/LandingPage/LandingPage";
import {Routes,Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cngPumpData} from "./Redux/Reducers-Redux/pumpSlice";
import { useEffect } from "react";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import AuthenticationPage  from "./Pages/AuthenticationPage/AuthenticationPage";
const  App = () =>{
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(cngPumpData());
  },[])
  return (
    <div className="App ">
      <Header/>
      <Routes>
        {/* <Route element={<LandingPage/>} path="/"></Route> */}
        <Route element={<AuthenticationPage/>} path="/"></Route>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;

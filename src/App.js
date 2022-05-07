import LandingPage from "./Pages/LandingPage/LandingPage";
import {Routes,Route} from "react-router-dom";
const  App = () =>{
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path="/"></Route>
      </Routes>
        {/* <LandingPage/> */}
    </div>
  );
}

export default App;

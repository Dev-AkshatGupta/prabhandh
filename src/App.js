import "./app.css"
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cngPumpData } from "./Redux/Reducers-Redux/pumpSlice";
import { useEffect } from "react";
import { Header, Footer } from "Components"
import { PumpOwner } from "./Pages/PumpOwner/PumpOwner";
import PrivateRoute from "./Components/CustomRoute/PrivateRoute";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cngPumpData());
    // dispatch(authStateChange());
  }, [dispatch])
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<AuthenticationPage />} path="/authenticate" />
        <Route element={<PrivateRoute />}>
          <Route element={<PumpOwner />} path="/:userId" />
          <Route path="/:userId/:profileAction" element={<PumpOwner />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

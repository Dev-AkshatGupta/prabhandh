import LandingPage from "./Pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cngPumpData } from "./Redux/Reducers-Redux/pumpSlice";
import { useEffect } from "react";
import { Header, Footer } from "Components";
import PrivateRoute from "./Components/CustomRoute/PrivateRoute";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import UpdateMachine from "./Pages/UpdateMachine/UpdateMachine";
import UpdatePump from "./Pages/UpdatePump/UpdatePump";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cngPumpData());
  }, [dispatch]);
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<AuthenticationPage />} path="/authentication" />

        <Route element={<PrivateRoute />}>

          <Route path="/updateMachine" element={<UpdateMachine />} />
          <Route path="/updatePump" element={<UpdatePump />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

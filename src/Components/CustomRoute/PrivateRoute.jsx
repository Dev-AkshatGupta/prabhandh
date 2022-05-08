import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default PrivateRoute;

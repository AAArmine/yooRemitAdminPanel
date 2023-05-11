import { Outlet } from "react-router";
import Login from "../templates/login";

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};
export default ProtectedRoutes;

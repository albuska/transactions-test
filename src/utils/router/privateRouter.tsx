import { Navigate } from "react-router-dom";
import useAuthStore from "../../useAuthStore";

const PrivateRouter = () => {
  const { isLoggedIn } = useAuthStore();

  console.log(isLoggedIn, "isLoggedIn");

  return isLoggedIn ? <Navigate to="/board" /> : <Navigate to="/" />;
};

export default PrivateRouter;

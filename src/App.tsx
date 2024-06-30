import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icons } from "./components/Icons";
import { SharedLayout } from "./components/SharedLayout";
// import { PrivateRoute } from "./utils/router/PrivateRoute";
// import { RestrictedRoute } from "./utils/router/RestrictedRoute";

function App() {
  // const Home = lazy(() => import("./pages/Home.tsx"));
  const TransactionsBoard = lazy(() => import("./pages/TransactionsBoard.tsx"));
  const NotFound = lazy(() => import("./pages/NotFound.tsx"));

  return (
    <div>
      <Icons />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TransactionsBoard />} />
          {/* <Route
            index
            element={
              <RestrictedRoute redirectTo="/board" component={<Home />} />
            }
          /> */}
          {/* <Route
            path="/board"
            element={
              <PrivateRoute redirectTo="/" component={<TransactionsBoard />} />
            }
          /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

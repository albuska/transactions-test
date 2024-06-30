import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icons } from "./components/Icons";
import { SharedLayout } from "./components/SharedLayout";
// import PrivateRouter from "./utils/router/privateRouter.tsx";

function App() {
  const Home = lazy(() => import("./pages/Home.tsx"));
  const TransactionsBoard = lazy(() => import("./pages/TransactionsBoard.tsx"));
  const NotFound = lazy(() => import("./pages/NotFound.tsx"));

  return (
    <div>
      <Icons />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route element={<PrivateRouter />}> */}
          <Route path="board" element={<TransactionsBoard />} />
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

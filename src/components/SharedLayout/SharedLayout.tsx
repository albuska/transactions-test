import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader";
import { Header } from "../Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <hr></hr>
      <main className="main-container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

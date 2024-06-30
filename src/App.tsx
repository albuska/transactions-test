import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TransactionBoard } from "./components/TransactionBoard";
import { Icons } from "./components/Icons";

function App() {
  return (
    <>
      <Icons />
      <TransactionBoard />
      <ToastContainer />
    </>
  );
}

export default App;

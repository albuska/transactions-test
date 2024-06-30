import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import Loader from "./components/Loader/Loader.tsx";
import { store, persistor } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/transactions-test">
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

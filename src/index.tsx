import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../src/storeRedux";
import Routing from "./routes";
import { ToastProvider, useToasts } from "react-toast-notifications";

ReactDOM.render(
  <React.StrictMode>
    {
      <ToastProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routing />
          </PersistGate>
        </Provider>
      </ToastProvider>
    }
  </React.StrictMode>,
  document.getElementById("root")
);

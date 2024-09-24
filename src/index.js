import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import store from "./Store/store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

reportWebVitals();

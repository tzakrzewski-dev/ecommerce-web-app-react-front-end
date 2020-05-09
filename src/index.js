import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import cartReducer from "./assets/components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

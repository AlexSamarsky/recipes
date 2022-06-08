import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import App from "./components/App/App.jsx";
import { helloWorld, changeCategory } from "./actions";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// React.render(<App/>, document.getElementById('react-app'))

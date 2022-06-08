import React, { Component } from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// import { Button } from "react-bootstrap";
// import CategorySwitch from "../CategorySwitch/CategorySwitch.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import store from "../../store/configureStore";
// import { helloWorld } from "../../actions";

// console.log("store", store.getState());

// store.dispatch(helloWorld("text"));

// const store = createStore(() => {}, { hello: "world" });

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello1</h1>

        {/* <Button className="btn">Name</Button> */}
        {/* <CategorySwitch /> */}
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);

export default App;

// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// Reducers
import reducer from "./reducers";
// Styles
import "./index.css";
// Components
import App from "./App";

// Create redux store (w/ logger middleware)
const store = createStore(reducer, applyMiddleware(logger, thunk));

// Start Mock API
const { worker } = require("./mocks/browser");
worker.start();

// Render the Frontend (strict mode)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.

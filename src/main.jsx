import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import board from "./features/Board.js"
const store = configureStore({
  reducer: {
       board
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import board from "./features/Board.js";
import mainTask from "./features/Task.js"
import Task from "./pages/Task.jsx";
const store = configureStore({
  reducer: {
    board,
    mainTask,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

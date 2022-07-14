import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import App from "./App";
import "./SCSS/_base.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

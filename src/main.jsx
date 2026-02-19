import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import GoToTop from "./components/GoToTop";

if (process.env.NODE_ENV === "development") {
  import("vconsole").then((module) => {
    new module.default();
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  <GoToTop />
  </BrowserRouter>
);
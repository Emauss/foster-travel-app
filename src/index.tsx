import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { Router as App } from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

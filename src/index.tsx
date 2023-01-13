import ReactDOM from "react-dom";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { Router as App } from "./routes/Router";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app-root")
);

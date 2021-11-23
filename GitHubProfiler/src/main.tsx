import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GitHubMain from "./Components/GitHubHome/GitHubMain";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GitHubMain />
  </React.StrictMode>,
  document.getElementById("root")
);

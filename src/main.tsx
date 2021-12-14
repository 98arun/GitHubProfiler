import React from "react";
import ReactDOM from "react-dom";
import GitHubProfiler from "./Components/GitHubHome";
import store from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GitHubProfiler />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

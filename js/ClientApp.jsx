import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};

renderApp();

// module is coming from webpack
// this is specifically for webpack
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}

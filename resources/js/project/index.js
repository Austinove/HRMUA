import React from "react";
import ReactDOM from "react-dom";
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/scss/paper-kit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";
// pages
import App from "./app";
if (document.getElementById("front-end")) {
    ReactDOM.render(<App />, document.getElementById("front-end"));
}

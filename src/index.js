import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Auth from "./Components/Auth/Auth";
import Register from "./Components/Auth/Reg";
//import App from './App';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import SketchFieldDemo from "./main";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/canvas">
        <SketchFieldDemo />
      </Route>{" "}
      <Route exact path="/login">
        <Auth />
      </Route>{" "}
      <Route path="/">
        <Register />
      </Route>{" "}
    </Switch>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

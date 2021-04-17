import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeveloperProfileDetails from "./DeveloperProfileDetails/DeveloperProfileDetails";

function Start() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/DeveloperProfileDetails/:id"
          component={DeveloperProfileDetails}
        />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}
ReactDOM.render(<Start />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

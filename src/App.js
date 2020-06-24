import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/hats" component={HatsPage} />
  </Switch>
);

export default App;

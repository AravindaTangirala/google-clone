import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import React from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

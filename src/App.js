import React, { Component } from 'react';
import logo from './logo.svg';
import Home from "./Home.js";
import What from "./What.js";
import { Route, Switch, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component= { Home } />
              <Route exact path="/what" component= { What } />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

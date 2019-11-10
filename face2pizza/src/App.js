import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pizza from './Pizza';
import Upload from './Upload';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Pizza">
            <Pizza />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

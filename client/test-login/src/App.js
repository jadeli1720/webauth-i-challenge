import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">User List</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;

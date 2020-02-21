import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users'

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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">User List</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Logo from "./components/logo";
import Characters from './components/characters/character'
import Login from './components/login/login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <Logo></Logo>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Characters">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Characters">
            <Characters />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

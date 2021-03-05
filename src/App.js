import React from "react";
import Logo from "./components/logo";
import Characters from './components/characters/character'
import Details from './components/characters/details'
import Login from './components/login/login'
import Privateroute from './components/routing/privateroute'

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
        <Privateroute path="/characters">
            <Characters/>
        </Privateroute>
        <Privateroute path="/details/:id">
            <Details/>
         </Privateroute>
         <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

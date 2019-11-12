import React from 'react';
import './static/css/style.css'
import Nav from './Components/Nav'

import Home from './Screens/Home'
import About from './Screens/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (


    <Router>
      <div>
        <Nav />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

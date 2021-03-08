import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// PAges
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

const Menu = () => {
  return (
    <Router>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        {/* HOME at the end */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Menu;

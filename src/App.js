import React, { Fragment } from "react";

import "./css/main.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Fragment>
          <Navbar />
          <Home />
          <About />
          <Projects />
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch> */}
        </Fragment>
      </Router>
    </div>
  );
};

export default App;

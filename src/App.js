import React, { Fragment, useState, useEffect, useRef } from "react";

import "./css/main.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

/**
 * @description Mat UI
 */
import { theme } from "../src/styles/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

/**
 *
 * @description FontAwesome
 */

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faChrome,
  faWordpressSimple,
  faAndroid,
  faApple,
  faNodeJs,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
// import {
// } from "@fortawesome/free-solid-svg-icons";

library.add(
  faReact,
  faChrome,
  faWordpressSimple,
  faAndroid,
  faApple,
  faJs,
  faNodeJs
);

/**
 * @description for dynamic page width
 * passed to the <AlbumItem/> by props
 */
const App = () => {
  const containerRef = useRef();
  const [arrClasses, setArrClasses] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /**
   * @desc function to change matrix once the scroll is over
   */

  function scrollStop(callback, refresh = 66) {
    // Make sure a valid callback was provided
    if (!callback || typeof callback !== "function") return;

    // Setup scrolling variable
    let isScrolling;

    // Listen for scroll events
    window.addEventListener(
      "scroll",
      function (event) {
        console.log("start", arrClasses.join(" "));

        // arrClasses = [];

        if (arrClasses.length === 1) arrClasses.splice(0, 1);
        if (arrClasses.length >= 2) return;

        arrClasses.push("matrix__start");
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(callback, refresh);
      },
      false
    );
  }

  scrollStop(() => {
    arrClasses.splice(0, 1);
    // arrClasses = [];

    arrClasses.push("matrix__stop");
    console.log("stop", arrClasses.join(" "));
  });

  console.log("out", arrClasses.join(" "));

  return (
    <div
      className={`${arrClasses.join(" ")}container`}
      // style={{ height: "1000px" }}
    >
      <Router>
        <MuiThemeProvider theme={theme}>
          <Fragment>
            <Navbar />
            <Home windowHeight={height} />
            <Projects windowHeight={height} />
            <About windowHeight={height} />
          </Fragment>
        </MuiThemeProvider>
      </Router>
    </div>
  );
};

export default App;

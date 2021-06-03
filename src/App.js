import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";

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

  useLayoutEffect(() => {
    // console.log("useE", arrClasses);
    // console.log(containerRef.current);
    containerRef.current.classList.remove("matrix__start");
    //eslint-disable-next-line
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
        // console.log("start", containerRef.current);

        // arrClasses = [];
        if (containerRef.current === undefined) return;
        // if (arrClasses.length === 1) arrClasses.splice(0, 1);
        // if (arrClasses.length >= 2) return;
        containerRef.current.classList.add("matrix__start");

        // arrClasses.push("matrix__start ");
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(callback, refresh);
      },
      false
    );
  }

  scrollStop(() => {
    // arrClasses.splice(0, 1);
    // arrClasses = [];
    // setTimeout(() => {
    containerRef.current.classList.remove("matrix__start");
    //   console.log("removed");
    // }, 2000);

    // arrClasses.push("matrix__stop ");
    // console.log("stop", arrClasses.join(" "));
  });

  // console.log("out", arrClasses.join(" "));
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <div
            ref={containerRef}
            className={`${arrClasses.join(" ")}container`}
            // style={{ height: "1000px" }}
          >
            <Navbar />
            <Home windowHeight={height} />
            <Projects windowHeight={height} />
            <About windowHeight={height} />
          </div>
        </Fragment>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;

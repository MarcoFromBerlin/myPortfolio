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

  const [anchorHome, setAnchorHome] = useState();
  const [anchorProject, setAnchorProject] = useState();
  const [anchorAbout, setAnchorAbout] = useState();

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
    setAnchorHome(document.querySelector("#home"));
    setAnchorProject(document.querySelector("#projects"));
    setAnchorAbout(document.querySelector("#about"));
    // console.log("useE", arrClasses);
    // console.log(containerRef.current);
    containerRef.current.classList.remove("matrix__start");
    // console.log(anchor.getBoundingClientRect());

    //eslint-disable-next-line
  }, []);

  const checkDivsPosition = () => {
    if (
      anchorHome === undefined ||
      anchorProject === undefined ||
      anchorAbout === undefined
    )
      return;

    const posHome = anchorHome.getBoundingClientRect().top;
    const posProj = anchorProject.getBoundingClientRect().top;
    const posAbout = anchorAbout.getBoundingClientRect().top;
    /**
     * @desc creates arr with all the values
     */
    let arrPos = [
      { anchor: "#home", pos: posHome },
      { anchor: "#projects", pos: posProj },
      { anchor: "#about", pos: posAbout },
    ];

    // const closestDiv = arrPos.reduce(function (prev, curr) {
    //   return prev.pos > curr.pos ? prev : curr;
    // });

    const closestDiv = arrPos.reduce((a, b) => {
      return Math.abs(b.pos - 0) < Math.abs(a.pos - 0) ? b : a;
    });

    return closestDiv;

    // console.log("Home", anchorHome.getBoundingClientRect().top);
    // console.log("Project", anchorProject.getBoundingClientRect().top);
    // console.log("About", anchorAbout.getBoundingClientRect().top);
  };

  useEffect(() => {
    var mouseIsDown = false;

    window.addEventListener("scroll", checkDivsPosition);
    // window.addEventListener("mousedown", function () {
    //   console.log("mousedown");
    //   // mouseIsDown = true;
    //   // setTimeout(function () {
    //   //   if (mouseIsDown) {
    //   //     // mouse was held down for > 2 seconds
    //   //     console.log("mouse");
    //   //   }
    //   // }, 2000);
    // });
  });

  /**
   * @desc to make a relase scroll into view
   * 1. get current page anchor
   * 2. anchor into view
   * 3. find nearest anchor with getBoundingClientRect the closest
   *
   */

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
    // anchorProject.scrollIntoView();

    // arrClasses.splice(0, 1);
    // arrClasses = [];
    // setTimeout(() => {
    containerRef.current.classList.remove("matrix__start");
    //   console.log("removed");
    // }, 2000);

    // arrClasses.push("matrix__stop ");
    // console.log("stop", arrClasses.join(" "));
  });

  const scrollToDiv = () => {
    // console.log("into", document.querySelector("#about"));
    // console.log("into", anchorAbout);
    anchorAbout.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
    // .scrollIntoView(true);
    // console.log(checkDivsPosition().anchor);
    console.log("end");
  };

  // console.log("out", arrClasses.join(" "));
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <div
            // onTouchStart={() => console.log("onTouchStart")}
            // onTouchEnd={() => console.log("onTouchEnd")}
            onTouchEnd={scrollToDiv}
            // onTouchEndCapture={() => console.log("onTouchEndCapture")}
            // onTouchEndCapture={scrollToDiv}
            // onTouchMove={scrollToDiv}
            // onTransitionEnd={scrollToDiv}

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

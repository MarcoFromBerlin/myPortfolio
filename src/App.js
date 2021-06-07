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

import { useMatrix } from "./components/useMatrix";

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

  const [updateNavbar, setUpdateNavbar] = useState(true);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /**
   * @desc set anchors
   */
  useEffect(() => {
    setAnchorHome(document.querySelector("#home"));
    setAnchorProject(document.querySelector("#projects"));
    setAnchorAbout(document.querySelector("#about"));

    //eslint-disable-next-line
  }, []);

  /**
   * @desc returns the closest div in the view to the top
   */

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
      { anchor: "#home", pos: posHome, offsetTop: anchorHome.offsetTop },
      { anchor: "#projects", pos: posProj, offsetTop: anchorProject.offsetTop },
      { anchor: "#about", pos: posAbout, offsetTop: anchorAbout.offsetTop },
    ];

    const closestDiv = arrPos.reduce((a, b) => {
      return Math.abs(b.pos - 0) < Math.abs(a.pos - 0) ? b : a;
    });

    return closestDiv;
  };

  /**
   * @desc listeners for mobile
   */
  useEffect(() => {
    window.addEventListener("scroll", checkDivsPosition);
    /**
     * @desc targets the container instead the window
     * to exclude the navbar
     */
    containerRef.current.addEventListener("touchstart", scrollTouchStart);
    containerRef.current.addEventListener("touchend", scrollTouchEnd);
  });

  /**
   * @desc pass arguments to hook
   */
  let translationMatrixStart = [
    0.34299999999999997, 0, 0.17, 0, 0, 0.46199999999999997, 0.64, 0.000144,
    -0.17, -0.64, 0.7546, 0, 20, 10, 100, 1,
  ];

  const [matrix, setMatrix] = useState(
    useMatrix(containerRef, translationMatrixStart, 0.75)
  );

  /**
   * @desc function to start/stop matrix3d
   * for desktop
   */

  function scrollStop(callback, refresh = 66) {
    if (!callback || typeof callback !== "function") return;

    let isScrolling;

    window.addEventListener(
      "scroll",
      function (event) {
        if (containerRef.current === undefined) return;

        setUpdateNavbar(false);
        // setTimeout(() => {
        matrix.addMatrix();

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(callback, refresh);
        // }, 1200);
      },
      false
    );
  }

  scrollStop(() => {
    setUpdateNavbar(true);
    matrix.removeMatrix();
  });

  /**
   * @desc creating matrix with js
   * for mobile
   */

  const scrollTouchStart = () => {
    setUpdateNavbar(true);
    matrix.addMatrix();
  };

  const scrollTouchEnd = () => {
    matrix.removeMatrix();

    if (checkDivsPosition() === undefined) return;

    /**
     * @uses checkDivsPosition
     * to get the div to put into the view
     */

    setTimeout(() => {
      window.scrollTo(0, checkDivsPosition().offsetTop);
    }, 500);
  };

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <Navbar update={updateNavbar} />
          <div ref={containerRef} className={`container`}>
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

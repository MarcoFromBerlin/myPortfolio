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
  const [anchorMenu, setAnchorMenu] = useState();

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
   * @desc set anchors
   */
  useEffect(() => {
    setAnchorHome(document.querySelector("#home"));
    setAnchorProject(document.querySelector("#projects"));
    setAnchorAbout(document.querySelector("#about"));
    setAnchorMenu(document.querySelector(".menu"));
    containerRef.current.classList.remove("matrix__start");

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

    // console.log("Home", anchorHome.getBoundingClientRect().top);
    // console.log("Project", anchorProject.getBoundingClientRect().top);
    // console.log("About", anchorAbout.getBoundingClientRect().top);
  };

  /**
   * @desc listeners for mobile
   */
  useEffect(() => {
    window.addEventListener("scroll", checkDivsPosition);
    window.addEventListener("touchstart", scrollTouchStart);
    window.addEventListener("touchend", scrollTouchEnd);
  });

  /**
   * @desc matrix3d JS
   * used for desktop and mobile
   */

  let translationMatrixStart = [
    0.34299999999999997, 0, 0.17, 0, 0, 0.46199999999999997, 0.64, 0.000144,
    -0.17, -0.64, 0.7546, 0, 20, 10, 100, 1,
  ];

  let translationMatrixStop = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  function matrixArrayToCssMatrix(array) {
    return "matrix3d(" + array.join(",") + ")";
  }

  // Returns a string: "matrix3d(..."
  let matrix3dStart = matrixArrayToCssMatrix(translationMatrixStart);
  let matrix3dStop = matrixArrayToCssMatrix(translationMatrixStop);

  const addMatrix = () => {
    containerRef.current.style.transition = "all 0.75s ease 0.1s";
    containerRef.current.style.transform = matrix3dStart;
  };

  const removeMatrix = () => {
    containerRef.current.style.transition = "all 0.75s ease 0.1s";
    containerRef.current.style.transform = matrix3dStop;
    setTimeout(() => {
      containerRef.current.style.transition = null;
      containerRef.current.style.transform = null;
    }, 100);
  };

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

        addMatrix();

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(callback, refresh);
      },
      false
    );
  }

  scrollStop(() => {
    removeMatrix();
  });

  /**
   * @desc creating matrix with js
   * for mobile
   */

  const scrollTouchStart = () => {
    addMatrix();
  };

  const scrollTouchEnd = () => {
    removeMatrix();

    if (checkDivsPosition() === undefined) return console.log("undef");

    /**
     * @uses checkDivsPosition
     * to get the div to put into the view
     */

    setTimeout(() => {
      window.scrollTo(0, checkDivsPosition().offsetTop);
    }, 300);
  };

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <div ref={containerRef} className={`container`}>
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

import React, {
  useState,
  createRef,
  forwardRef,
  useRef,
  useEffect,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as NavLink } from "react-router-hash-link";

/**
 * @desc Detect mobile
 */
import { MobileView, BrowserView } from "react-device-detect";

/**
 * @desc MAT UI
 */
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

/**
 * @desc slides
 */

import Modal01 from "../slides/Modal01";
import Modal02 from "../slides/Modal02";
import Modal03 from "../slides/Modal03";

/**
 * @description images
 */

import mongoDbIcon from "../images/mongoDb.png";
import reduxIcon from "../images/redux.png";

import imageSlide03 from "../images/image_slide03.png";

/**
 * @desc Hookstate
 */

import { useState as useHookstate } from "@hookstate/core";
import appStore from "../store/appStore";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  slide: {
    // backgroundColor: "blue",
    overflow: "auto",
    zIndex: -1000,
    // marginRight: 10,
    marginTop: 10,
    height: 180,
    borderRadius: 0,
    padding: 20,
    textAlign: "left",
    opacity: 0.8,
  },
  icons: {
    // color: "red",
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  polygon: {
    // fill: theme.palette.common.white,
    // stroke: theme.palette.divider,
    // strokeWidth: 1,
  },
}));

const ProjectsSummary = (props) => {
  const useHookstateAppStore = useHookstate(appStore);

  const { windowHeight, flip } = props;

  // const [projectsFront, setProjectsFront] = useState();
  // const [projectsBack, setProjectsBack] = useState();
  // const [projectsBack, setProjectsBack] = useState(<Modal01 />);
  // const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  // const ref = createRef();

  const classes = useStyles();
  // const containerWindow = useRef();
  // const projectsWindow = useRef();

  // const projectOne = useRef();
  // const projectTwo = useRef();
  // const projectThree = useRef();

  /**
   * @description obj to handle the show details thumbs
   */

  let objShowDetails = {
    one: false,
    two: false,
    three: false,
  };

  const [showDetails, setShowDetails] = useState();

  const timeoutSlides = { enter: 700, exit: 500 };

  /**
   * @description handles hover
   * @param {*} obj { thumb: "one", value: true }
   */
  const handleOver = (obj) => {
    objShowDetails[obj.thumb] = obj.value;
    setShowDetails(objShowDetails);
  };

  /**
   * @desc sets the back of the project
   */
  // const flip = (obj) => {
  //   const components = {
  //     modal01: <Modal01 windowHeight={windowHeight} />,
  //     modal02: <Modal02 windowHeight={windowHeight} />,
  //     modal03: <Modal03 windowHeight={windowHeight} />,
  //   };

  //   // console.log(obj);
  //   if (containerWindow.current === undefined) return;
  //   /**
  //    * @desc add rotation to both of the divs
  //    */
  //   // containerWindow.current.classList.add("flip__project");
  //   projectsWindow.current.classList.remove("flip__project");

  //   setTimeout(() => {
  //     projectsWindow.current.classList.add("flip__project");
  //   }, 600);

  //   setShowProjectsMenu(true);
  //   return setProjectsBack(components[obj]);
  // };

  const setLocation = (location) => {
    useHookstateAppStore.currentMenuLocation.set(location);
    useHookstateAppStore.isProjectsHome.set(false);
  };

  return (
    <>
      {/* WEB VERSION */}
      <BrowserView>
        <div
          className="project___summary__container"
          // style={{ height: windowHeight }}
        >
          <div className="project__section__titles">
            <h1 className="section__title">Projects</h1>
            <h4 className="section__subtitle">
              A few projects I made using different tecnologies
            </h4>
          </div>
          <div className="row project__thumb__container">
            <button
              className="col-4 project__thumb-left btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "one", value: true })}
              onMouseLeave={() => handleOver({ thumb: "one", value: false })}
              onClick={() => {
                setLocation("mysecondhandbookstore");
                flip("modal01");
              }}
              // onClick={() => flip(<Modal01 windowHeight={windowHeight} />)}
            >
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#mysecondhandbookstore"
                // onClick={flip}
              >
                <div>
                  <Slide
                    direction="right"
                    in={showDetails === undefined ? false : showDetails["one"]}
                    mountOnEnter
                    unmountOnExit
                    className={classes.slide}
                    timeout={timeoutSlides}
                  >
                    <Paper elevation={4} className={classes.paper}>
                      <h5 className="slide__title">My Second Hand Bookstore</h5>
                      <h6 className="slide__description">
                        Web App + iOS/Android App to find and stock second hand
                        books
                      </h6>
                      <div className="slide__icons">
                        <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                        <FontAwesomeIcon
                          icon={["fab", "wordpress-simple"]}
                          size="2x"
                        />
                        <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
                        <FontAwesomeIcon icon={["fab", "android"]} size="2x" />
                        <FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
                      </div>
                    </Paper>
                  </Slide>
                </div>
              </NavLink>
            </button>

            <button
              className="col-4 project__thumb-center btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "two", value: true })}
              onMouseLeave={() => handleOver({ thumb: "two", value: false })}
              onClick={() => {
                setLocation("letstalk");
                flip("modal02");
              }}
            >
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#letstalk"
                // onClick={goToProject(ref)}
              >
                <Slide
                  direction="up"
                  in={showDetails === undefined ? false : showDetails["two"]}
                  mountOnEnter
                  unmountOnExit
                  className={classes.slide}
                  timeout={timeoutSlides}
                >
                  <Paper elevation={4} className={classes.paper}>
                    <h5 className="slide__title">
                      Let's Talk About the weather
                    </h5>
                    <h6 className="slide__description">
                      Dashboard that shows all the locations and the weather of
                      a team
                    </h6>
                    <div className="slide__icons">
                      <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
                      <FontAwesomeIcon icon={["fab", "js"]} size="2x" />
                      <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
                      <img
                        src={mongoDbIcon}
                        className="svg__icon"
                        alt="React Logo"
                      />
                    </div>
                  </Paper>
                </Slide>
              </NavLink>
            </button>

            <button
              className="col-4 project__thumb-right btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "three", value: true })}
              onMouseLeave={() => handleOver({ thumb: "three", value: false })}
              onClick={() => {
                setLocation("spotifylibray");
                flip("modal03");
              }}
              style={{
                backgroundImage: `url(${imageSlide03})`,
                backgroundSize: 400,
                backgroundPositionX: -50,
                backgroundPositionY: -50,
              }}
            >
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#spotifylibray"
                // onClick={goToProject(ref)}
              >
                <Slide
                  direction="left"
                  in={showDetails === undefined ? false : showDetails["three"]}
                  mountOnEnter
                  unmountOnExit
                  className={classes.slide}
                  timeout={timeoutSlides}
                >
                  <Paper elevation={4} className={classes.paper}>
                    <h5 className="slide__title">Spotify Library</h5>
                    <h6 className="slide__description">
                      Web App to organize by category your Spotify Collection
                    </h6>
                    <div className="slide__icons">
                      <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                      <img
                        src={reduxIcon}
                        className="png__icon"
                        alt="Redux Logo"
                      />
                      <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
                      <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
                      <img
                        src={mongoDbIcon}
                        className="svg__icon"
                        alt="React Logo"
                      />
                    </div>
                  </Paper>
                </Slide>
              </NavLink>
            </button>
          </div>
        </div>
      </BrowserView>
      {/* MOB VERSION */}
      <MobileView>
        <div className="col-12 project__thumb__container__mobile">
          <div className="projects__mobile___title__container">
            <h1 className="section__title">Projects</h1>
            <h4 className="section__subtitle">
              A few projects I made using different tecnologies
            </h4>
          </div>
          <button
            className=" project__thumb__mobile btn-no-css"
            // onMouseEnter={() => handleOver({ thumb: "one", value: true })}
            // onMouseLeave={() => handleOver({ thumb: "one", value: false })}
            onClick={() => {
              setLocation("mysecondhandbookstore");
              flip("modal01");
            }}
          >
            <NavLink
              exact
              // className={location === "about" ? "menu__current__item" : ""}
              smooth
              to="#mysecondhandbookstore"
              // onClick={goToProject(ref)}
            >
              <div>
                <h5 className="slide__title">My Second Hand Bookstore</h5>
                <h6 className="slide__description">
                  Web App + iOS/Android App to find and stock second hand books
                </h6>
                <div className="slide__icons">
                  <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                  <FontAwesomeIcon
                    icon={["fab", "wordpress-simple"]}
                    size="2x"
                  />
                  <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
                  <FontAwesomeIcon icon={["fab", "android"]} size="2x" />
                  <FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
                </div>
              </div>
            </NavLink>
          </button>

          <button
            className="project__thumb__mobile btn-no-css"
            // onMouseEnter={() => handleOver({ thumb: "two", value: true })}
            // onMouseLeave={() => handleOver({ thumb: "two", value: false })}
            // onClick={() => handleOpen(<Modal02 />)}
            onClick={() => {
              setLocation("letstalk");
              flip("modal02");
            }}
          >
            <NavLink
              exact
              // className={location === "about" ? "menu__current__item" : ""}
              smooth
              to="#letstalk"
              // onClick={goToProject(ref)}
            >
              <h5 className="slide__title">Let's Talk About the weather</h5>
              <h6 className="slide__description">
                Dashboard that shows all the locations and the weather of a team
              </h6>
              <div className="slide__icons">
                <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "js"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
                <img src={mongoDbIcon} className="svg__icon" alt="React Logo" />
              </div>
            </NavLink>
          </button>

          <button
            className="project__thumb__mobile btn-no-css"
            // onMouseEnter={() => handleOver({ thumb: "three", value: true })}
            // onMouseLeave={() => handleOver({ thumb: "three", value: false })}
            // onClick={() => goToProject(projectThree)}
            // style={{
            //   backgroundImage: `url(${imageSlide03})`,
            //   backgroundSize: 400,
            //   backgroundPositionX: -50,
            //   backgroundPositionY: -50,
            // }}
            onClick={() => {
              setLocation("spotifylibray");
              flip("modal03");
            }}
          >
            <NavLink
              exact
              // className={location === "about" ? "menu__current__item" : ""}
              smooth
              to="#spotifylibray"
              // onClick={goToProject(ref)}
            >
              <h5 className="slide__title">Spotify Library</h5>
              <h6 className="slide__description">
                Web App to organize by category your Spotify Collection
              </h6>
              <div className="slide__icons">
                <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                <img src={reduxIcon} className="png__icon" alt="Redux Logo" />
                <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
                <img src={mongoDbIcon} className="svg__icon" alt="React Logo" />
              </div>
            </NavLink>
          </button>
        </div>
      </MobileView>
    </>
  );
};

export default ProjectsSummary;

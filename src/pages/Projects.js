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
 * @description Mat UI
 */

import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

/**
 * @description Slides
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

const Projects = (props) => {
  const { windowHeight } = props;

  const classes = useStyles();
  const ref = createRef();
  const projectWindow = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();

  /**
   * @description modal handles
   */

  const [open, setOpen] = useState(false);
  const [modalContents, setModalContents] = useState({});

  /**
   *
   * @param {*} obj is a slide
   * that gets forwared to the modal
   */
  const handleOpen = (obj) => {
    setOpen(true);
    setModalContents(obj);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToProject = (project) => {
    project.current.scrollIntoView({
      behavior: "smooth",
    });
  };

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
   * @description gets the Slides with the state modalContent
   */

  const ModalProject = forwardRef((props, ref) => {
    const { ...children } = props;

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        ref={ref}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>{children.content}</div>
        </Fade>
      </Modal>
    );
  });

  return (
    <div
      ref={projectWindow}
      id="projects"
      className="home__main__wrap"
      style={{ height: windowHeight }}
    >
      {/* MODAL 
      /*
       * @description gets the content from the state modalContents
      */}
      {/* <ModalProject ref={ref} content={modalContents} /> */}
      {/* MODAL */}
      <div className="row home__c center-x-y projects">
        <div className="col-12 t-center home__main projects__window">
          <h1 className="section__title">Projects</h1>
          <h4 className="section__subtitle">
            A few projects I made using different tecnologies
          </h4>
          {/* WEB VERSION */}
          <div className="row project__thumb__container hide-phone hide-tablet">
            <button
              className="col-4 project__thumb-left btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "one", value: true })}
              onMouseLeave={() => handleOver({ thumb: "one", value: false })}
              // onClick={() => handleOpen(<Modal01 />)}
            >
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#mysecondhandbookstore"
                // onClick={goToProject(ref)}
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
              // onClick={() => handleOpen(<Modal02 />)}
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
              // onClick={() => goToProject(projectThree)}
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
        {/* MOBILE VERSION */}
        <div className="col-12 project__thumb__container__mobile hide">
          <button
            className=" project__thumb__mobile btn-no-css"
            onMouseEnter={() => handleOver({ thumb: "one", value: true })}
            onMouseLeave={() => handleOver({ thumb: "one", value: false })}
            // onClick={() => handleOpen(<Modal01 />)}
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
            onMouseEnter={() => handleOver({ thumb: "two", value: true })}
            onMouseLeave={() => handleOver({ thumb: "two", value: false })}
            // onClick={() => handleOpen(<Modal02 />)}
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
            onMouseEnter={() => handleOver({ thumb: "three", value: true })}
            onMouseLeave={() => handleOver({ thumb: "three", value: false })}
            // onClick={() => goToProject(projectThree)}
            // style={{
            //   backgroundImage: `url(${imageSlide03})`,
            //   backgroundSize: 400,
            //   backgroundPositionX: -50,
            //   backgroundPositionY: -50,
            // }}
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
      </div>

      <div className="modals__window" ref={projectOne}>
        <Modal01 />
      </div>
      <div className="modals__window" ref={projectTwo}>
        <Modal02 />
      </div>
      <div className="modals__window" ref={projectThree}>
        <Modal03 />
      </div>
    </div>
  );
};

export default Projects;

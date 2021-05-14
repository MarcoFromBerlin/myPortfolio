import React, { useState, createRef, forwardRef, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import Slide01 from "../slides/Slide01";
import Slide02 from "../slides/Slide02";
import Slide03 from "../slides/Slide03";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  slide: {
    // backgroundColor: "blue",
    overflow: "auto",
    zIndex: -1000,
    marginRight: 10,
    marginTop: 10,
    height: 180,
    borderRadius: 0,
    padding: 10,
    textAlign: "left",
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

const Projects = () => {
  const classes = useStyles();
  const refSlideOne = useRef();

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

  const ref = createRef();
  // console.log(refSlideOne.current);
  // const testSlide = (refSlideOne.current.style.width = "500px");
  // console.log(testSlide);
  return (
    <div id="projects" className="home__main__wrap">
      {/* MODAL 
      /*
       * @description gets the content from the state modalContents
      */}
      <ModalProject ref={ref} content={modalContents} />
      {/* MODAL */}
      <div className="row home__c center-x-y">
        <div className="col-12 t-center home__main">
          <h1 className="section__title">Projects</h1>
          <h4 className="section__subtitle">
            A few projects I made using different tecnologies
          </h4>
          <div className="row project__thumb__container">
            <button
              className="col-4 project__thumb-left btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "one", value: true })}
              onMouseLeave={() => handleOver({ thumb: "one", value: false })}
              onClick={() => handleOpen(<Slide01 />)}
              ref={refSlideOne}
            >
              <div>
                <Slide
                  direction="right"
                  in={showDetails === undefined ? false : showDetails["one"]}
                  // in={true}
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
                      {/* faReact, faWordpressSimple, faApple, faAndroid, faChrome, */}
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
            </button>

            <button
              className="col-4 project__thumb-center btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "two", value: true })}
              onMouseLeave={() => handleOver({ thumb: "two", value: false })}
              onClick={() => handleOpen(<Slide02 />)}
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
                  <h5 className="slide__title">My Second Hand Bookstore</h5>
                  <h6 className="slide__description">
                    Web App + iOS/Android App to find and stock second hand
                    books
                  </h6>
                  <div className="slide__icons">
                    {/* faReact, faWordpressSimple, faApple, faAndroid, faChrome, */}
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
            </button>
            <button
              className="col-4 project__thumb-right btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "three", value: true })}
              onMouseLeave={() => handleOver({ thumb: "three", value: false })}
              onClick={() => handleOpen(<Slide03 />)}
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
                  <h5 className="slide__title">My Second Hand Bookstore</h5>
                  <h6 className="slide__description">
                    Web App + iOS/Android App to find and stock second hand
                    books
                  </h6>
                  <div className="slide__icons">
                    {/* faReact, faWordpressSimple, faApple, faAndroid, faChrome, */}
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
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Projects;

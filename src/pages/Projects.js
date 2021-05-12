import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  slide: {
    backgroundColor: "blue",
    // overflow: "auto",
    // zIndex: -1000,
    marginTop: 100,
    // height: 200,
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
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Projects = () => {
  const classes = useStyles();

  /**
   * @description modal handles
   */

  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   console.log("open");
  //   setOpen((open) => !open);
  // };
  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    console.log("close", e);
    setOpen(false);
    console.log("open", open);
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

  const ModalProject = () => {
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
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    );
  };

  return (
    <div id="projects" className="home__main__wrap">
      <div className="row home__c center-x-y">
        <div className="col-12 t-center home__main">
          <h1 className="section__title">Projects</h1>
          <h4 className="section__subtitle">
            A few projects I made using different tecnologies
          </h4>
          <div className="row project__thumb__container">
            {/* <div className="btn-no-css" onClick={() => handleOpen()}> */}
            <div
              className="col-4 project__thumb"
              // onMouseEnter={() => console.log("enter")}
              // onMouseLeave={() => console.log("leave")}
              onMouseEnter={() => handleOver({ thumb: "one", value: true })}
              onMouseLeave={() => handleOver({ thumb: "one", value: false })}
              // onClick={() => setOpen(true)}
              onClick={handleOpen}
            >
              {/* <div onClick={(e) => handleOpen(e)}> */}
              <Slide
                direction="right"
                in={showDetails === undefined ? false : showDetails["one"]}
                mountOnEnter
                unmountOnExit
                className={classes.slide}
                timeout={timeoutSlides}
              >
                <Paper elevation={4} className={classes.paper}>
                  test
                </Paper>
              </Slide>
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
              >
                <Fade in={open}>
                  <div className={classes.paperModal}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">
                      react-transition-group animates me.
                    </p>
                    <button onClick={(e) => handleClose(e)}>Close</button>
                    <button onClick={() => setOpen(false)}>Close</button>
                  </div>
                </Fade>
              </Modal>
              {/* <ModalProject /> */}
              {/* </div> */}
            </div>
            {/* </div> */}
            {/* <button onClick={(e) => handleOpen(e)}></button> */}
            <div
              className="col-4 project__thumb"
              className="col-4 project__thumb"
              onMouseEnter={() => handleOver({ thumb: "two", value: true })}
              onMouseLeave={() => handleOver({ thumb: "two", value: false })}
              onClick={() => console.log("open project")}
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
                  test
                </Paper>
              </Slide>
            </div>
            <div
              className="col-4 project__thumb"
              className="col-4 project__thumb"
              onMouseEnter={() => handleOver({ thumb: "three", value: true })}
              onMouseLeave={() => handleOver({ thumb: "three", value: false })}
              onClick={() => console.log("open project")}
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
                  test
                </Paper>
              </Slide>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Projects;

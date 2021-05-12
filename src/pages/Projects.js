import React, { useState, useEffect, createRef, forwardRef } from "react";
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
  const [modalContents, setModalContents] = useState({
    title: "Defalt title",
    text: "Default text",
  });

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
          <div className={classes.paperModal}>
            {children.content.title}
            {children.content.text}
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p> */}
          </div>
        </Fade>
      </Modal>
    );
  });
  const ref = createRef();

  return (
    <div id="projects" className="home__main__wrap">
      {/* MODAL */}
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
              className="col-4 project__thumb btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "one", value: true })}
              onMouseLeave={() => handleOver({ thumb: "one", value: false })}
              onClick={() => handleOpen({ title: "title", text: "text" })}
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
                    test
                  </Paper>
                </Slide>
              </div>
            </button>

            <button
              className="col-4 project__thumb btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "two", value: true })}
              onMouseLeave={() => handleOver({ thumb: "two", value: false })}
              onClick={() => handleOpen()}
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
            </button>
            <button
              className="col-4 project__thumb btn-no-css"
              onMouseEnter={() => handleOver({ thumb: "three", value: true })}
              onMouseLeave={() => handleOver({ thumb: "three", value: false })}
              onClick={() => handleOpen()}
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
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Projects;

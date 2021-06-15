import React, {
  useState,
  // createRef,
  // forwardRef,
  useRef,
  useEffect,
  useCallback,
} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { HashLink as NavLink } from "react-router-hash-link";

// import FadeIn from "react-fade-in";

import ProjectNavbar from "../components/ProjectNavbar";

// /**
//  * @description Mat UI
//  */

// import Paper from "@material-ui/core/Paper";
// import Slide from "@material-ui/core/Slide";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import { makeStyles } from "@material-ui/core/styles";

/**
 * @description Slides
 */
import ProjectsSummary from "../slides/ProjectsSummary";
import Modal01 from "../slides/Modal01";
import Modal02 from "../slides/Modal02";
import Modal03 from "../slides/Modal03";

/**
 * @description images
 */

// import mongoDbIcon from "../images/mongoDb.png";
// import reduxIcon from "../images/redux.png";

// import imageSlide03 from "../images/image_slide03.png";

/**
 * @desc Hookstate
 */

import { useState as useHookstate } from "@hookstate/core";
import appStore from "../store/appStore";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 180,
//   },
//   slide: {
//     // backgroundColor: "blue",
//     overflow: "auto",
//     zIndex: -1000,
//     // marginRight: 10,
//     marginTop: 10,
//     height: 180,
//     borderRadius: 0,
//     padding: 20,
//     textAlign: "left",
//     opacity: 0.8,
//   },
//   icons: {
//     // color: "red",
//   },
//   wrapper: {
//     width: 100 + theme.spacing(2),
//   },
//   paper: {
//     zIndex: 1,
//     position: "relative",
//     margin: theme.spacing(1),
//   },
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paperModal: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
//   polygon: {
//     // fill: theme.palette.common.white,
//     // stroke: theme.palette.divider,
//     // strokeWidth: 1,
//   },
// }));

const Projects = (props) => {
  const useHookstateAppStore = useHookstate(appStore);

  /**
   * @desc cals the height size
   */

  const { windowHeight } = props;
  const finalWindowHeight =
    windowHeight -
    50 -
    useHookstateAppStore.menuProjectsSize.height.get() -
    useHookstateAppStore.menuMainSize.height.get();

  /**
   * @desc ProjectsSummary receives the states
   */

  const projectSummary = () => (
    <ProjectsSummary
      windowHeight={finalWindowHeight}
      flip={(obj) => flipCallback(obj)}
    />
  );

  const [projectsFront, setProjectsFront] = useState(projectSummary);

  /**
   * @desc check menu changes to set the ProjectsSummary
   */

  useEffect(() => {
    if (useHookstateAppStore.setProjectsHome.get()) {
      flip("summary");
      useHookstateAppStore.isProjectsHome.set(true);
      useHookstateAppStore.setProjectsHome.set(false);
    }
  }, [useHookstateAppStore]);

  /**
   * @desc sets project navigation menu
   */

  useEffect(() => {
    if (useHookstateAppStore.isProjectsHome.get()) {
      setShowProjectsMenu(false);
    }
  }, [useHookstateAppStore]);

  const [projectsBack, setProjectsBack] = useState();

  const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  const containerWindow = useRef();
  const projectsWindow = useRef();

  /**
   * @desc sets the back of the project
   */

  const flip = (obj) => {
    const components = {
      summary: projectSummary,
      modal01: <Modal01 windowHeight={finalWindowHeight} />,
      modal02: <Modal02 windowHeight={finalWindowHeight} />,
      modal03: <Modal03 windowHeight={finalWindowHeight} />,
    };

    if (containerWindow.current === undefined) return;
    /**
     * @desc add rotation to both of the divs
     */

    setShowProjectsMenu(true);

    if (
      Object.values(projectsWindow.current.classList).includes("flip__project")
    ) {
      // console.log("front");
      setProjectsFront(components[obj]);
      projectsWindow.current.classList.remove("flip__project");
    } else {
      // console.log("back");
      setProjectsBack(components[obj]);
      projectsWindow.current.classList.add("flip__project");
    }
  };
  /**
   * @desc to use the inputs comming from <ProjectSummary/>
   */

  const flipCallback = useCallback((obj) => {
    flip(obj);
  }, []);

  /**
   * @desc interacts with Hookstate
   */

  const setLocation = (location) => {
    useHookstateAppStore.currentMenuLocation.set(location);
    useHookstateAppStore.isProjectsHome.set(false);
  };

  return (
    <div
      ref={containerWindow}
      id="projects"
      className="home__main__wrap flip-card"
      style={{ height: windowHeight }}
    >
      {showProjectsMenu ? <ProjectNavbar goTo={(to) => flip(to)} /> : null}

      <div
        ref={projectsWindow}
        className="row home__c projects flip-card-inner"
      >
        <div className="col-12 col-lg-3 t-center projects__window projects__summary">
          {projectsFront}
        </div>
        <div className="project col-lg-3">{projectsBack}</div>
      </div>
    </div>
  );
};

export default Projects;

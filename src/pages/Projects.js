import React, { useState, useRef, useEffect, useCallback } from "react";

import ProjectNavbar from "../components/ProjectNavbar";

/**
 * @description Slides
 */
import ProjectsSummary from "../slides/ProjectsSummary";
import Modal01 from "../slides/Modal01";
import Modal02 from "../slides/Modal02";
import Modal03 from "../slides/Modal03";

/**
 * @desc Hookstate
 */

import { useState as useHookstate } from "@hookstate/core";
import appStore from "../store/appStore";

const Projects = (props) => {
  // const navbarRef = createRef();

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
    //eslint-disable-next-line
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
      setProjectsFront(components[obj]);
      projectsWindow.current.classList.remove("flip__project");
    } else {
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
    >
      {showProjectsMenu ? <ProjectNavbar goTo={(to) => flip(to)} /> : null}

      <div
        ref={projectsWindow}
        className="row home__c projects flip-card-inner"
        style={{ height: windowHeight }}
      >
        {/* Front Card */}
        <div className="col-12 col-lg-4 projects__window projects__summary">
          {projectsFront}
        </div>
        {/* Back Card */}
        <div className="project projects__window col-lg-4">{projectsBack}</div>
      </div>
    </div>
  );
};

export default Projects;

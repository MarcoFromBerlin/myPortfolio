import React, {
  Fragment,
  useEffect,
  useState,
  forwardRef,
  useRef,
} from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

/**
 * @desc detect mobile
 */

import { MobileView, BrowserView } from "react-device-detect";

/**
 * @desc Hookstate
 */

import { useState as useHookstate } from "@hookstate/core";
import appStore from "../store/appStore";

const Navbar = forwardRef((props, ref) => {
  const useHookstateAppStore = useHookstate(appStore);

  const navbarRef = useRef();

  // console.log(ref);

  const { menuProjects, menuProjectsSize, currentMenuLocation } =
    useHookstateAppStore;

  /**
   * @desc creates location var to create current item
   */

  const location = currentMenuLocation.get();

  /**
   * @desc Sends to parent the page to visit
   * checks if the user clicks twice on the same menu
   * and avoids the page to flip
   */

  const checkMenu = (to) => {
    const arrMenuProjects = menuProjects.get();

    let destination = "";

    /**
     * @desc loop to set destination
     */

    for (let i = 0; i < arrMenuProjects.length; i++) {
      if (arrMenuProjects[i].compName === to) {
        destination = arrMenuProjects[i].anchor;
      }
    }

    /**
     * @desc if the destination is the same of the location
     * stops
     */
    if (
      destination.substring(1) ===
      useHookstateAppStore.currentMenuLocation.get()
    )
      return;

    /**
     * @desc if false sends data
     */
    sendData(to);

    /**
     * @desc re-use destination to set current location
     */
    setLocation(destination.substring(1));
  };

  /**
   * @desc  send page to visit
   */
  const sendData = (to) => {
    props.goTo(to);
  };

  const setLocation = (location) => {
    useHookstateAppStore.currentMenuLocation.set(location);
    useHookstateAppStore.isProjectsHome.set(false);
  };

  /**
   * @desc sets navbar size into states
   */
  useEffect(() => {
    setTimeout(() => {
      menuProjectsSize.height.set(navbarRef.current.offsetHeight);
    }, 100);
  }, []);

  return (
    <Fragment>
      <div ref={navbarRef} className={`projects__navbar row-1"`}>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                exact
                className={
                  location === menuProjects.get()[0].anchor.substr(1)
                    ? "menu__current__item__navbar__projects"
                    : ""
                }
                smooth
                to="#mysecondhandbookstore"
                onClick={() => {
                  checkMenu("modal01");
                }}
              >
                My Second Hand Bookstore
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                className={
                  location === menuProjects.get()[1].anchor.substr(1)
                    ? "menu__current__item__navbar__projects"
                    : ""
                }
                smooth
                to="#letstalk"
                onClick={() => {
                  checkMenu("modal02");
                }}
              >
                Let's talk about the weather
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={
                  location === menuProjects.get()[2].anchor.substr(1)
                    ? "menu__current__item__navbar__projects"
                    : ""
                }
                smooth
                to="#spotifylibray"
                // onClick={goToProject(ref)}
                onClick={() => {
                  checkMenu("modal03");
                }}
              >
                Spotify Library
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
});

export default Navbar;

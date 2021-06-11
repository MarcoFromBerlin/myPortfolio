import React, { Fragment, useEffect, useState, forwardRef } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

/**
 * @desc Hookstate
 */

import { useState as useHookstate } from "@hookstate/core";
import appStore from "../store/appStore";

const Navbar = forwardRef((props, ref) => {
  const useHookstateAppStore = useHookstate(appStore);

  // const location = useLocation().hash.toString().substr(1);

  // const { useHookstate } = props;

  /**
   * @desc Sends to parent the page to visit
   */
  const sendData = (to) => {
    props.goTo(to);
  };

  const setLocation = (location) => {
    useHookstateAppStore.currentMenuLocation.set(location);
    useHookstateAppStore.isProjectsHome.set(false);
  };

  // console.log(useHookstateAppStore);

  return (
    <Fragment>
      <div className={`projects__navbar row-1"`}>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                exact
                // className={location === "" ? "menu__current__item" : ""}
                smooth
                // to="#mysecondhandbookstore"
                onClick={() => {
                  setLocation("mysecondhandbookstore");
                  sendData("modal01");
                }}
              >
                My Second Hand Bookstore
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                // className={location === "projects" ? "menu__current__item" : ""}
                smooth
                // to="#letstalk"
                onClick={() => {
                  setLocation("letstalk");
                  sendData("modal02");
                }}
              >
                Let's talk about the weather
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                // to="#spotifylibray"
                // onClick={goToProject(ref)}
                onClick={() => {
                  setLocation("spotifylibray");
                  sendData("modal03");
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

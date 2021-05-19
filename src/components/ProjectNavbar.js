import React, { Fragment, useEffect, useState, forwardRef } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = forwardRef((props, ref) => {
  const location = useLocation().hash.toString().substr(1);

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
                to="#mysecondhandbookstore"
              >
                My Second Hand Bookstore
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                // className={location === "projects" ? "menu__current__item" : ""}
                smooth
                to="#letstalk"
              >
                Let's talk about the weather
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#spotifylibray"
                // onClick={goToProject(ref)}
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

import React, { Fragment, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
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
                to="#"
              >
                My Second Hand Bookstore
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                // className={location === "projects" ? "menu__current__item" : ""}
                smooth
                to="#projects"
              >
                Let's talk about the weather
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                // className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#about"
              >
                Spotify Library
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;

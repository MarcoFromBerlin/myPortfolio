import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="menu row-1">
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="menu__current__item" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="menu__current__item" to="#about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="menu__current__item"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;

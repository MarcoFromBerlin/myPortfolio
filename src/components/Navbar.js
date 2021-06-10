import React, { Fragment, useEffect, useState } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import { useSpring, animated, useTransition } from "@react-spring/web";

const Navbar = (props) => {
  const { gotoSummary, forceHome, currentLocation } = props;

  /**
   * @desc to get the anchor
   * location as prop allows to set current item
   * with mobile scrolling
   */
  // const location = props.currentView.substring(1);

  // console.log("currentLocation", currentLocation);

  /**
   * @desc animation fade in out
   */

  const updateNavbar = props.update;

  const fadingMenu = useTransition(updateNavbar, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      tension: 220,
      friction: 120,
      duration: 400,
    },
    delay: 400,
  });

  /**
   * @desc set sticky menu
   */

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [];

  if (scrolled) {
    navbarClasses.push("scrolled ");
  }

  // console.log("Navbar currentLocation", currentLocation);

  return fadingMenu(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <div id="menu" className={`${navbarClasses.join(" ")}menu row-1"`}>
            <nav className="navigation">
              <ul>
                <li>
                  <NavLink
                    exact
                    className={
                      currentLocation === "home" ? "menu__current__item" : ""
                    }
                    smooth
                    to="#"
                  >
                    Home
                  </NavLink>
                </li>
                {/* All the project anchors are givin the current item */}
                <li>
                  <NavLink
                    // exact
                    className={
                      currentLocation === "projects" ||
                      currentLocation === "letstalk" ||
                      currentLocation === "mysecondhandbookstore" ||
                      currentLocation === "spotifylibrary"
                        ? "menu__current__item"
                        : ""
                    }
                    smooth
                    to="#projects"
                    // scroll={(el) =>
                    //   el.scrollIntoView({ behavior: "auto", block: "end" })
                    // }
                    onClick={() => {
                      gotoSummary(true);
                      // checkHomeSummary();
                    }}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className={
                      currentLocation === "about" ? "menu__current__item" : ""
                    }
                    smooth
                    to="#about"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </animated.div>
      )
  );
};

export default Navbar;

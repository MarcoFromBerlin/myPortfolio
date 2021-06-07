import React, { Fragment, useEffect, useState } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import { useSpring, animated, useTransition } from "@react-spring/web";

const Navbar = (props) => {
  /**
   * @desc to get the anchor
   */
  const location = useLocation().hash.toString().substr(1);

  /**
   * @desc animation fade in out
   */
  // const [toggle, setToggle] = useState(true);

  // // setToggle(props.update);

  const updateNavbar = props.update;

  console.log(updateNavbar);

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

  const transitionsDelete = {
    from: {
      opacity: 0.35,
      transform: "translateY(70%) translateX(0%) scaleY(0.65) scaleX(1)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0%) translateX(0%) scaleY(1) scaleX(1)",
    },
    leave: {
      opacity: 0.35,
      transform: "translateY(70%) translateX(0%) scaleY(0.65) scaleX(1)",
    },
    delay: 0,
    config: { duration: 400 },
  };

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
                    className={location === "" ? "menu__current__item" : ""}
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
                      location === "projects" ||
                      location === "letstalk" ||
                      location === "mysecondhandbookstore" ||
                      location === "spotifylibray"
                        ? "menu__current__item"
                        : ""
                    }
                    smooth
                    to="#projects"
                    // scroll={(el) =>
                    //   el.scrollIntoView({ behavior: "auto", block: "end" })
                    // }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className={
                      location === "about" ? "menu__current__item" : ""
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

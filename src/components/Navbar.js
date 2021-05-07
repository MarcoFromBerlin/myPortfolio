import React, { Fragment, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().hash.toString().substr(1);

  console.log(
    "${location.pathname}${location.hash}",
    // location.pathname,
    location
  );

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
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

  return (
    // <header className={x.join(" ")}>
    //     <div className="logo">
    //       <img src={Logo} alt="Logo" title="Logo" />
    //     </div>

    //     <nav className="navigation">
    //         <ul>
    //           <li><a href="#post1">Home</a></li>
    //           <li><a href="#post2">Home</a></li>
    //           <li><a href="#post3">Home</a></li>
    //           <li><a href="#post4">Home</a></li>
    //         </ul>
    //     </nav>

    // </header>

    <Fragment>
      <div className={`${navbarClasses.join(" ")}menu row-1"`}>
        {/* <div className={`"menu row-1"`}> */}
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
            <li>
              <NavLink
                exact
                className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={location === "projects" ? "menu__current__item" : ""}
                smooth
                to="#projects"
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

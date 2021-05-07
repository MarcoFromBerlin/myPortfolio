import React, { Fragment, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
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

  let navbarClasses = ["navbar"];

  if (scrolled) {
    navbarClasses.push("scrolled");

    console.log(navbarClasses);
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
      <div className={`${navbarClasses.join(" ")}" menu row-1"`}>
        <nav className="navigation">
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

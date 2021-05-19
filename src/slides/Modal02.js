import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectNavbar from "../components/ProjectNavbar";

/**
 * @description images
 */

import mongoDbIcon from "../images/mongoDb.png";
import reduxIcon from "../images/redux.png";
import sc_schema_01 from "../images/sc_schema_01.png";

const Modal02 = () => {
  return (
    <div id="letstalk" className="modal">
      <div className="modal__container__menu">
        <ProjectNavbar />
        <div className="row modal__container">
          <div className="col-12">
            <h2>Let's Talk About the Weather</h2>
          </div>
          <div className="col-12">
            <h4>Web App to organize by category your Spotify Collection</h4>
          </div>
          <div className="col-12">
            <h5>App made with:</h5>
          </div>
          <div className="col-12">
            <div className="slide__icons">
              <FontAwesomeIcon icon={["fab", "react"]} size="3x" />
              <img
                src={reduxIcon}
                className="modal__png__icon"
                alt="Redux Logo"
              />
              <FontAwesomeIcon icon={["fab", "node-js"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "chrome"]} size="3x" />
              <img
                src={mongoDbIcon}
                className="modal__svg__icon"
                alt="React Logo"
              />
            </div>
          </div>
          <div className="col-12">
            <img src={sc_schema_01} className="" alt="React Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal02;

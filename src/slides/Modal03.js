import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectNavbar from "../components/ProjectNavbar";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

/**
 * @description images
 */

import mongoDbIcon from "../images/mongoDb.png";
import reduxIcon from "../images/redux.png";
import sc_schema_01 from "../images/sc_schema_01.png";

const Modal03 = (props) => {
  const { windowHeight } = props;

  const [isImgZoomed, setIsImgZoomed] = useState(false);

  return (
    <div className="row modal__container">
      <div className="col-12">
        <h2>Spotify Library</h2>
      </div>
      <div className="col-12">
        <h4>Web App to organize by category your Spotify Collection</h4>
      </div>
      {/* <div className="col-12">
        <h5>App made with:</h5>
      </div> */}
      <div className="col-12">
        <div className="slide__icons">
          <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
          <img src={reduxIcon} className="modal__png__icon" alt="Redux Logo" />
          <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
          <img
            src={mongoDbIcon}
            className="modal__svg__icon"
            alt="React Logo"
          />
        </div>
      </div>
      <div className="col-12">
        <img
          src={sc_schema_01}
          className="img__schema"
          alt="React Logo"
          onClick={() => setIsImgZoomed(true)}
        />
        {isImgZoomed ? (
          <Lightbox
            mainSrc={sc_schema_01}
            // nextSrc={images[(photoIndex + 1) % images.length]}
            // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsImgZoomed(false)}
            // onMovePrevRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndex + images.length - 1) % images.length,
            //   })
            // }
            // onMoveNextRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndex + 1) % images.length,
            //   })
            // }
          />
        ) : null}
      </div>
    </div>
  );
};

export default Modal03;

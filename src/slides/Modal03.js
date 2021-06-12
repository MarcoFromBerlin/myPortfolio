import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="col-6">
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
        <p>Go through the slides to see how it works!</p>
      </div>
      <div className="col-6">
        <h4>How does it work</h4>
        <p>
          Spotify Library is a fullstack app, multi-user app, where every user
          can syncronize the Spotify collection and assign to every Album 3
          genres (i.e. Rock, Pop). The user can create/edit/delete the genres,
          filter the albums and search through them.
        </p>
        <br />
        <h4>Demo</h4>
        <p>
          <a target="_blank" href="https://spotifylibrary.herokuapp.com/">
            spotifylibrary.herokuapp.com/
          </a>
        </p>
        <br />
        <h4>Links</h4>
        <p>
          <a
            target="_blank"
            href="https://github.com/marcovignotto/my-spotify-categories"
          >
            github.com/marcovignotto/my-spotify-categories
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal03;

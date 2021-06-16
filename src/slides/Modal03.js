import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

/**
 * @desc Detect mobile
 */
import { MobileView, BrowserView, isMobile } from "react-device-detect";

/**
 * @description images
 */

import mongoDbIcon from "../images/mongoDb.png";
import reduxIcon from "../images/redux.png";
import sc_schema_01 from "../images/sc_schema_01.png";

/**
 * @desc schemas
 */

import schema_01 from "../images/spotify_collection_01.jpeg";
import schema_02 from "../images/spotify_collection_02.jpeg";
import schema_03 from "../images/spotify_collection_03.jpeg";
import schema_04 from "../images/spotify_collection_04.jpeg";

/**
 * @desc Hookstate
 */

import { useState as useHookstate } from "@hookstate/core";
import appStore from "../store/appStore";

const images = [schema_01, schema_02, schema_03, schema_04];

const Modal03 = (props) => {
  /**
   * @desc use Hookstate
   */

  const useHookstateAppStore = useHookstate(appStore);

  const { windowHeight } = props;

  const [isImgZoomed, setIsImgZoomed] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div
      className="row modal__container"
      style={{ maxHeight: isMobile ? windowHeight - 20 : windowHeight }}
    >
      <div className="col-12 col-lg-3">
        <h2>Spotify Library</h2>
      </div>
      <div className="col-12 col-lg-3">
        <h4>Web App to organize by category your Spotify Collection</h4>
      </div>
      <div className="col-12 col-lg-3">
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
      <div className="col-6 col-lg-3">
        <img
          src={sc_schema_01}
          className="img__schema"
          alt="React Logo"
          onClick={() => setIsImgZoomed(true)}
        />
        {isImgZoomed ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsImgZoomed(false)}
            onMovePrevRequest={() => {
              if (photoIndex === 0) {
                setPhotoIndex(0);
                return setIsImgZoomed(false);
              }
              setPhotoIndex(photoIndex + images.length - 1);
            }}
            onMoveNextRequest={() => {
              if (photoIndex === images.length - 1) {
                setPhotoIndex(0);
                return setIsImgZoomed(false);
              }
              setPhotoIndex(photoIndex + 1);
            }}
          />
        ) : null}
        <p>Go through the slides to see how it works!</p>
      </div>
      <div className="col-6 col-lg-3">
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

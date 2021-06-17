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

const images = [
  { img: schema_01 },
  { img: schema_02 },
  { img: schema_03 },
  { img: schema_04 },
  { img: sc_schema_01 },
];

const Modal03 = (props) => {
  /**
   * @desc use Hookstate
   */

  const useHookstateAppStore = useHookstate(appStore);

  const { windowHeight } = props;

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isImgZoomed, setIsImgZoomed] = useState(false);

  return (
    <div
      className="row modal__container"
      style={{ maxHeight: isMobile ? windowHeight - 20 : windowHeight }}
    >
      <div className="col-12 col-lg-4">
        <h2>Spotify Library</h2>
      </div>
      <div className="col-12 col-lg-4">
        <h4>Web App to organize by category your Spotify Collection</h4>
      </div>
      <div className="col-12 col-lg-4">
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
      <div className="col-12 col-lg-4">
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
      <div className="col-12 t-center-x col-lg-4">
        <p>Go through the slides to see how it works!</p>
      </div>
      {images.map((x, i) => {
        if (i === 4) return;
        return (
          <div className="col-3 col-lg-1">
            <img
              src={x.img}
              className="img__schema"
              alt={`${x.img}`}
              onClick={() => {
                setPhotoIndex(i);
                setIsImgZoomed(true);
              }}
            />
          </div>
        );
      })}

      {isImgZoomed ? (
        <Lightbox
          mainSrc={images[photoIndex].img}
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
      <div className="col-12 col-lg-4">
        <img
          src={sc_schema_01}
          className="img__workflow"
          alt="Project workflow"
          onClick={() => {
            setPhotoIndex(4);
            setIsImgZoomed(true);
          }}
        />
      </div>
    </div>
  );
};

export default Modal03;

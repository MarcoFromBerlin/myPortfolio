import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

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

const images = [
  { img: schema_01 },
  { img: schema_02 },
  { img: schema_03 },
  { img: schema_04 },
  { img: sc_schema_01 },
];

const Modal02 = (props) => {
  const { windowHeight } = props;

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isImgZoomed, setIsImgZoomed] = useState(false);

  return (
    <div
      className="row modal__container"
      style={{ maxHeight: isMobile ? windowHeight - 20 : windowHeight }}
    >
      <div className="col-12 col-lg-4">
        <h2>Let's Talk About the Weather</h2>
      </div>
      <div className="col-12 col-lg-4">
        <h4>
          Web App create a weather dashboard that shows the weather of different
          locations
        </h4>
      </div>
      <div className="col-12 col-lg-4">
        <div className="slide__icons">
          <FontAwesomeIcon icon={["fab", "js"]} size="2x" />
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
          LsTATW is a full stack app that uses the Open Weather Api to show the
          weather of multiple locations in a dash board. The location can be
          insert through an Admin Panel that requires an auth. Once login in the
          administrator can create a location with a related Username, language
          and unit system. Accessing the frontend the dashboard will show the
          inserted locations, the frontend user can choose the main location,
          the location that will be bigger in the dashboard (i.e. his/her home
          town). The app is created to collect all the weathers of a team member
          or a class that works remotely.
          <br></br>
          The app is created in pure Javascript, designed with s module pattern
        </p>
        <br />
      </div>
      <div className="col-6 col-lg-4">
        <h4>Demo</h4>
        <p>
          <a
            target="_blank"
            href="https://lets-talk-about-the-weather.herokuapp.com/"
          >
            lets-talk-about-the-weather.herokuapp.com
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://lets-talk-about-the-weather.herokuapp.com/admin"
          >
            lets-talk-about-the-weather.herokuapp.com/admin
          </a>
        </p>
        <br />
      </div>
      <div className="col-6 col-lg-4">
        <h4>Links</h4>
        <p>
          <a
            target="_blank"
            href="https://github.com/marcovignotto/lets-talk-about-the-weather"
          >
            github.com/marcovignotto/lets-talk-about-the-weather
          </a>
        </p>
      </div>
      <div className="col-12 col-lg-4 apps__flow">
        <h4>App's Flow</h4>
        <div className="flow__container">
          <ul>
            <li>
              The users log in the server (Node JS /Express) -{" "}
              <span>Under the hood every user has an unique User Code</span>
            </li>
          </ul>
        </div>
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

export default Modal02;

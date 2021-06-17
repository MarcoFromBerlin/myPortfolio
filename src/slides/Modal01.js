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

const Modal01 = (props) => {
  const { windowHeight } = props;

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isImgZoomed, setIsImgZoomed] = useState(false);

  return (
    <div
      className="row modal__container"
      style={{ maxHeight: isMobile ? windowHeight - 20 : windowHeight }}
    >
      <div className="col-12 col-lg-4">
        <h2>My Secondhand Book Store</h2>
      </div>
      <div className="col-12 col-lg-4">
        <h4>
          Web/Mobile(iOS + Android) App manage a Secondhand Online Book Store
        </h4>
      </div>
      <div className="col-12 col-lg-4">
        <div className="slide__icons">
          <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
          <img src={reduxIcon} className="modal__png__icon" alt="Redux Logo" />
          <FontAwesomeIcon icon={["fab", "wordpress-simple"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "chrome"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "android"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h4>How does it work</h4>
        <p>
          My Secondhand Book Store is an app that uses Wordpress/Woocommerce as
          client frontend. The user enters Wordpress and can simply manage the
          Woocommerce Shop adding books, searching them on the Google Books Api
          and directly adding them with the cover, quantity avaible, price and
          book status. The stock can be managed updating/deleting the items
          directly from the app without needing the Woocommerce Product
          Managment. Every add/update/delete made the app will be immediatly
          visible on the WooCommerce Shop for the customers.
        </p>
        <br />
      </div>
      <div className="col-6 col-lg-4">
        <h4>Demo</h4>
        <p>
          <a
            target="_blank"
            href="https://my-second-hand-bookstore.herokuapp.com/"
          >
            my-second-hand-bookstore.herokuapp.com/
          </a>
        </p>
        <br />
      </div>
      <div className="col-6 col-lg-4">
        <h4>Links</h4>
        <p>
          <a
            target="_blank"
            href="https://github.com/marcovignotto/mybookstore"
          >
            github.com/marcovignotto/mybookstore
          </a>
        </p>
      </div>
      <div className="col-12 col-lg-4 apps__flow">
        <h4>App's Flow</h4>
        <ul>
          <li>
            The user logs into Wordpress and access to the app integrated into
            it - The app is protected behind the Wordpress
          </li>
          <li>
            In the Insert page the user can search for a book using
            Title/Author(s) or ISBN code - The app searches into the Google Book
            Api
          </li>
          <li>
            The user can add the book into WooCommerce with the cover, price,
            quantity and status with a simple click - The app uses the
            WooCommerce Api to perform CRUD operations
          </li>
          <li>
            From the Database page the user can manage the books stock, updating
            the price/quantity/status and filtering the titles- Like the Insert
            Page the modified items will be immediatly available for the
            customers
          </li>
          <li>
            The pagination and the search are stored in Redux, the user will not
            wait for the loading once changes the page
          </li>
        </ul>
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

export default Modal01;

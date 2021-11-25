import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @desc images
 */
import mongoDbIcon from "../images/mongoDb.png";
import reduxIcon from "../images/redux.png";

const Home = (props) => {
  const { windowHeight } = props;
  return (
    <div
      id="home"
      className="home__main__wrap"
      style={{ height: windowHeight }}
    >
      <div className="row-1 home__a center-x-y">
        <div className="col-121 t-center home__main">
          <span>
            <h1>Hi, how are you?</h1>
          </span>
          <h3>I'm Marco a full stack web developer.</h3>
          <h3>Some tecnologies I like and I use:</h3>
          <div className="icons__container">
            <FontAwesomeIcon icon={["fab", "js"]} size="4x" />
            <FontAwesomeIcon icon={["fab", "node-js"]} size="4x" />
            <FontAwesomeIcon icon={["fab", "react"]} size="4x" />
            <FontAwesomeIcon icon={["fab", "sass"]} size="4x" />
            {/* <img
              src={reduxIcon}
              className="modal__png__icon"
              alt="Redux Logo"
            /> */}
            {/* 
            <div className="icons__text">Redux</div>
            <div className="icons__text">MongoDB</div> */}
          </div>
          <br />
          <h3>But, take a look to my projects section.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

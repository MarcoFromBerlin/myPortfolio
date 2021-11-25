import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @desc images
 */

import profile from "../images/profile.jpg";

const About = (props) => {
  const { windowHeight } = props;

  return (
    <div
      id="about"
      className="home__main__wrap"
      style={{ height: windowHeight }}
    >
      <div className="row home__b center-x-y">
        <div className="col-12 col-lg-4 t-center home__main">
          <div className="col-6 col-lg-4">
            <h1 className="text-white">About Me</h1>
            <img src={profile} alt="profile-pic" className="profile__pic" />
          </div>
          <div className="col-6 col-lg-4 profile__text">
            <h4>
              Endless learner, I like to create. I have been self employed my
              whole life, I like challenges and problem solving. <br></br>Since
              2019 I started to study web development to give my self new aims,
              and now I'm looking forward to make it as a job.
            </h4>
            <br></br>
            <h4>Find me and my code here:</h4>
            <a
              href="https://www.linkedin.com/in/marcovignotto/"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
            <a href="https://github.com/marcovignotto" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

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
          <div className="col-6 col-lg-4">
            <h4>
              Endless learner, I like to create. I have been my whole life self
              employed, I like challenges, and to solve problems. Since 2019 I
              started to study web development to give my self new aims, and now
              looking forward to make it as a job.
            </h4>
            <br></br>
            <h4>Where to find my code:</h4>
            <p>
              <a href="https://github.com/marcovignotto" target="_blank">
                github.com/marcovignotto
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

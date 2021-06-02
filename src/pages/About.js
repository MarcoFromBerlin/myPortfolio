import React from "react";

const About = (props) => {
  const { windowHeight } = props;

  return (
    <div
      id="about"
      className="home__main__wrap"
      style={{ height: windowHeight }}
    >
      <div className="row home__b center-x-y">
        <div className="col-12 t-center home__main">
          <h1 className="text-white">About</h1>
          <p>About me</p>
        </div>
      </div>
    </div>
  );
};

export default About;

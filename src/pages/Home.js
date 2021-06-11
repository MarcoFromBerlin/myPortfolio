import React from "react";

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
          <h3>Here we are</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

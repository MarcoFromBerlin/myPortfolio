import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { display } from "@material-ui/system";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  slide: {
    backgroundColor: "blue",
    // overflow: "auto",
    // zIndex: -1000,
    marginTop: 100,
    // height: 200,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  /**
   * @description obj to handle the show details thumbs
   */

  let objShowDetails = {
    one: false,
    two: false,
    three: false,
  };

  const [showDetails, setShowDetails] = useState(objShowDetails);

  /**
   * @description handles hover
   * @param {*} obj { thumb: "one", value: true }
   */
  const handleOver = (obj) => {
    objShowDetails[obj.thumb] = obj.value;
    setShowDetails(objShowDetails);
  };

  return (
    <div id="projects" className="home__main__wrap">
      <div className="row home__c center-x-y">
        <div className="col-12 t-center home__main">
          <h1 className="section__title">Projects</h1>
          <h4 className="section__subtitle">
            A few projects I made using different tecnologies
          </h4>
          <div className="row project__thumb__container">
            <div
              className="col-4 project__thumb"
              onMouseEnter={() => handleOver({ thumb: "one", value: true })}
              onMouseLeave={() => handleOver({ thumb: "one", value: false })}
              onClick={() => console.log("open project")}
            >
              <Slide
                direction="right"
                in={showDetails["one"]}
                mountOnEnter
                unmountOnExit
                className={classes.slide}
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Slide>
            </div>
            <div
              className="col-4 project__thumb"
              className="col-4 project__thumb"
              onMouseEnter={() => handleOver({ thumb: "two", value: true })}
              onMouseLeave={() => handleOver({ thumb: "two", value: false })}
              onClick={() => console.log("open project")}
            >
              <Slide
                direction="up"
                in={showDetails["two"]}
                mountOnEnter
                unmountOnExit
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Slide>
            </div>
            <div
              className="col-4 project__thumb"
              className="col-4 project__thumb"
              onMouseEnter={() => handleOver({ thumb: "three", value: true })}
              onMouseLeave={() => handleOver({ thumb: "three", value: false })}
              onClick={() => console.log("open project")}
            >
              <Slide
                direction="left"
                in={showDetails["three"]}
                mountOnEnter
                unmountOnExit
              >
                <Paper elevation={4} className={classes.paper}>
                  <svg className={classes.svg}>
                    <polygon
                      points="0,100 50,00, 100,100"
                      className={classes.polygon}
                    />
                  </svg>
                </Paper>
              </Slide>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Projects;

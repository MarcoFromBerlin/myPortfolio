import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={13}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  tabs: {
    // background in Theme.js
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px",
  },
  tab: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.background.paper,
    minWidth: 10,
    marginLeft: "10px",
    color: "black",
    label: {
      color: "white",
    },
    "&:hover": {
      color: "red",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="projects" className="home__main__wrap">
      <div className="row home__c center-x-y">
        <div className="col-12 t-center home__main">
          <h1 className="section__title">Projects</h1>
          <div className="row project__thumb__container">
            <div className="col-4 project__thumb">1</div>
            <div className="col-4 project__thumb">2</div>
            <div className="col-4 project__thumb">3</div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Projects;

import { createState } from "@hookstate/core";

/**
 * @desc isProjectsHome is to set the ProjectSummary back in place
 * @desc setProjectsHome is true when the menu projects
 * is clicked and is not home
 */

const appStore = createState({
  currentMenuLocation: "home",
  isProjectsHome: true,
  setProjectsHome: false,
  menuProjects: [
    { id: "01", compName: "modal01", anchor: "#mysecondhandbookstore" },
    { id: "02", compName: "modal02", anchor: "#letstalk" },
    { id: "03", compName: "modal03", anchor: "#spotifylibray" },
  ],
  menuProjectsSize: {
    height: 0,
  },
  menuMainSize: {
    height: 50,
  },
});

export default appStore;

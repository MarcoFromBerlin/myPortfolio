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
});

export default appStore;

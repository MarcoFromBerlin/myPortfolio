import { createState } from "@hookstate/core";

const appStore = createState({
  currentMenuLocation: "home",
});

export default appStore;

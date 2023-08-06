const IMGEND = '.svg">';
const IMGSTRT = '<img src="./icons/';

export const c_menu = [
  {
    content: `${IMGSTRT}refresh${IMGEND} Reload`,
    events: {
      click: () => {
        window.location.reload();
      },
    },
  },
  {
    content: `${IMGSTRT}dark_mode${IMGEND} Change theme`,
    events: {
      click: () => {
        const e = document.querySelector(".variables_dark");
        const eh = e.href;
        if (eh.includes("dark")) {
          e.href = "./theme.light.css";
        } else {
          e.href = "./theme.dark.css";
        }
      },
    },
    divider: "top",
  },
  {
    content: `${IMGSTRT}forward${IMGEND} Forward`,
    events: {
      click: () => {
        window.history.forward();
      },
    },
    divider: "top",
  },
  {
    content: `${IMGSTRT}back_arrow${IMGEND} Back`,
    events: {
      click: () => {
        window.history.back();
      },
    },
    divider: "top",
  },
];
// top, bottom, top-bottom

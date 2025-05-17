const addClass = () => {
  let mainNavigation = document.getElementById("main-navigation");

  mainNavigation.classList.add("display-active");
};

const removeClass = () => {
  let mainNavigation = document.getElementById("main-navigation");

  mainNavigation.classList.remove("display-active");
};

const addRemoveClass = () => {
  let mainNavigation = document.getElementById("main-navigation");

  if (mainNavigation.classList.contains("display-active")) {
    mainNavigation.classList.remove("display-active");
  } else {
    mainNavigation.classList.add("display-active");
  }
};

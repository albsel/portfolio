///////////////////////////////////////////////////////////
// DOM Elements
///////////////////////////////////////////////////////////
const tabsLinks = document.getElementsByClassName("tab-links");
const tabsContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("side-menu");

///////////////////////////////////////////////////////////
// Set current Year
///////////////////////////////////////////////////////////
let yearEl = document.getElementsByClassName("year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Select the tab and show its content
///////////////////////////////////////////////////////////
const openTab = function (tabName) {
  // Remove all the active links
  for (tabsLink of tabsLinks) {
    tabsLink.classList.remove("active-link");
  }

  // Remove all the active tabs
  for (tabsContent of tabsContents) {
    tabsContent.classList.remove("active-tab");
  }

  // Get the active link and active content on click
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

/*********************************************************************************************************/
/* SCROLL NAVIGATION PAGE */
/*********************************************************************************************************/
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

/*********************************************************************************************************/
/* Opening and closing the Menu */
/*********************************************************************************************************/

const openMenu = function () {
  sideMenu.style.right = "0";
};

const closeMenu = function () {
  sideMenu.style.right = "-230px";
};

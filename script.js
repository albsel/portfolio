///////////////////////////////////////////////////////////
// DOM Elements
///////////////////////////////////////////////////////////
const tabsLinks = document.getElementsByClassName("tab-links");
const tabsContents = document.getElementsByClassName("tab-contents");

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

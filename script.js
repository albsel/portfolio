///////////////////////////////////////////////////////////
// DOM Elements
///////////////////////////////////////////////////////////
const tabsLinks = document.getElementsByClassName("tab-links");
const tabsContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("side-menu");
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("btn");
const myForm = document.getElementById("form");
const nameInput = document.getElementById("name");
const nameErrorMsg = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const messageInput = document.getElementById("message");
// const learnMoreBtns = document.querySelectorAll(".learn-more");
const servicesList = document.querySelector(".list");
const servicesListParagraph = servicesList.querySelector(".service-text");
const closeBtn = document.querySelectorAll(".close");
// const closeBtns = document.querySelectorAll(".close-btn");
const scrollUpButton = document.getElementById("scroll-up-button");
const skills = document.getElementById("about-skills");
const progressBars = document.querySelectorAll(".progress-bar");

/*********************************************************************************************************/
/* Skills progress bar
/*********************************************************************************************************/
const showProgress = function () {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
};

const hideProgress = function () {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
};

window.addEventListener("scroll", () => {
  const sectionPos = skills.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});
/*********************************************************************************************************/
/* Expand the service text
/*********************************************************************************************************/
// learnMoreBtns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     const servicesList = btn.closest(".services-list");
//     const servicesListParagraph = servicesList.querySelector(".service-text");
//     const closeBtn = servicesList.querySelector(".close-btn");

//     servicesListParagraph.classList.toggle("full-visible");
//     btn.style.display = "none";
//     closeBtn.style.display = "block";
//   });
// });

/*********************************************************************************************************/
/* Close the service text
/*********************************************************************************************************/
// closeBtns.forEach(function (closeBtn) {
//   closeBtn.addEventListener("click", function () {
//     const servicesList = closeBtn.closest(".services-list");
//     const servicesListParagraph = servicesList.querySelector(".service-text");
//     const learnMoreBtn = servicesList.querySelector(".learn-more");
//     const servicesListRect = servicesList.getBoundingClientRect();

//     servicesListParagraph.classList.remove("full-visible");
//     closeBtn.style.display = "none";
//     learnMoreBtn.style.display = "block";
//     window.scrollTo({
//       top: servicesListRect.top + window.pageYOffset,
//       behavior: "smooth",
//     });
//   });
// });

/*********************************************************************************************************/
/* Validation of textarea input field
/*********************************************************************************************************/
messageInput.addEventListener("input", () => {
  const words = messageInput.value.trim().split(/\s+/);
  if (words.length > 100) {
    messageInput.value = words.slice(0, 100).join(" ");
    messageInput.dispatchEvent(new Event("input"));
  }
});
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

/*********************************************************************************************************/
/* Input web app URL for contact form*/
/*********************************************************************************************************/
const scriptURL =
  "https://script.google.com/macros/s/AKfycbybYXCErqGYxuKGBqQ3zgmkKbZZU1lsQHXHQE0hmGUBtY6B_Ju6CtWhEnbhDFsh-1ni/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerText = "Message was sent succesfully!";

      setTimeout(function () {
        submitBtn.innerHTML = "Submit";
        msg.innerText = "";
      }, 2000);
      form.reset();
      submitBtn.disabled = true;
      current.innerText = "0";
    })
    .catch((error) => console.error("Error!", error.message));
});

/*********************************************************************************************************/
/* Change name of button while sending the data
/*********************************************************************************************************/
const sendMsg = function () {
  submitBtn.innerText = "Sending..";
};
submitBtn.addEventListener("click", sendMsg);

/*********************************************************************************************************/
/* Disable button until the form is filled
/*********************************************************************************************************/
myForm.addEventListener("input", () => {
  if (myForm.checkValidity()) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("disabled");
  }
});

myForm.addEventListener("input", () => {
  if (myForm.checkValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

/*********************************************************************************************************/
/* Validation of name input field
/*********************************************************************************************************/
nameInput.addEventListener("input", () => {
  const name = nameInput.value;
  if (name.length < 3) {
    nameErrorMsg.textContent = "Name must be at least 3 characters long.";
  } else if (name.length > 20) {
    nameErrorMsg.textContent = "Name must be no more than 20 characters long.";
  } else {
    nameErrorMsg.textContent = "";
  }
});

/*********************************************************************************************************/
/* Validation of email input field
/*********************************************************************************************************/
emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format.";
  } else {
    emailError.textContent = "";
  }
});

/*********************************************************************************************************/
/* Validation of textarea input field
/*********************************************************************************************************/
messageInput.addEventListener("input", function () {
  let characterCount = this.value.length;
  let current = document.querySelector("#current");
  let maximum = document.querySelector("#maximum");
  let theCount = document.querySelector("#the-count");

  current.textContent = characterCount;

  if (characterCount < 100) {
    current.style.color = "#666";
    maximum.style.color = "#666";
    theCount.style.fontWeight = "normal";
  } else if (characterCount < 200) {
    current.style.color = "#6d5555";
    maximum.style.color = "#6d5555";
    theCount.style.fontWeight = "normal";
  } else if (characterCount < 300) {
    current.style.color = "#793535";
    maximum.style.color = "#793535";
    theCount.style.fontWeight = "normal";
  } else {
    current.style.color = "#8f0001";
    maximum.style.color = "#8f0001";
    theCount.style.fontWeight = "bold";
    messageInput.value = messageInput.value.substring(0, 300); // restrict user from typing more than 300 characters
  }
});

/*********************************************************************************************************/
/* Scroll UP
/*********************************************************************************************************/
// window.addEventListener("scroll", function () {
//   // Always show the scroll-up button
//   scrollUpButton.style.display = "block";
// });

// scrollUpButton.addEventListener("click", function () {
//   // Scroll to the top of the page
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

/*********************************************************************************************************/
/* Scroll position on TOP on page refresh
/*********************************************************************************************************/
window.onload = function () {
  window.scrollTo(0, 0);
};

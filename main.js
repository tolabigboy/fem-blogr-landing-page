console.log("Hello");
const body = document.querySelector("body");
const toggleBar = document.querySelector(".toggle-bar");
const toggleBox = document.querySelector(".toggle-aside-box");
const toggleNav = document.querySelector(".toggle-nav");
const closeBar = document.querySelector(".close-toggle-bar");
const overlay = document.querySelector(".overlay");
const toggleNavList = document.querySelector(".toggle-nav-list");
const nestedNav = document.querySelectorAll(".nested-nav");
const nestedArrow = document.querySelectorAll(".toggle-arrow-img");
const navLink = document.querySelectorAll(".nav-link");
const deskNestLink = document.querySelectorAll(".desk-nav-link");
const desktopNestNav = document.querySelectorAll(".desktop-nested-nav");
const deskArrowImage = document.querySelectorAll(".arrow-img");
// Click to open toggle menu---------
toggleBar.addEventListener("click", () => {
  toggleBox.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("no-scroll");
  closeBar.style.display = "block";
  toggleBar.style.display = "none";
});
// Click to close toggle menu----------------
closeBar.addEventListener("click", () => {
  toggleBox.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("no-scroll");
  closeBar.style.display = "none";
  toggleBar.style.display = "block";
});
// section for nested nav----------
navLink.forEach((nest) => {
  nest.addEventListener("click", (e) => {
    e.preventDefault();
    const panel = nest.nextElementSibling;
    nest.classList.toggle("active-nav");
    console.log(panel);
    if (!panel.classList.contains("active-nav")) {
      panel.classList.add("active-nav");
    } else {
      panel.classList.remove("active-nav");
    }
  });
});

// deskNestLink.forEach((desk) => {
//   desk.addEventListener("mouseover", (e) => {
//     e.preventDefault();
//     const panel = desk.nextElementSibling;
//     if (!panel.classList.contains("active-2")) {
//       panel.classList.add("active-2");
//       desk.classList.add("active-2");
//     } else {
//       panel.classList.remove("active-2");
//       desk.classList.remove("active-2");
//       // deskArrowImage[0].classList.remove("active-2");
//     }
//   });
// });
// section for leave ---------
// deskNestLink.forEach((deskTwo) => {
//   deskTwo.addEventListener("mouseleave", () => {
//     const panelTwo = deskTwo.nextElementSibling;
//     panelTwo.classList.remove("active-2");
//     deskTwo.classList.remove("active-2");
//   });
// });

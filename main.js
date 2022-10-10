console.log("Hello");
const toggleBar = document.querySelector(".toggle-bar");
const toggleBox = document.querySelector(".toggle-aside-box");
const toggleNav = document.querySelector(".toggle-nav");
const closeBar = document.querySelector(".close-toggle-bar");
const toggleNavList = document.querySelector(".toggle-nav-list");
const nestedNav = document.querySelectorAll(".nested-nav");
const nestedArrow = document.querySelectorAll(".toggle-arrow-img");
// Click to open toggle menu---------
toggleBar.addEventListener("click", () => {
  toggleBox.classList.toggle("active");
  closeBar.style.display = "block";
  toggleBar.style.display = "none";
});
// Click to close toggle menu----------------
closeBar.addEventListener("click", () => {
  toggleBox.classList.toggle("active");
  closeBar.style.display = "none";
  toggleBar.style.display = "block";
});
// click for nested navigations---------------
// toggleNavList.forEach((acc) => {
//   acc.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("hello");
//     const panel = acc.nextElementSibling;
//     acc.classList.toggle("active-nav");
//   });
// });ve
toggleNavList.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  toggleNavList.classList.toggle("active-nav");
});

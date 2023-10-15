const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const navItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const showNav = () => {
  nav.classList.toggle("nav--active");
  navBtnBars.classList.remove("black-bars-color");
  navItems.forEach((items) => {
    items.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
  navItemsAnimation();
};

const navItemsAnimation = () => {
  let delayTime = 0;

  navItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

const sectionWatcher = () => {
  const currentSection = window.scrollY;
  allSections.forEach((section) => {
    if (
      section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navBtnBars.classList.add("black-bars-color");
    } else if (
      !section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navBtnBars.classList.remove("black-bars-color");
    }
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();
window.addEventListener("scroll", sectionWatcher);
navBtn.addEventListener("click", showNav);

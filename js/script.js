// header mobile menu function
let toggle_btn = document.querySelector(".toggle-btn");
let menu = document.querySelector(".menu");

toggle_btn.onclick = () => {
  toggle_btn.classList.toggle("active");
  menu.classList.toggle("active");
};

//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");
const header = document.querySelector("header");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;
  if (pos > 700) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (pos > posHight - 3000) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
};
tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// jquary owl carusal sllider
$(document).ready(function () {
  $("#owl-brand").owlCarousel({
    autoPlay: 2000, //Set AutoPlay to 3 seconds
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [600, 2], //2 items between 600 and 0
    itemsMobile: [500, 2], // itemsMobile disabled - inherit from itemsTablet option
  });
});

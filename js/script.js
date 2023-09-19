let toggle_btn = document.querySelector(".toggle-btn");
let menu = document.querySelector("menu");

toggle_btn.onclick = () => {
  toggle_btn.classList.toggle("active");
  menu.classList.toggle("active");
};

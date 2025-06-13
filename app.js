function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".menu-icon");
  const photo = document.querySelector(".photo");
  photo.classList.toggle("open");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

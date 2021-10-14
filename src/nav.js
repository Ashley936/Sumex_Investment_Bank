const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navBar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
    console.log(link.getBoundingClientRect().top);
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

window.addEventListener("scroll", () => {
  if (window.scrollY < 100 && !navBar.classList.contains("bg-blue")) {
    return;
  } else if (window.scrollY < 100 && navBar.classList.contains("bg-blue")) {
    navBar.classList.remove("bg-blue");
    return;
  } else if (window.scrollY > 100 && !navBar.classList.contains("bg-blue")) {
    navBar.classList.add("bg-blue");
    return;
  }
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Handle dropdown toggles on mobile
navItems.forEach((item) => {
  const link = item.querySelector(".nav-link");
  if (link.querySelector(".arrow")) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle("active");
      }
    });
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navItems.forEach((item) => item.classList.remove("active"));
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navItems.forEach((item) => item.classList.remove("active"));
  }
});
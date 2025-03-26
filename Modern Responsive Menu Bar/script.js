const menuToggle = document.querySelector(".menu-toggle");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu-link");
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("active");
  fullscreenMenu.classList.toggle("active");

  if (fullscreenMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("active");
    fullscreenMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

const interactiveElements = document.querySelectorAll("a, .menu-toggle");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorDot.classList.add("expand");
  });

  el.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("expand");
  });
});

class Particle {
  constructor(x, y, size, color, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = speed;
    this.direction = Math.random() * Math.PI * 2;
    this.vx = Math.cos(this.direction) * this.speed;
    this.vy = Math.sin(this.direction) * this.speed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > window.innerWidth) {
      this.vx = -this.vx;
    }

    if (this.y < 0 || this.y > window.innerHeight) {
      this.vy = -this.vy;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
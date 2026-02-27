// ================= PAGE FADE IN =================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ================= PAGE TRANSITION =================
document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");

  if (
    href &&
    !href.startsWith("#") &&
    !href.startsWith("http") &&
    !link.classList.contains("no-transition")
  ) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  }
});

// ================= SCROLL REVEAL =================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= ACTIVE NAV LINK =================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
let navbar;
let navbarHeight;
let homeSection;
let projectPageContent;
let isScrollingProgrammatically = false; // <-- flag

function resize() {
  navbar = document.querySelector(".navbar");
  navbarHeight = navbar.offsetHeight;
  homeSection = document.querySelector("#home");
  projectPageContent = document.querySelector(".project-description");

  if (homeSection) {
    homeSection.style.height = `calc(100vh - ${navbarHeight}px - ${homeSection.style.paddingTop} - ${homeSection.style.paddingBottom})`;
  }
}

// Smooth scrolling for all links with the anchor attribute
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    // Highlight the clicked nav item immediately
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    // Flag to ignore automatic scroll highlighting
    isScrollingProgrammatically = true;

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });

    // Remove the flag when scrolling ends
    const scrollCheck = setInterval(() => {
      const scrollPosition = window.scrollY;
      if (Math.abs(scrollPosition - target.offsetTop) < 2) {
        isScrollingProgrammatically = false;
        clearInterval(scrollCheck);
      }
    }, 50); // check every 50ms
  });
});

resize();
window.addEventListener("resize", resize);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightActiveSection() {
  if (isScrollingProgrammatically) return; // skip highlighting if smooth scrolling from click

  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.id;

    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (!navLink) return;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightActiveSection);
window.addEventListener("DOMContentLoaded", highlightActiveSection);

const tldrButton = document.getElementById("tldr-button");
const fullButton = document.getElementById("full-button");
const tldrContent = document.querySelector(".about-tldr");
const fullContent = document.querySelector(".about-full");

function setActiveButton(activeBtn) {
  // Remove active from both
  tldrButton.classList.remove("active");
  fullButton.classList.remove("active");

  // Add active to the clicked one
  activeBtn.classList.add("active");
}

tldrButton.addEventListener("click", () => {
  tldrContent.classList.remove("hidden");
  fullContent.classList.add("hidden");
  setActiveButton(tldrButton);
});

fullButton.addEventListener("click", () => {
  tldrContent.classList.add("hidden");
  fullContent.classList.remove("hidden");
  setActiveButton(fullButton);
});

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.remove("open");
}

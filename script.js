document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu after clicking a link
      const mobileNav = document.getElementById("mobileNav");
      const hamburger = document.getElementById("hamburger");
      if (mobileNav.classList.contains("show")) {
        mobileNav.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Hamburger menu toggle with animation and aria attribute
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    hamburger.classList.toggle("active");

    // Aria attribute update for accessibility
    const isExpanded = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });

  // Accessibility: Allow Enter or Space key to toggle menu
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hamburger.click();
    }
  });

  // Reveal on scroll effect using IntersectionObserver
  const revealElements = document.querySelectorAll(".service-image-card, .testimonial-card, .featured-image-card");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  revealElements.forEach(el => observer.observe(el));
});

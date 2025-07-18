document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Hero Button action
  const heroBtn = document.querySelector(".hero-btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      const servicesSection = document.querySelector(".services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Side nav scroll-to-section on click
  const sideNavItems = document.querySelectorAll(".side-nav-item");
  sideNavItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetSelector = item.getAttribute("data-target");
      const targetSection = document.querySelector(targetSelector);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Active side nav item on scroll
  const sectionMap = [
    { id: "#home", element: document.querySelector("#home") },
    { id: "#services", element: document.querySelector("#services") },
    { id: "#portfolio", element: document.querySelector("#portfolio") },
    { id: "#about", element: document.querySelector("#about") }
  ];

  window.addEventListener("scroll", () => {
    let current = null;
    sectionMap.forEach((section, index) => {
      const rect = section.element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
        current = index;
      }
    });

    sideNavItems.forEach((item, index) => {
      item.classList.toggle("active", index === current);
    });
  });

  // Reveal on scroll (optional)
  const revealElements = document.querySelectorAll(".service-card, .testimonial-card, .featured-content");
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

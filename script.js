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

  // Hero Button action (example: scroll to services)
  const heroBtn = document.querySelector(".hero-btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      const servicesSection = document.querySelector(".services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Optional: Reveal elements on scroll (basic)
  const revealElements = document.querySelectorAll(".service-card, .testimonial-card, .featured-content");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach(el => observer.observe(el));
});

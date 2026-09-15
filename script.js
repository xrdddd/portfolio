`` `javascript
// =========================================================
// Portfolio JavaScript
// =========================================================

// Automatically update the footer year.
document.getElementById("year").textContent = new Date().getFullYear();


// Add a subtle shadow to the navigation when scrolling.
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


// Smoothly close mobile navigation if one is added later.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
` ``

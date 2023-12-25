document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow");
  const section = document.querySelector("#courses");
  // Initialize ScrollReveal with default options
  var sr = ScrollReveal();

  // Specify animation settings for left-aligned divs
  sr.reveal(".arrow", {
    reset: true,
    delay: 1000,
    duration: 500,
    opacity: 0,
    easing: "ease-in-out",
  });

  arrow.addEventListener("click", () => {
    // Scroll to the next section
    section.scrollIntoView({ behavior: "smooth" });
  });
});

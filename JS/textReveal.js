document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollReveal with default options
  var sr = ScrollReveal();

  // Specify animation settings for left-aligned divs
  sr.reveal(".info.left", {
    duration: 1000,
    origin: "left",
    distance: "100px",
    easing: "ease-in-out",
  });

  // Specify animation settings for right-aligned divs
  sr.reveal(".info.right", {
    duration: 1000,
    origin: "right",
    distance: "100px",
    easing: "ease-in-out",
  });

  // Specify animation settings for buttons
  sr.reveal(".btn", {
    duration: 1000,
    easing: "ease-in-out",
    afterReveal: function (el) {
      // Set opacity to 1 before revealing
      el.classList.add("fade-in");
    },
  });

  // Specify animation settings for img
  sr.reveal(".img", {
    duration: 1000,
    easing: "ease-in-out",
    afterReveal: function (el) {
      // Set opacity to 1 before revealing
      el.classList.add("fade-in");
    },
  });
});

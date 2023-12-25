document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollReveal with default options
  var sr = ScrollReveal();

  // Specify animation settings for left-aligned divs
  sr.reveal(".info.left", {
    reset: true,
    duration: 1000,
    origin: "left",
    distance: "50px",
    easing: "ease-in-out",
  });

  // Specify animation settings for right-aligned divs
  sr.reveal(".info.right", {
    reset: true,
    duration: 1000,
    origin: "right",
    distance: "50px",
    easing: "ease-in-out",
  });

  // Specify animation settings for buttons
  sr.reveal(".btn", {
    reset: true,
    duration: 1000,
    easing: "ease-in-out",
    afterReveal: function (el) {
      // Set opacity to 1 before revealing
      el.classList.add("fade-in");
    },
    afterReset: function (el) {
      el.classList.remove("fade-in");
    },
  });

  // Specify animation settings for img
  sr.reveal(".img", {
    reset: true,
    duration: 1000,
    easing: "ease-in-out",
    afterReveal: function (el) {
      // Set opacity to 1 before revealing
      el.classList.add("fade-in");
    },
    afterReset: function (el) {
      el.classList.remove("fade-in");
    },
  });
});

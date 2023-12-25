document.addEventListener("DOMContentLoaded", function () {
  let width = window.innerWidth; // initialize width
  let sr; // Declare ScrollReveal instance

  // Function to get the distance for ScrollReveal depending on the window width
  function viewPort(width) {
    if (width > 1918) {
      return 100;
    } else if (width > 1876) {
      return 50;
    } else if (width <= 1545) {
      return 20;
    } else if (width > 1229) {
      return 20;
    } else {
      return 50;
    }
  }

  // Common ScrollReveal options
  function getCommonOptions(distance) {
    return {
      reset: true,
      duration: 1000,
      easing: "ease-in-out",
      distance: distance + "px",
    };
  }

  let display = viewPort(width); // Initialize display on page load

  // Function to update ScrollReveal distance
  function updateRevealOptions() {
    // Remove previous styles
    document.querySelectorAll(".info.left, .info.right").forEach(function (el) {
      el.style.transform = "none";
    });

    // Destroy the current ScrollReveal instance
    if (sr) {
      sr.destroy();
    }

    // Initialize ScrollReveal with default options
    sr = ScrollReveal();

    // Update animation settings for left-aligned divs
    sr.reveal(".info.left", {
      origin: "left",
      ...getCommonOptions(display),
    });

    // Update animation settings for right-aligned divs
    sr.reveal(".info.right", {
      origin: "right",
      ...getCommonOptions(display),
    });
  }

  // eventlistener for window resize
  window.addEventListener("resize", function () {
    width = window.innerWidth;
    display = viewPort(width);
    updateRevealOptions();
  });

  // Initial setup
  updateRevealOptions();

  // Specify animation settings for buttons
  sr.reveal(".btn", {
    afterReveal: function (el) {
      el.classList.add("fade-in");
    },
    afterReset: function (el) {
      el.classList.remove("fade-in");
    },
    ...getCommonOptions(display),
  });

  // Specify animation settings for img
  sr.reveal(".img", {
    afterReveal: function (el) {
      el.classList.add("fade-in");
    },
    afterReset: function (el) {
      el.classList.remove("fade-in");
    },
    ...getCommonOptions(display),
  });
});

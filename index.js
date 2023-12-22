$(document).ready(function () {
  // Initialize ScrollReveal with default options
  window.sr = ScrollReveal();

  // Specify animation settings for bubble
  sr.reveal(".bubble", {
    duration: 500,
    origin: "bottom",
    distance: "120%",
    easing: "ease-in-out",
    viewFactor: 0.1,
    // Additional options...
    afterReveal: function (domEl) {
      // Add your custom animation logic here
      animateBubbles(domEl);
    },
  });

  function animateBubbles(element) {
    // Your custom animation logic for the bubbles
    // For example, you can use jQuery to modify the element's properties
    $(element)
      .animate(
        {
          opacity: 0.8, // Set opacity to 0.8
        },
        {
          duration: 500, // Set the duration for the opacity animation
          queue: false, // Don't queue the next animation
        }
      )
      .animate(
        {
          top: "-50%", // Adjust this value based on how much you want the bubbles to rise
        },
        {
          duration: 5000, // Set the duration for the rise animation
        }
      );
  }
});

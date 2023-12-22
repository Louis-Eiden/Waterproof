$(document).ready(function () {
  // Initialize ScrollReveal with default options
  window.sr = ScrollReveal();

  // Specify animation settings for bubble
  sr.reveal(".bubble", {
    duration: 500,
    origin: "bottom",
    distance: "0%",
    easing: "ease-in-out",

    // Additional options...
    afterReveal: function (domEl) {
      animateBubbles(domEl);
    },
  });

  function animateBubbles(element) {
    // Get the width of the bubble
    var bubbleWidth = $(element).width();

    // Calculate distance based on the width
    var distance = bubbleWidth * 5;
    // custom animation logic for the bubbles
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
          top: -distance + "px",
        },
        {
          duration: 5000, // Set the duration for the rise animation
        }
      );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let width = window.innerWidth; // initialize width

  // Function to get the distance for ScrollReveal depending on the window width
  function viewPort(width) {
    if (width < 1434) {
      return 0.2;
    } else if (width < 1215) {
      return 0.05;
    } else {
      return 0.5;
    }
  }
  let multiplier = viewPort(width); // Initialize display on page load

  // eventlistener for window resize
  window.addEventListener("resize", function () {
    width = window.innerWidth;
    multiplier = viewPort(width);
    console.log(multiplier);
  });

  var body = document.body;

  // Parallax scrolling effect
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    body.style.backgroundPosition =
      "center " + -scrollPosition * multiplier + "px"; // Adjust the multiplier for the parallax effect
  });
});

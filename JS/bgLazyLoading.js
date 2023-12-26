document.addEventListener("DOMContentLoaded", function () {
  let width = window.innerWidth; // initialize width

  // Function to get the bg img depending on the window width
  function viewPort(width) {
    if (width < 660) {
      return "mobile-background.webp";
    } else if (width < 1150) {
      return "tablet-background.webp";
    } else {
      return "desktop-background.webp";
    }
  }
  let bgFileName = viewPort(width); // Initialize

  // eventlistener for window resize
  window.addEventListener("resize", function () {
    width = window.innerWidth;
    bgFileName = viewPort(width);
  });

  // Create a new Image object
  var bgImage = new Image();
  var body = document.body;

  // Add a loading class to the body to set opacity to 0
  body.classList.add("loading");
  // Set the source of the background image
  bgImage.src = "./assets/" + bgFileName;

  // Event listener for when the image has loaded
  bgImage.onload = function () {
    // Set the background image of the body
    body.style.backgroundImage = 'url("' + bgImage.src + '")';
    // Optionally, you can set a background color to avoid a flash of the background color
    body.style.backgroundColor = "transparent";
    // Remove the loading class, making the body visible
    body.classList.remove("loading");
  };
});

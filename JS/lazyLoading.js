document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;

  // Add a loading class to the body to set opacity to 0
  body.classList.add("loading");

  // Preload the background image
  var img = new Image();
  img.src = "./assets/background.jpg";
  img.onload = function () {
    // Remove the loading class, making the body visible
    body.classList.remove("loading");
  };
});

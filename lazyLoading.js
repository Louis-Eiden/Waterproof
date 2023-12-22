$(document).ready(function () {
  var body = $("body");

  // Add a loading class to the body to set opacity to 0
  body.addClass("loading");

  // Preload the background image
  var img = new Image();
  img.src = "./assets/background.jpg";
  $(img).on("load", function () {
    // Remove the loading class, making the body visible
    body.removeClass("loading");
  });
});

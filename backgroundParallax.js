$(document).ready(function () {
  var body = $("body");

  // Parallax scrolling effect
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    body.css("background-position", "center " + -scrollPosition * 1 + "px"); // Adjust the multiplier for the parallax effect
  });
});

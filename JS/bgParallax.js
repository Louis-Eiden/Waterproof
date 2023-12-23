document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;

  // Parallax scrolling effect
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    body.style.backgroundPosition = "center " + -scrollPosition * 0.5 + "px"; // Adjust the multiplier for the parallax effect
  });
});

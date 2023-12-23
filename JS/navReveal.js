document.addEventListener("DOMContentLoaded", function () {
  // Get the body element
  var nav = document.getElementsByTagName("header")[0];
  console.log(nav);

  setTimeout(function () {
    nav.style.opacity = 1;
  }, 1100);
});

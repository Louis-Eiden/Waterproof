document.addEventListener("DOMContentLoaded", function () {
  // Get the body element
  var body = document.body;

  // Set the target background position (ending position)
  var targetPosition = "center 0";

  // Set the transition property
  body.style.transition = "background-position var(--time-3) ease-in-out";

  // Set the background position to the target position after a short delay (e.g., 100 milliseconds)
  setTimeout(function () {
    // Set the target background position
    body.style.backgroundPosition = targetPosition;
  }, 100);

  // Remove the transition property after the transition is finished
  body.addEventListener("transitionend", function () {
    body.style.transition = "none";
  });
});

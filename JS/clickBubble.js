document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    // Create six new bubble elements
    var newBubble = document.createElement("img");
    var randomBubbleIndex = Math.floor(Math.random() * 4) + 1;

    newBubble.src = `./assets/Bubble-${randomBubbleIndex}-opacity50.png`;
    newBubble.classList.add("bubble", "click-bubble");
    document.body.appendChild(newBubble);

    // Set random width for the new bubble
    var randomWidth = Math.floor(Math.random() * 50) + 20; // Adjust the range as needed
    newBubble.style.width = randomWidth + "px";

    // Set random width for the new bubble
    var randomLeft = Math.floor(Math.random() * 100) - 100; // Adjust the range as needed
    newBubble.style.left = randomLeft + "px";

    // Set initial position of the new bubble at the click position
    newBubble.style.top =
      event.clientY + document.documentElement.scrollTop + "px";
    newBubble.style.left = event.clientX + "px";

    // Trigger reflow to ensure the transition is applied
    newBubble.offsetHeight;

    // Set the final position and opacity for the newly created bubble
    newBubble.style.top = event.clientY - randomWidth * 50 + "px"; // Adjust this value based on your preference
    newBubble.style.opacity = "0";

    // Remove the bubble element after the top transition ends
    newBubble.addEventListener("transitionend", function (event) {
      if (event.propertyName === "top") {
        newBubble.remove();
      }
    });

    // Trigger the animation by setting the final opacity
    newBubble.style.opacity = "1";
  });
});

$(document).ready(function () {
  // Store the initial top position for each bubble
  const initialTopPositions = $(".bubble").map(function () {
    return parseFloat($(this).css("top"));
  });

  // Store the initial left position for each bubble
  const initialLeftPositions = $(".bubble").map(function () {
    return parseFloat($(this).css("left"));
  });

  // Parallax Scroll effect for bubbles with a left-to-right wave
  $(window).scroll(function () {
    let scrollY = $(window).scrollTop();
    $(".bubble").each(function (index) {
      // Adjust the frequency, amplitude, and phase for the desired wave motion
      let frequency = 0.0075;
      let amplitude = 50;
      let phase = index * 1.5; // Adjust the phase to stagger the waves
      let wavePosition = amplitude * Math.sin(frequency * scrollY + phase);

      // Set the new top position based on the initial position and scroll
      let topPosition = initialTopPositions[index] - scrollY;
      let leftPosition = initialLeftPositions[index];

      $(this).css({
        top: topPosition + "px",
        left: leftPosition + wavePosition + "px",
      });
    });
  });
});

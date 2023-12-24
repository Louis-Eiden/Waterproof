document.addEventListener("DOMContentLoaded", function () {
  const coursesSection = document.querySelector(".courses");
  const bookingButton = document.querySelectorAll(".booking-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  /* --------------- Modal Pop Up Animation Animation --------------- */

  // open modal
  bookingButton.forEach((btn, i) =>
    btn.addEventListener("click", () => {
      coursesSection.classList.add("open");
      document.body.classList.add("stopScrolling");
    })
  );

  // close modal
  modalOverlay.addEventListener("click", () => {
    coursesSection.classList.remove("open");
    document.body.classList.remove("stopScrolling");
  });
});

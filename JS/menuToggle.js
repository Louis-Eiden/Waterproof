document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  /* --------------- Open & Close Navbar Menu --------------- */

  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
  });

  links.forEach((link) =>
    link.addEventListener("click", () => {
      document.body.classList.remove("open");
      document.body.classList.remove("stopScrolling");
    })
  );
});

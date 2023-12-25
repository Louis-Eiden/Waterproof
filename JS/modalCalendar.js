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

  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: "2023-01-12",
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    height: "600px",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    googleCalendarApiKey: "AIzaSyDJJfuAW1NaEWXt-2avUc-7b4T7zbYptrE",
    events: {
      googleCalendarId:
        "https://calendar.google.com/calendar/embed?src=eidenlouis.mt%40gmail.com&ctz=Europe%2FBerlin",
    },
  });

  calendar.render();
});

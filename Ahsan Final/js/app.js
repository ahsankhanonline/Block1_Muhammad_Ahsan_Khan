// MENU TOGGLE
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('show');
});

// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        body.classList.remove('show');
    })
})

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

/* form validation for the reservations section*/
const reservationDateInput = document.querySelector('.reservation__date');

// Get the current date.
const today = new Date();

// Add an event listener to the reservation date input.
reservationDateInput.addEventListener('change', function() {
  // Get the selected date.
  const selectedDate = new Date(reservationDateInput.value);

  // If the selected date is in the past, show an error message.
  if (selectedDate < today) {
    alert('You cannot select a date in the past.');
  }
});
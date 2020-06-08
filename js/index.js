// header show ul
const body = document.body;
const btn = document.querySelector('.nav-icon');

btn.addEventListener('click', function () {
  body.classList.toggle('show');
});


//Hamburger 
$(document).ready(function () {
  $('.nav-icon').click(function () {
    $(this).toggleClass('open');
  });
});


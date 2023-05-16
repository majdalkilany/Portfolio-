'use strict';

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-menu');
let body = document.getElementById('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((i) => {
  i.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

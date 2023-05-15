console.log('KHUY');

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


//back-to-top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("scrollButton").classList.add("show");
  } else {
    document.getElementById("scrollButton").classList.remove("show");
  }
}

document.getElementById("scrollButton").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//burger-menu
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.header-menu');
const burgerButton = document.querySelector('.line');

burgerMenu.addEventListener('click', function() {
  nav.classList.toggle('show');
  burgerButton.classList.toggle('cross');
});

//scrollable timeline-block
const scrollableBlock = document.querySelector('.timeline-block');

scrollableBlock.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const startX = event.pageX - scrollableBlock.offsetLeft;
  const scrollLeft = scrollableBlock.scrollLeft;

  document.addEventListener('mousemove', moveCallback);

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', moveCallback);
  });

  function moveCallback(event) {
    const x = event.pageX - scrollableBlock.offsetLeft;
    const walk = x - startX;
    scrollableBlock.scrollLeft = scrollLeft - walk;
  }
});

scrollableBlock.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  const startX = touch.clientX - scrollableBlock.offsetLeft;
  const scrollLeft = scrollableBlock.scrollLeft;

  document.addEventListener('touchmove', moveCallback);

  document.addEventListener('touchend', () => {
    document.removeEventListener('touchmove', moveCallback);
  });

  function moveCallback(event) {
    const touch = event.touches[0];
    const x = touch.clientX - scrollableBlock.offsetLeft;
    const walk = x - startX;
    scrollableBlock.scrollLeft = scrollLeft - walk;
  }
});


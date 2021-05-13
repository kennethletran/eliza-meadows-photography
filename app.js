// Locomotive
import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.05
});

// Custom Scrollbar
// const scrollBar = document.querySelector('.progress-scrollbar');

// window.onscroll = function() {scrollIndicator()};

// function scrollIndicator() {
//   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   // scrollHeight is the minimum height required to fit all content in the viewport without using a scrollbar
//   let scrollHeight = document.documentElement.scrollHeight;
//   // clientHeight is the viewport height
//   let clientHeight = document.documentElement.clientHeight;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = (windowScroll / height) * 100;
//   scrollBar.style.width = `${scrolled}%`;
// }

// Custom Cursor
const customCursors = document.querySelectorAll('.circle-cursor');

customCursors.forEach((cursor) => document.addEventListener('mousemove', function(e) {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
}));

// for (const cursor of customCursors) {
//   document.addEventListener('mousemove', function(e) {
//     cursor.style.left = `${e.pageX}px`;
//     cursor.style.top = `${e.pageY}px`;
//   })
// };

// Menu
const menuButton = document.querySelector('.menu__button');
const menuContainer = document.querySelector('.menu__container');
const pageContainer = document.querySelector('.page__container');

function handleMenuClick() {
  if(menuButton.classList.contains('menu--open')) {
    menuButton.classList.remove('menu--open');
    menuContainer.classList.remove('menu--expand');
    pageContainer.classList.remove('prevent--scrolling');
  } else {
    menuButton.classList.add('menu--open');
    menuContainer.classList.add('menu--expand');
    pageContainer.classList.add('prevent--scrolling');
  }
}
menuButton.addEventListener('click', handleMenuClick);


// Font Weight Hover
const firstSpan = document.querySelector('.headline--first');
const secondSpan = document.querySelector('.headline--second');
const headline = document.querySelector('.headline');
const heroImg = document.querySelector('.hero__img');

heroImg.addEventListener('mouseenter', function() {
  headline.classList.add('headline--anim');
  firstSpan.classList.add('span--first--slide');
  secondSpan.classList.add('span--second--slide')
});
heroImg.addEventListener('mouseleave', function() {
  headline.classList.remove('headline--anim');
  firstSpan.classList.remove('span--first--slide')
  secondSpan.classList.remove('span--second--slide')
});
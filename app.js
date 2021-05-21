// Locomotive
import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Custom Cursor
const customCursor = document.querySelector('.circle-cursor');
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// Menu
const menuButton = document.querySelector('.menu__button');
const menuContainer = document.querySelector('.menu__container');

function handleMenuClick() {
  if(menuButton.classList.contains('menu--open')) {
    menuButton.classList.remove('menu--open');
    menuContainer.classList.remove('menu--expand');
  } else {
    menuButton.classList.add('menu--open');
    menuContainer.classList.add('menu--expand');
  }
}
menuButton.addEventListener('click', handleMenuClick);

// Cursor & Link Hovers
const menuLinks = document.querySelectorAll('.menu__link');
const socialLinks = document.querySelectorAll('.social__link');

menuLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    customCursor.classList.remove('cursor-expand');
    link.classList.remove('hovered-link');
  });
  link.addEventListener("mouseover", () => {
    customCursor.classList.add('cursor-expand');
    link.classList.add('hovered-link');
  });
});

socialLinks.forEach(social => {
  social.addEventListener('mouseleave', () => {
    customCursor.classList.remove('cursor-expand-social');
    social.classList.remove('hovered-link');
  });
  social.addEventListener('mouseover', () => {
    customCursor.classList.add('cursor-expand-social');
    social.classList.add('hovered-link');
  });
});


// Cursor & Image Hovers 
const gallImages = document.querySelectorAll('.gall__img');
gallImages.forEach(img => {
  img.addEventListener("mouseleave", () => {
    customCursor.classList.remove('cursor-image');
  });
  img.addEventListener("mouseover", () => {
    customCursor.classList.add('cursor-image');
  });
})

// Font Weight Hover
const headline = document.querySelector('.headline');
const heroImg = document.querySelector('.hero__img');

heroImg.addEventListener('mouseover', function() {
  headline.classList.add('headline--anim');
});
heroImg.addEventListener('mouseleave', function() {
  headline.classList.remove('headline--anim');
});
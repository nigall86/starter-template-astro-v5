'use strict';

const themeSwitcher = document.querySelector('.theme-switcher');

const header = document.querySelector('.site-header');
const siteNav = document.querySelector('.site-nav__list');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navIcon = document.getElementById('nav-icon');

const heroSection = document.querySelector('.hero');

const trainerContainer = document.getElementById('trainers');
const trainerCards = document.querySelectorAll('[data-type="trainer"]');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('[data-type="close-modal"]');
const btnsOpenModal = document.querySelectorAll('[data-type="show-modal"]');

//////////////////////////////
// Preventing animation while loading

// Class that will prevent animation when content is still loading
document.body.className += 'js-loading';

window.addEventListener('load', showPage, false);

function showPage() {
  // When all content will be loaded this class will be removed
  document.body.className = document.body.className.replace('js-loading', '');
}

//////////////////////////////
// Smooth scrolling

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////////////////////////////
// Theme switcher

// We get theme value from local storage
let activeTheme = localStorage.getItem('theme');

function changeTheme(theme) {
  // Adds class to the body
  document.body.classList.add('theme-switch');

  // Checks if system theme or another
  if (theme === 'system') {
    localStorage.removeItem('theme');
    document.body.removeAttribute('data-theme');
  } else {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  document.body.addEventListener(
    'transitionend',
    function () {
      document.body.classList.remove('theme-switch');
    },
    {}
  );
}

// Clicking on the theme switcher
themeSwitcher.addEventListener('click', function (e) {
  if (e.target.tagName != 'INPUT') {
    return;
  }

  const themeToActivate = e.target.id;
  changeTheme(themeToActivate);
});

window.onload = function () {
  if (activeTheme) {
    document.getElementById(activeTheme).checked = true;
    changeTheme(activeTheme);
  }
};

//////////////////////////////
// Mobile menu functionality
navToggle.addEventListener('click', function () {
  const visibility = siteNav.getAttribute('data-visible');
  console.log(visibility);

  if (visibility === 'false') {
    siteNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navIcon.setAttribute('href', 'assets/icons.svg#icon-close');
  } else {
    siteNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navIcon.setAttribute('href', 'assets/icons.svg#icon-menu');
  }
});

//////////////////////////////
// Modal window function

// Opening function
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Closing function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// Closing modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Closing modal on ESC shifting
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Sticky navigation
const headerHeight = header.getBoundingClientRect().height; // --> height of the nav element
console.log(headerHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add('sticky');
  else header.classList.remove('sticky');
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null, // --> root is a viewport
  threshold: 0,
  rootMargin: `-${headerHeight}px`, // --> height of the nav to become visible a little bit earlier
});

heroObserver.observe(heroSection);

///////////////////////////////////////
// Smooth navigation scrolling
document
  .querySelector('.site-nav__list')
  .addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('site-nav__link')) {
      console.log(e.target);

      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

const navLinks = document.querySelectorAll('[data-navLink]');
const siteNav = document.querySelector('.site-nav__list');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navIcon = document.getElementById('nav-icon');

// Setting 'aria-current' attribute
navLinks.forEach((link) => {
  if (link.getAttribute('href') === window.location.pathname) {
    link.setAttribute('aria-current', 'page');
  }
});

// Menu toggle button
navToggle.addEventListener('click', function () {
  const visibility = siteNav.getAttribute('data-visible');

  if (visibility === 'false') {
    siteNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navIcon.setAttribute('href', '#icon-close');
  } else {
    siteNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navIcon.setAttribute('href', '#icon-menu');
  }
});

const navLinks = document.querySelectorAll('[data-navLink]');
const siteNav = document.querySelector('.site-nav__list');
const navMenuOpen = document.getElementById('nav-menu-open');
const navMenuClose = document.getElementById('nav-menu-close');
const overlay = document.getElementById('overlay');
const media = window.matchMedia('(width < 768px)');

// Making menu elements inert on mobile
function updateNavbar(e) {
	const isMobile = e.matches;
	isMobile ? siteNav.setAttribute('inert','') : siteNav.removeAttribute('inert');
}

updateNavbar(media);

media.addEventListener('change', (e) => {
	updateNavbar(e);
})

// Setting 'aria-current' attribute
navLinks.forEach((link) => {
  if (link.getAttribute( 'href') === window.location.pathname) {
    link.setAttribute('aria-current', 'page');
  }
	// With anchor link on the page we should close menu
	link.addEventListener('click', (e) => {
		closeMenu();
	})
});

function openMenu() {
  siteNav.classList.add('show');
	siteNav.removeAttribute('inert');
  navMenuOpen.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  siteNav.classList.remove('show');
	siteNav.setAttribute('inert','');
	navMenuOpen.setAttribute('aria-expanded', 'false');
}

navMenuOpen.addEventListener('click', () => {
	openMenu();
})

navMenuClose.addEventListener('click', () => {
	closeMenu();
})

overlay.addEventListener('click', () => {
	closeMenu();
})
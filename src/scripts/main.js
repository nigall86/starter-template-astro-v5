'use strict';

// libraries
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const heroSection = document.querySelector('.hero');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('[data-type="close-modal"]');
// const btnsOpenModal = document.querySelectorAll('[data-type="show-modal"]');

//////////////////////////////
// Preventing animation while loading

// Class that will prevent animation when content is still loading
// document.body.className += 'js-loading';

// window.addEventListener('load', showPage, false);

// function showPage() {
// When all content will be loaded this class will be removed
// document.body.className = document.body.className.replace('js-loading', '');
// }

//////////////////////////////
// Smooth scrolling with Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////////////////////////////
// Smooth scrolling for images with Lenis + GSAP
// gsap.registerPlugin(ScrollTrigger);
// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// const tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.img',
//       scrub: true,
//     },
//   })
//   .to('.img', {
//     stagger: 0.2,
//     y: -700,
//     scrub: true,
//   });

// ///////////////////////////////////////
// // Sticky navigation
// const headerHeight = header.getBoundingClientRect().height; // --> height of the nav element
// console.log(headerHeight);

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) header.classList.add('sticky');
//   else header.classList.remove('sticky');
// };

// const heroObserver = new IntersectionObserver(stickyNav, {
//   root: null, // --> root is a viewport
//   threshold: 0,
//   rootMargin: `-${headerHeight}px`, // --> height of the nav to become visible a little bit earlier
// });

// heroObserver.observe(heroSection);

// ///////////////////////////////////////
// // Smooth navigation scrolling
// document
//   .querySelector('.site-nav__list')
//   .addEventListener('click', function (e) {
//     e.preventDefault();

//     // Matching strategy
//     if (e.target.classList.contains('site-nav__link')) {
//       console.log(e.target);

//       const id = e.target.getAttribute('href');
//       console.log(id);
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     }
//   });

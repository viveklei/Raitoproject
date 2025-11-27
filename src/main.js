/**
 * Raito-Opto Electronics Website - Main JavaScript
 * This file handles all interactive features including sliders, animations, and dynamic content
 */

// ============================================
// ANIMATE ON SCROLL (AOS) INITIALIZATION
// ============================================
// Initialize AOS for scroll-based animations throughout the page
AOS.init({
  duration: 800,        // Animation duration in milliseconds
  easing: 'ease-in-out', // Animation easing function
  once: true,           // Animation happens only once when scrolling down
  offset: 100,          // Offset (in px) from the original trigger point
});

// ============================================
// HERO BANNER SLIDER
// ============================================
// Main banner slider at the top of the page with auto-play and pagination
const bannerSwiper = new Swiper('.banner', {
  loop: true,  // Infinite loop sliding
  autoplay: {
    delay: 5000,  // 5 seconds between slides
    disableOnInteraction: false,  // Continue autoplay after user interaction
  },
  pagination: {
    el: '.swiper-pagination',  // Pagination dots element
    clickable: true,           // Allow clicking on pagination dots
  },
  navigation: {
    nextEl: '.banner .next-btn',  // Next button
    prevEl: '.banner .prev-btn',  // Previous button
  },
});

// ============================================
// PRODUCT SECTION - SYNCHRONIZED SWIPERS
// ============================================
// Left side: Product titles that fade vertically
const productTitleSwiper = new Swiper('.product-title-swiper', {
  loop: true,
  autoplay: {
    delay: 3000,  // 3 seconds between slides
    disableOnInteraction: false,
  },
  direction: 'vertical',  // Vertical sliding
  slidesPerView: 1,       // Show one slide at a time
  effect: 'fade',         // Fade transition effect
  fadeEffect: {
    crossFade: true       // Cross-fade between slides
  },
  speed: 800,  // Transition speed in milliseconds
});

// Right side: Product images that slide horizontally
const productSwiper = new Swiper('.product-swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.product-swiper .next-btn',
    prevEl: '.product-swiper .prev-btn',
  },
  slidesPerView: 3,  // Show 3 products at once on desktop
  spaceBetween: 20,  // 20px gap between slides
  speed: 800,
  breakpoints: {
    320: { slidesPerView: 1 },   // Mobile: 1 slide
    768: { slidesPerView: 2 },   // Tablet: 2 slides
    1024: { slidesPerView: 3 },  // Desktop: 3 slides
  }
});

// Synchronize the two product swipers to move together
productSwiper.controller.control = productTitleSwiper;
productTitleSwiper.controller.control = productSwiper;

// ============================================
// DYNAMIC PRODUCT NUMBER DISPLAY
// ============================================
// Update the background number (01, 02, 03, 04) when product slides change
productSwiper.on('slideChange', function () {
  const productNumber = document.querySelector('.product-number');
  if (productNumber) {
    // Get the real index (accounting for loop mode)
    const realIndex = (productSwiper.realIndex % 4) + 1; // We have 4 unique products
    productNumber.textContent = '0' + realIndex;
  }
});

// ============================================
// NEWS SECTION SLIDER
// ============================================
// News items carousel with navigation buttons
const newsSwiper = new Swiper('.news-swiper', {
  loop: true,
  autoplay: {
    delay: 3500,  // 3.5 seconds between slides
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.news-tab-box .next-btn',
    prevEl: '.news-tab-box .prev-btn',
  },
  slidesPerView: 3,  // Show 3 news items at once
  spaceBetween: 20,
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// ============================================
// STICKY HEADER ON SCROLL
// ============================================
// Make header sticky and change its style when scrolling down
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('fixed');  // Add 'fixed' class when scrolled down
  } else {
    header.classList.remove('fixed');  // Remove when at top
  }
});

// ============================================
// NEWS TAB SWITCHING
// ============================================
// Handle clicking on news tabs (Raito-Opto News / Industry Trends / Rayclass)
const tabs = document.querySelectorAll('.news-tab-box .tabs .item');
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    tabs.forEach(t => t.classList.remove('on'));  // Remove active class from all tabs
    this.classList.add('on');  // Add active class to clicked tab
  });
});

// ============================================
// ANIMATED NUMBER COUNTER
// ============================================
// Animate numbers in the "Data Show" section when scrolled into view
const counters = document.querySelectorAll('.data-show-box .num');
let hasCounted = false;  // Flag to ensure counting happens only once

function startCounters() {
  if (hasCounted) return;  // Exit if already counted
  const section = document.querySelector('.data-show-box');
  if (!section) return;

  // Calculate if section is in viewport
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  // Trigger animation when section is halfway into viewport
  if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
    counters.forEach(counter => {
      const target = +counter.innerText;  // Get target number
      let count = 0;
      const speed = target / 50;  // Calculate increment speed

      const updateCount = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count);  // Update display
          setTimeout(updateCount, 20);  // Continue animation
        } else {
          counter.innerText = target;  // Set final value
        }
      };
      updateCount();  // Start counting animation
    });
    hasCounted = true;  // Mark as counted
  }
}

// Listen for scroll events to trigger counter animation
window.addEventListener('scroll', startCounters);

console.log('Raito-Opto Electronics Website Loaded Successfully');

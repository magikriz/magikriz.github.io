
// 'use strict';
// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }

// document.addEventListener("DOMContentLoaded", function () {

//   setTimeout(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, 10); // slight delay to ensure layout is ready

//   const sections = document.querySelectorAll('.fullpage-section');
//   const totalSections = sections.length;
//   let currentSection = 0;
//   let isAnimating = false;
//   let inputQueue = [];
//   let visitedSections = [];

//   const animationDuration = 700; // ms
//   const wheelThrottle = 100; // ms
//   let lastWheelTime = 0;
  
//   visitedSections.push(0);
//   scrollToSection(0);
  
//   const toggle = document.getElementById('menuToggle');
//   const menu = document.getElementById('overlayMenu');

//   toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active');
//     menu.classList.toggle('active');
//   });

//   document.querySelectorAll('.overlay-menu li').forEach(item => {
//     item.addEventListener('click', () => {
//       const sectionOrder = parseInt(item.getAttribute('data-target'));
//       inputQueue = [];
//       scrollToSection(sectionOrder);
//       toggle.classList.remove('active');
//       menu.classList.remove('active');
//     });
//   });

//   // Function to add all previous sections to visitedSections
//   function addPreviousSections(targetOrder) {
//     for (let i = 0; i < targetOrder; i++) {
//       if(!visitedSections.includes(i)) {
//         visitedSections.push(i); // Add all orders before the target order
//         let orderSection = document.querySelector(`[data-order="${i}"]`)
//         orderSection.classList.add('intro-done');
//         handleSection(i);
//       }
//     }
//   }

//   function setFullHeight() {
//     const height = window.innerHeight;
//     sections.forEach(section => {
//       section.style.height = height + 'px';
//     });
//   }
  
//   function getIntroDuration(section) {
//     const duration = parseInt(section.getAttribute('data-intro-duration'));
//     return isNaN(duration) ? 0 : duration;
//   }

//   function sectionZeroFunction () {
//     console.log("hi 0");
//     enableInputs();
//   }

//   function sectionOneFunction () {
//     console.log("hi 1");
//     enableInputs();
//   }

//   function sectionTwoFunction () {
//     console.log("hi 2");
//     enableInputs();
//   }

//   function sectionThreeFunction () {
//     console.log("hi 3");
//     enableInputs();
//   }

//   function sectionFourFunction () {
//     console.log("hi 4");
//     enableInputs();
//   }

//   function sectionFiveFunction () {
//     console.log("hi 5");
//     enableInputs();
//   }

//   function playIntroIfNeeded(section) {
//     const index = parseInt(section.getAttribute('data-order'));
//     const isFirstVisit = !visitedSections.includes(index);
//     console.log(isFirstVisit);
//     if (!isFirstVisit) {
//       enableInputs();
//       return;
//     }
    
//     // Mark as visited immediately to avoid repeat animations
//     visitedSections.push(index);
//     addPreviousSections(index); 
//     console.log(visitedSections);

//     const introDuration = getIntroDuration(section);
//     section.classList.add('intro-active'); // You can use this to kick off animations
//     // Trigger any animation logic here
//     setTimeout(() => {
//       section.classList.remove('intro-active');
//       section.classList.add('intro-done'); 
//       handleSection(index);
//     }, introDuration);
//   }

//   function disableInputs() {
//     locked = true;
//     inputQueue = [];  // Clear the input queue
//     document.body.style.overflow = 'hidden'; // Disable scroll
//     window.removeEventListener('wheel', handleWheel, { passive: true });
//     window.removeEventListener('keydown', handleKey);
//     window.removeEventListener('touchstart', handleTouchStart);
//     window.removeEventListener('touchend', handleTouchEnd);
//     console.log("disabled");
//   }
  
//   function enableInputs() {
//     locked = false;
//     document.body.style.overflow = ''; // Re-enable scroll
//     window.addEventListener('wheel', handleWheel, { passive: true });
//     window, handleKey);
//     window.addEventListener('touchstart', handleTouchStart);
//     window.addEventListener('touchend', handleTouchEnd);
//     console.log("enabled");
//   }

//   function handleSection(index) {
//     switch (index) {
//       case 0:
//         sectionZeroFunction();
//         break;
//       case 1:
//         sectionOneFunction();
//         break;
//       case 2:
//         sectionTwoFunction();
//         break;
//       case 3:
//         sectionThreeFunction();
//         break;
//       case 4:
//         sectionFourFunction();
//         break;
//       case 5:
//         sectionFiveFunction();
//         break;
//       default:
//         enableInputs();
//         console.log("No matching section. " + index);
//     }
//   }

//   function scrollToSection(index) {
//     console.log(index);
//     if (index < 0 || index >= totalSections || isAnimating) {
//       return; // skip but continue queue
//       // return dequeue(); // skip but continue queue
//     }
//     const section = sections[index];
//     isAnimating = true;
//     disableInputs();

//     // Scroll to the section smoothly first
//     window.scrollTo({
//       top: section.offsetTop,
//       behavior: 'smooth'
//     });
//     console.log(`Scrolling to section ${index}`);
//     // Wait for the scroll to finish (use setTimeout based on animationDuration)
//     setTimeout(() => {
//       currentSection = index;
//       // After scroll finishes, invoke PlayIntroIfNeeded
//       playIntroIfNeeded(section); // Call playIntroIfNeeded only after scroll completes
//       isAnimating = false;
//       // dequeue(); // Continue to the next queued action
//     }, animationDuration); // animationDuration is how long the scroll animation takes

//   }

//   function enqueue(direction) {
//     inputQueue = [];
//     inputQueue.push(direction);
//     if ((!isAnimating) && (inputQueue.length != 0)) {
//       dequeue();
//     }
//   }

//   function dequeue() {
//     if (inputQueue.length === 0 || isAnimating) return;
//     const direction = inputQueue.shift();
//     const newIndex = currentSection + (direction === 'down' ? 1 : -1);
//     scrollToSection(newIndex);
//   }

//   function handleWheel(e) {

//     const now = Date.now();
//     if (now - lastWheelTime < wheelThrottle) return;
//     lastWheelTime = now;

//     const delta = e.deltaY;
//     if (delta > 0) {
//       scrollToSection(currentSection+1);
//       // enqueue('down');
//     } else if (delta < 0) {
//       scrollToSection(currentSection-1);
//       // enqueue('up');
//     }
//   }

//   function handleKey(e) {
//     if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
//       e.preventDefault();
//       scrollToSection(currentSection+1);
//       // enqueue('down');
//     } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
//       e.preventDefault();
//       scrollToSection(currentSection-1);
//       // enqueue('up');
//     }
//   }

//   let touchStartY = 0;
//   let touchEndY = 0;

//   function handleTouchStart(e) {
//     touchStartY = e.touches[0].clientY;
//   }

//   function handleTouchEnd(e) {
//     touchEndY = e.changedTouches[0].clientY;
//     const delta = touchStartY - touchEndY;
//     if (Math.abs(delta) > 2) {
//       // enqueue(delta > 0 ? 'down' : 'up');
//       if (delta > 0) {
//         scrollToSection(currentSection+1);
//       } else {
//         scrollToSection(currentSection-1);
//       }
//     }
//   }

//   function handleResize() {
//     setFullHeight();
//     scrollToSection(currentSection);
//   }

//   //Mobile Portrait Check
//   function isMobilePortrait() {
//     const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
//     const isPortrait = window.matchMedia("(orientation: portrait)").matches;
//     return isMobileOrTablet && isPortrait;
//   }

//   // Define the handler so we can remove it later
//   function disableTouchMove(e) {
//     e.preventDefault();
//   }

//   // To disable scrolling
//   function lockTouch() {
//     document.addEventListener('touchmove', disableTouchMove, { passive: false });
//   }

//   // To enable scrolling again
//   function unlockTouch() {
//     document.removeEventListener('touchmove', disableTouchMove, { passive: false });
//   }

  
//   //Mobile Portrait UX patch
//   function  mobilePortraitPatch() {
//     if (isMobilePortrait()) {
//       lockTouch();
//     } else {
//       unlockTouch();
//     }
//   }

//   // Attach events
//   setFullHeight();
//   mobilePortraitPatch();
//   window.addEventListener('resize', mobilePortraitPatch);
//   window.addEventListener('resize', handleResize);
//   window.addEventListener('wheel', handleWheel, { passive: false });
//   window.addEventListener('keydown', handleKey);
//   window.addEventListener('touchstart', handleTouchStart, { passive: true });
//   window.addEventListener('touchend', handleTouchEnd, { passive: true });

//   // Optional: Scroll trigger buttons
//   const scrollBtns = document.querySelectorAll('.scroll-next');
//   scrollBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       scrollToSection(currentSection+1);
//       // enqueue('down');
//     });
//   });

//   function setRealViewportHeight() {
//     let vh = window.outerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//     setFullHeight();
//   }
//   setRealViewportHeight();
//   window.addEventListener('resize', setRealViewportHeight);

// });
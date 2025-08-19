(function (App) {
  "use strict";

  App.slider.init = function () {
    App.slider.locked = false;
    App.slider.locked = false;

    // App slider specfic code here
    const sections = document.querySelectorAll(".fullpage-section");
    // const scrollBtns = document.querySelectorAll('.scroll-next');

    const progress = document.createElement('div');
    progress.id = 'sliderProgressBar';
    document.body.appendChild(progress);

    const totalSections = sections.length;
    let currentSection = 0;
    let isAnimating = false;
    let visitedSections = [];
    // let inputQueue = [];

    const animationDuration = 700; // ms
    const wheelThrottle = 100; // ms
    let lastWheelTime = 0;

    let touchStartY = 0;
    let touchEndY = 0;

    // Function to add all previous sections to visitedSections
    function addPreviousSections(targetOrder) {
      for (let i = 0; i < targetOrder; i++) {
        if (!visitedSections.includes(i)) {
          visitedSections.push(i); // Add all orders before the target order
          let orderSection = document.querySelector(`[data-order="${i}"]`);
          orderSection.classList.add("intro-done");
          handleSection(i);
        }
      }
    }

    function getIntroDuration(section) {
      const duration = parseInt(section.getAttribute("data-intro-duration"));
      return isNaN(duration) ? 0 : duration;
    }

    function handleSectionUsual(index) {
      switch (index) {
        case 0:
          App.sections.heroSparkgridUsual();
          break;
        case 1:
          App.sections.techExpertiseUsual();
          break;
        case 2:
          App.sections.projectGalleryUsual();
          break;
        case 3:
          App.sections.storyChakrasUsual();
          break;
        case 4:
          App.sections.careerTimelineUsual();
          break;
        case 5:
          App.sections.letsConnectUsual();
          break;
        default:
          App.slider.enableInputs();
          // console.log("No matching section. " + index);
      }
    }

    function playIntroIfNeeded(section) {
      const index = parseInt(section.getAttribute("data-order"));
      const isFirstVisit = !visitedSections.includes(index);
      // console.log(isFirstVisit);
      if (!isFirstVisit) {
        handleSectionUsual(index)
        App.slider.enableInputs();
        return;
      }

      // Mark as visited immediately to avoid repeat animations
      visitedSections.push(index);
      // addPreviousSections(index);
      // console.log(visitedSections);

      const introDuration = getIntroDuration(section);
      section.classList.add("intro-active"); // You can use this to kick off animations
      // Trigger any animation logic here
      setTimeout(() => {
        section.classList.remove("intro-active");
        section.classList.add("intro-done");
        handleSection(index);
      }, introDuration);
    }

    function handleSection(index) {
      switch (index) {
        case 0:
          App.sections.heroSparkgrid();
          break;
        case 1:
          App.sections.techExpertise();
          break;
        case 2:
          App.sections.projectGallery();
          break;
        case 3:
          App.sections.storyChakras();
          break;
        case 4:
          App.sections.careerTimeline();
          break;
        case 5:
          App.sections.letsConnect();
          break;
        default:
          App.slider.enableInputs();
          // console.log("No matching section. " + index);
      }
    }

    App.slider.updateSliderProgress = function (currentIndex, totalSections) {
      const progress = document.getElementById('sliderProgressBar');
      if (!progress) return;
      const percent = ((currentIndex + 1) / totalSections) * 100;
      progress.style.width = `${percent}%`;
    }


    App.slider.scrollToSection = function (index) {
      // console.log(index);
      if (index < 0 || index >= totalSections || isAnimating) {
        return; // skip but continue queue
        // return dequeue(); // skip but continue queue
      }
      const section = sections[index];
      isAnimating = true;
      App.slider.disableInputs();

      // Scroll to the section smoothly first
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      // console.log(`Scrolling to section ${index}`);
      App.slider.updateSliderProgress(index,6);

      // Wait for the scroll to finish (use setTimeout based on animationDuration)
      setTimeout(() => {
        currentSection = index;
        App.slider.currentlyInSection = index;
        // if (index === 0) {
        //   if (App.header.customCursor) {
        //     setTimeout(() => {
        //       App.header.customCursorActivate();
        //     }, 1000);
        //   }
        // } else {
        //   if (App.header.customCursor) {
        //     App.header.customCursor = false;
        //     App.header.customCursorDeactivate();
        //   }
        // }
        // Activate Custom Cursor everytime user enters Secton 0
        // if(index === 0) {
        //   App.header.customCursor = true;
        //   App.header.customCursorActivate();
        // } else {
        //   if(App.header.customCursor) {
        //     App.header.customCursorDeactivate();
        //   }
        // }
        playIntroIfNeeded(section); // Call playIntroIfNeeded only after scroll completes
        isAnimating = false;
        // dequeue(); // Continue to the next queued action
      }, animationDuration); // animationDuration is how long the scroll animation takes
    };

    // function enqueue(direction) {
    //   inputQueue = [];
    //   inputQueue.push(direction);
    //   if ((!isAnimating) && (inputQueue.length != 0)) {
    //     dequeue();
    //   }
    // }

    // function dequeue() {
    //   if (inputQueue.length === 0 || isAnimating) return;
    //   const direction = inputQueue.shift();
    //   const newIndex = currentSection + (direction === 'down' ? 1 : -1);
    //   App.slider.scrollToSection(newIndex);
    // }

    App.slider.handleWheel = function (e) {
      const now = Date.now();
      if (now - lastWheelTime < wheelThrottle) return;
      lastWheelTime = now;

      const delta = e.deltaY;
      if (delta > 0) {
        App.slider.scrollToSection(currentSection + 1);
        // enqueue('down');
      } else if (delta < 0) {
        App.slider.scrollToSection(currentSection - 1);
        // enqueue('up');
      }
    };

    App.slider.handleKey = function (e) {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        App.slider.scrollToSection(currentSection + 1);
        // enqueue('down');
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        App.slider.scrollToSection(currentSection - 1);
        // enqueue('up');
      }
    };

    App.slider.handleTouchStart = function (e) {
      touchStartY = e.touches[0].clientY;
    };

    App.slider.handleTouchEnd = function (e) {
      touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;
      if (Math.abs(delta) > 60) {
        // enqueue(delta > 0 ? 'down' : 'up');
        if (delta > 0) {
          App.slider.scrollToSection(currentSection + 1);
        } else {
          App.slider.scrollToSection(currentSection - 1);
        }
      }
    };

    App.slider.handleResize = function () {
      setFullHeight();
      App.slider.scrollToSection(currentSection);
    };

    //Mobile Portrait UX patch
    App.slider.mobilePortraitPatch = function () {
      if (App.utils.isMobilePortrait()) {
        App.utils.lockTouch();
      } else {
        App.utils.unlockTouch();
      }
    };

    App.slider.disableRightClick = function (e) {
      e.preventDefault(); // Prevent the default context menu
    };

    App.slider.disableScroll = function () {
      document.body.style.overflow = "hidden"; // Disable scroll
    };

    App.slider.enableScroll = function () {
      document.body.style.overflow = ""; // Enable scroll
    };

    //disable all inputs
    App.slider.disableInputs = function () {
      App.slider.locked = true;
      // inputQueue = [];  // Clear the input queue
      window.removeEventListener("wheel", App.slider.handleWheel, {
        passive: true,
      });
      window.removeEventListener("keydown", App.slider.handleKey);
      window.removeEventListener("touchstart", App.slider.handleTouchStart);
      window.removeEventListener("touchend", App.slider.handleTouchEnd);
      window.addEventListener("contextmenu", App.slider.disableRightClick);
      // console.log("disabled");
    };

    //enable all inputs
    App.slider.enableInputs = function () {
      App.slider.locked = false;
      window.addEventListener("wheel", App.slider.handleWheel, {
        passive: true,
      });
      window.addEventListener("keydown", App.slider.handleKey);
      window.addEventListener("touchstart", App.slider.handleTouchStart, {passive: true});
      window.addEventListener("touchend", App.slider.handleTouchEnd, {passive: true});
      window.removeEventListener("contextmenu", App.slider.disableRightClick);
      // console.log("enabled");
    };

    // Optional: Scroll trigger buttons
    // scrollBtns.forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     App.slider.scrollToSection(currentSection+1);
    //     // enqueue('down');
    //   });
    // });

    function setFullHeight() {
      const height = window.innerHeight;
      sections.forEach((section) => {
        section.style.height = height + "px";
      });
    }

    App.slider.setRealViewportHeight = function () {
      let vh = window.outerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setFullHeight();
    };

    // Attached events
    window.addEventListener("resize", App.slider.mobilePortraitPatch);
    window.addEventListener("resize", App.slider.handleResize);
    window.addEventListener("resize", App.slider.setRealViewportHeight);
    window.addEventListener("wheel", App.slider.handleWheel, {
      passive: false,
    });
    window.addEventListener("keydown", App.slider.handleKey);
    window.addEventListener("touchstart", App.slider.handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchend", App.slider.handleTouchEnd, {
      passive: true,
    });
  };
})(window.App);

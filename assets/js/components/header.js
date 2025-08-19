(function (App) {
  "use strict";

  // App.header.customCursor = true;

  App.header.init = function () {
    //App Header code
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const inputCheckbox = menuToggle.querySelector("input[type='checkbox']");
    const menu = document.getElementById("overlayMenu");
    let locked = false;
    
    const body = document.body;
    const logoContainer = document.getElementById('logoContainer');
    const root = document.documentElement;

    function setPathLengths() {

        // setTimeout(() => {                
            const path1 = document.querySelector('#logo-path-1');
            const path2 = document.querySelector('#logo-path-2');
            
            if (path1 && path2) {
                const length1 = Math.ceil(path1.getTotalLength());
                const length2 = Math.ceil(path2.getTotalLength());
                
                root.style.setProperty('--path-1-length', length1 + 1);
                root.style.setProperty('--path-2-length', length2 + 1);
            }
        // }, 2000);
    }
    window.addEventListener('load', setPathLengths);

    themeToggle.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Prevent the default context menu
    });

    menuToggle.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Prevent the default context menu
    });

    menuToggle.addEventListener("click", () => {
      if (locked) return;
      let ariaExpanded = App.utils.toBoolean(
        menuToggle.getAttribute("aria-expanded")
      );

      if (menuToggle.classList.contains("active")) {
        App.slider.enableInputs();
        App.slider.enableScroll();
      } else {
        App.slider.disableInputs();
        App.slider.disableScroll();
      }

      locked = true;
      menuToggle.classList.toggle("active");

      if (ariaExpanded) {
        menuToggle.setAttribute("aria-expanded", "false");
      } else {
        menuToggle.setAttribute("aria-expanded", "true");
      }
      menu.classList.toggle("active");
      setTimeout(() => (locked = false), 600);
    });

    document.querySelectorAll(".overlay-menu li").forEach((item) => {
      item.addEventListener("click", () => {
        const sectionOrder = parseInt(item.getAttribute("data-target"));
        App.slider.scrollToSection(sectionOrder);
        menuToggle.classList.remove("active");
        menu.classList.remove("active");
      });
    });

    const logo = document.getElementById("kd-logo");
    logo.addEventListener('click', () => {
      App.slider.scrollToSection(0);
    });

  };

  // App.header.customCursor = function () {
  //   // Handheld Devices check
  //   const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(
  //     navigator.userAgent
  //   );
  //   console.log(isMobileOrTablet + " Mobile");
    
  //   const myCursor = new CustomCursor();

  //   function customCursorActivate() {
  //     if (!isMobileOrTablet) {
  //       myCursor.activate();
  //       console.log("Custom Cursor Activated!");
  //     } else return;
  //   }
    
  //   function customCursorDeactivate() {

  //     // Handheld Devices check
  //     const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(
  //       navigator.userAgent
  //     );

  //     if (myCursor) {
  //       myCursor.deactivate();
  //       console.log("Custom Cursor Deactivated!");
  //     }
  //   }
  // }

})(window.App);

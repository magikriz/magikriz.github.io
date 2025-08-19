
'use strict';
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", function () {
  
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 10); // slight delay to ensure layout is ready
  
  App.slider.init();
  App.slider.mobilePortraitPatch();
  App.slider.disableInputs();
  App.theme.init();
  App.header.init();
  App.slider.setRealViewportHeight();

  // window.addEventListener('resize', App.utils.showLovePopup);

  App.loader.init();

  document.querySelectorAll('*').forEach(element => {
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none'; // For Safari
    element.style.MozUserSelect = 'none'; // For Firefox
    element.style.msUserSelect = 'none'; // For IE/Edge
  });

});
(function(App) {

    'use strict';

    App.theme.init = function() {
    
        const toggleBtn = document.getElementById('themeToggle');
        const toggleIcon = document.getElementById('themeIcon');
        const html = document.documentElement;
        const fire = "fire";
        const ice = "ice";
    
        function playThemeTransition(theme) {
            const transitionEl = document.getElementById("themeTransition");
            if (!transitionEl) return;
          
            transitionEl.classList.remove("fire", "ice"); // clear any previous
            void transitionEl.offsetWidth; // force reflow to restart animation
          
            if (theme === "fire") {
              transitionEl.classList.add("fire");
            } else if (theme === "ice") {
              transitionEl.classList.add("ice");
            }
        }
        
        toggleBtn.addEventListener('click', () => {
            const isIce = html.getAttribute('data-theme') === 'ice';
            if(isIce) {
                html.setAttribute('data-theme', 'fire');
                toggleIcon.innerHTML="&#128293;";
                playThemeTransition(fire);
            } else {
                html.setAttribute('data-theme', 'ice');
                toggleIcon.innerHTML="❄️";
                playThemeTransition(ice);
            }
            
            toggleBtn.setAttribute('aria-pressed', String(!isIce));
        });

    }

})(window.App);
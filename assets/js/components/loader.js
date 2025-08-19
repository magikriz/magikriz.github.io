(function(App) {

    'use strict';
    
    App.loader.init = function() {
        App.loader.loaded = true;

        window.addEventListener("load", () => { 
            const loader = document.getElementById("kd-loader");
            setTimeout(() => {
                App.slider.scrollToSection(0);
            }, 3800); // kickstart slider for flow 
            setTimeout(() => {
                loader.classList.remove("fade-in");
                loader.classList.add("fade-out");
                setTimeout(() => {
                    loader.remove();
                }, 1500);
            }, 4000); // wait for animations to look cool (3000 to 4000)
        });
    }
})(window.App);
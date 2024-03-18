const slider = document.querySelector('[type="range"]');

slider.oninput = function() {
    document.documentElement.style.setProperty('--animation-duration', `${slider.value}s`);
};
'use strict';

let menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.className.indexOf('open') === -1) {
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
}
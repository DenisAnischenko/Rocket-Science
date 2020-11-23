'use strict';

let menu = document.querySelector('.menu');

function toggleMenu() {
    toggleOpen(menu)
}

function toggleAccordion(el) {
    let accordions = document.querySelectorAll('.accordion-wrapper');

    accordions.forEach((accordion) => {
        el !== accordion && accordion.classList.remove('opened');
    })

    toggleOpen(el);
}

let toggleOpen = (el) => {
    if (el.className.indexOf('opened') === -1) {
        el.classList.add('opened');
    } else {
        el.classList.remove('opened');
    }
}
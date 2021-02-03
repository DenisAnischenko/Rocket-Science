(() => {
    'use strict';

    window.onload = () => {
        window.toggleMenu = toggleMenu;
        window.toggleAccordion = toggleAccordion;

        initSlider();
    }

    let menu = document.querySelector('.menu');

    let toggleMenu = () => toggleOpen(menu);

    let toggleAccordion = (el) => {
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


    let initSlider = () => {
        let currentSlide = 0,
            sliderWrapper = document.querySelector('.slider-wrapper'),
            slides = document.querySelectorAll('.slider .slide'),
            slideCount = slides.length || 1,
            slideWidth = slides[0].offsetWidth,
            prev = document.querySelector('.nav.left'),
            next = document.querySelector('.nav.right');

        sliderWrapper.style.width = 100 * slideCount + 'vw';

        prev.addEventListener('click', clickPrev)
        next.addEventListener('click', clickNext)

        function clickPrev() {
            currentSlide = currentSlide > 0 ? --currentSlide : (slideCount - 1);
            calculateTransform(currentSlide);
        }

        function clickNext() {
            currentSlide = currentSlide < (slideCount - 1) ? ++currentSlide : 0;
            calculateTransform(currentSlide);
        }

        function calculateTransform(ind) {
            sliderWrapper.style.transform = `translateX(-${ind * slideWidth}px)`
        }

    }
})()
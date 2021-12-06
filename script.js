// ___Swipers___

const swiper1 = new Swiper(".swiper1", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const swiper2 = new Swiper(".swiper2", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const swiper3 = new Swiper(".swiper3", {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
      },
      grabCursor: true,
      
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        // when window width is >= 360px
        360: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
        // when window width is >= 425px
        425: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 576px
        576: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
        slidesPerView: 4,
        spaceBetween: 20
        },
    },
});

// ___Menu-Burger___

const openBurgerBtn = document.querySelector('#open-burger-btn');
const closeBurgerBtn = document.querySelector('#close-burger-btn');
const menuBurger = document.querySelector('.menu__burger');
const content = document.querySelector('.content');
const links = document.querySelectorAll('.burger__link');

function openBurger(e) {
    menuBurger.classList.add('menu__burger-opened');
}

function closeBurger(e) {
    menuBurger.classList.remove('menu__burger-opened');
}

openBurgerBtn.addEventListener('click', openBurger);
closeBurgerBtn.addEventListener('click', closeBurger);
content.addEventListener('click', closeBurger);
window.addEventListener('scroll', (e) => {
    if(window.innerHeight > 567) {
        
        closeBurger()
    }
});

links.forEach((el) => {
    el.addEventListener('click', closeBurger);
})

// ___Paralax-effect___

window.onload = () => {
    document.querySelector('.content').style.backgroundAttachment = "fixed";
    window.onscroll = function () {
    document.querySelector('.content').style.backgroundPosition = "0px " + (0 + (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 8)) + "px";
    }
};

// ___Anim-rocket___

const rocket = document.querySelector('.scrollup');
const rocketDispaly = getComputedStyle(rocket).display;
function rocketGo(e) {
    e.preventDefault;
    rocket.classList.add('anim__rocket');
    setTimeout(() => {
        rocket.classList.remove('anim__rocket')
    },1000)
}
rocket.addEventListener('click', rocketGo);

$(document).ready(function(){
         
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
    });
     
    });

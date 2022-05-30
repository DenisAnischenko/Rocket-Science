// ___Swipers___

//* Reviews swiper
const swiper1 = new Swiper(".swiper1", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
});

//* FAQ swiper
const swiper2 = new Swiper(".swiper2", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
});

//* Companies swiper
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
    el: ".swiper-pagination1",
    type: "bullets",
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
      spaceBetween: 30,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

//* Tutorial swiper

const swiper4 = new Swiper(".swiper4", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  slideToClickedSlide: true
});
const swiper5 = new Swiper(".swiper5", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  effect: "fade",
    fadeEffect: {
      crossFade: true
    },
  thumbs: {
    swiper: swiper4,
  }
});


//* Mentors swiper
const swiper6 = new Swiper(".swiper6", {
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
    type: "bullets",
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
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 425px
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


// ___Menu-Burger___

const openBurgerBtn = document.querySelector("#open-burger-btn");
const closeBurgerBtn = document.querySelector("#close-burger-btn");
const menuBurger = document.querySelector(".menu__burger");
const content = document.querySelector(".content");
const links = document.querySelectorAll(".burger__link");

function openBurger(e) {
  menuBurger.classList.add("menu__burger-opened");
}

function closeBurger(e) {
  menuBurger.classList.remove("menu__burger-opened");
}

openBurgerBtn.addEventListener("click", openBurger);
closeBurgerBtn.addEventListener("click", closeBurger);
content.addEventListener("click", closeBurger);
window.addEventListener("scroll", (e) => {
  if (window.innerHeight > 567) {
    closeBurger();
  }
});

links.forEach((el) => {
  el.addEventListener("click", closeBurger);
});

// ___Paralax-effect___

window.onload = () => {
  document.querySelector(".content").style.backgroundAttachment = "fixed";
  window.onscroll = function () {
    document.querySelector(".content").style.backgroundPosition =
      "0px " +
      (0 +
        Math.max(document.documentElement.scrollTop, document.body.scrollTop) /
          8) +
      "px";
  };
};

// ___Anim-rocket___

const rocket = document.querySelector(".scrollup");
const rocketDispaly = getComputedStyle(rocket).display;
function rocketGo(e) {
  e.preventDefault;
  rocket.classList.add("anim__rocket");
  setTimeout(() => {
    rocket.classList.remove("anim__rocket");
  }, 1000);
}
rocket.addEventListener("click", rocketGo);

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
  });
});

// ___Read more btn___

function myFunction() {
  var moreText = document.getElementById("read_more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "inline") {
    btnText.classList.toggle('toogle');
    moreText.style.display = "none";
  } else {
    btnText.classList.toggle('toogle');
    moreText.style.display = "inline";
  }
}


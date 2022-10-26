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
    // when window width is >= 576px
    576: {
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

const swiper7 = new Swiper(".swiper7", {
  slidesPerView: 3,
  centerInsufficientSlides: true,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 576px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

// ___Paralax-effect___

document.querySelector(".content").style.backgroundAttachment = "fixed";
window.onscroll = function () {
  document.querySelector(".content").style.backgroundPosition =
    "0px " +
    (0 +
      Math.max(document.documentElement.scrollTop, document.body.scrollTop) /
      8) +
    "px";
};


// ___Anim-rocket___

const rocket = document.querySelector(".scrollup");

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

  $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
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

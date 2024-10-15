// Loader script

$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Open and close offcanvas menu script

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const offcanvasMenu = document.getElementById("offcanvasMenu");

openBtn.addEventListener("click", () => {
  offcanvasMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  offcanvasMenu.classList.remove("active");
});

// Sticky navbar script

$(function () {
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= 150) {
      $("header").addClass("header-sticky");
    } else {
      $("header").removeClass("header-sticky");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// Scroll to top script

$(".scroll-to-top").fadeOut();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// Present year script

document.getElementById("year").innerHTML = new Date().getFullYear();

// WorkSwiper slider script

var swiper = new Swiper(".workSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// TestimonialsSwiper slider script

var swiper = new Swiper(".testimonialsSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// NewsSwiper slider script

var swiper = new Swiper(".newsSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// ClientsSwiper slider script -----------------------

var swiper = new Swiper(".clientsSwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
});

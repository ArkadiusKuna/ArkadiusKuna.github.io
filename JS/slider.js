const introSwiper = new Swiper('.intro-slider', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  effect: "fade",
  speed: 3000,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
}
});

const productsSwiper = new Swiper(".products-slider", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const modalSwiper = new Swiper('.modal-slider', {
  direction: 'horizontal',
  allowTouchMove: false,
  effect: "fade",
  speed: 500,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  }
});
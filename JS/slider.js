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

var swiper = new Swiper(".products-slider", {
  slidesPerView: 4,
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
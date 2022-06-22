const introSwiper = new Swiper(".intro-slider", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: false,
  effect: "fade",
  speed: 3000,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

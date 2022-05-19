const modalSwiper = new Swiper(".modal-slider",{
  direction: "horizontal",
  allowTouchMove: false,
  effect: "fade",
  speed: 500,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
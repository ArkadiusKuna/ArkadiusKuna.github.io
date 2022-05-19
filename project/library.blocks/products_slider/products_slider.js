const productsSwiper = new Swiper(".products-slider", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
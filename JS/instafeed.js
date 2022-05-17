var userFeed = new Instafeed({
  get: "kunarek",
  target: "instafeed-slider",
  resolution: "standard_resolution",
  template:
    '<div class="instafeed_slider__swiper_slide swiper-slide"><img class="instafeed__image" src="{{image}}"</img><div class="instafeed__caption instafeed__caption--hovered"><p class="instafeed__text">{{caption}}</p></div></div>',
  accessToken:
    "IGQVJVZADQ2YnZAleFVfbGJIb0lLX2J0X1hvVkdUNUhSeF9WY2Y1ZAHFCNFVhUXhhX2NwV040UkZA5eEtEbmxMSF9zdl9RUm1udmg2NkVhX0tmRmdvSU1BMFFGUHNTRWNXMFJScUUxSE9mWHNEM2JydFFwSwZDZD",
  sortBy: "standard-recent",
  after: function () {
    const instafeedSwiper = new Swiper(".instafeed-slider", {
      slidesPerView: 5,
      slidesPerGroup: 3,
      allowTouchMove: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
});
userFeed.run();
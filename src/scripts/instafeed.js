var userFeed = new Instafeed({
    get: "kunarek",
    target: "instafeed-slider",
    resolution: "standard_resolution",
    template:
        '<div class="instafeed-slider__swiper-slide swiper-slide"><img class="instafeed-slider__image" src="{{image}}"</img><div class="instafeed-slider__caption instafeed__caption--hovered"><p class="instafeed-slider__text">{{caption}}</p></div></div>',
    accessToken:
        "IGQVJVZADQ2YnZAleFVfbGJIb0lLX2J0X1hvVkdUNUhSeF9WY2Y1ZAHFCNFVhUXhhX2NwV040UkZA5eEtEbmxMSF9zdl9RUm1udmg2NkVhX0tmRmdvSU1BMFFGUHNTRWNXMFJScUUxSE9mWHNEM2JydFFwSwZDZD",
    sortBy: "standard-recent",
    after: function () {
        const instafeedSwiper = new Swiper(".instafeed-slider", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            allowTouchMove: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                600: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });
    },
});
userFeed.run();

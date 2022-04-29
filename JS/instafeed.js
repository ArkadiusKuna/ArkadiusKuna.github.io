var userFeed = new Instafeed({
    get: 'kunarek',
    target: "instafeed-slider",
    resolution: 'standard_resolution',
    template: '<div class="instafeed_slider__swiper_slide swiper-slide"><div class="instafeed__caption"><p class="instafeed__text">{{caption}}</p></div><img title="{{caption}}" class="instafeed__image" src="{{image}}" /></div>',
    accessToken: 'IGQVJVbzB1dHVTdlNUaTVSbzg2SjVHVDVCMl9PeDRiQmJfaGJxVHBEWEVlNllFMm9xbFhmWU9qTl9PYkJ6RHlFVGU5TVRhSW0td1RfSlpneVJlTS1mNWFXVHIwMUVFcG93Y01PQTBGNXhES0xMY3NoZAAZDZD',
    sortBy: 'most-recent',
    after: function () {

        const instafeedSwiper = new Swiper('.instafeed-slider', {
            slidesPerView: 5,
            slidesPerGroup: 3,
            allowTouchMove: true,
            mousewheel: {
              container: (".instafeed-slider"),
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
          })

    }
}); 
userFeed.run();
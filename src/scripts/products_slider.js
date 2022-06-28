const productsSwiper = new Swiper(".products-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
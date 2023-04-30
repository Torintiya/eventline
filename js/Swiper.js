const swipersecond = new Swiper(".swiper_box", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.prev',
        prevEl: '.next',
    },

    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        690: {
            slidesPerView: 2,
        },

        1000: {
            slidesPerView: 3,
        },

    }

});
const swiperfirst = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


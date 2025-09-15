document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.banner-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.banner-swiper .swiper-pagination',
            clickable: true,
        },
    
        navigation: {
            nextEl: '.banner .swiper-btn-next',
            prevEl: '.banner .swiper-btn-prev',
        },
    
});
});
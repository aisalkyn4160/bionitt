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

 const aboutSwiper = new Swiper('.about-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: {
            el: '.about-swiper-pagination',
           type: 'fraction',
           
        },

        navigation: {
            nextEl: '.about-btn-next',
            prevEl: '.about-btn-prev',
        },
    
});

const documentsSwiper = new Swiper('.documents-swiper', {
        slidesPerView: 4.5,
        spaceBetween: 24,
        loop: true,
         navigation: {
            nextEl: '.documents .swiper-btn-next',
            prevEl: '.documents .swiper-btn-prev',
        },
    
});

});

$(function () {
    $('.news-tab:first-child').addClass('active')
    $('.news-items:first-child').addClass('active')
    $('.news-tab').click(function () {
        $('.news-tab').removeClass('active');
        $('.news-items').removeClass('active');
        $(this).addClass('active');
        $(`.news-items[data-tab="${this.dataset.tab}"]`).addClass('active');
    });
})


function validatePhone(input) {
    // Удаляем все символы, кроме цифр, плюса, скобок, дефиса и пробела
    input.value = input.value.replace(/[^\d+\-()\s]/g, '');
}




const toTop = document.getElementById('toTop');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "flex";


    } else {
        toTop.style.display = "none";
    }
}

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
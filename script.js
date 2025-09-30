document.addEventListener('DOMContentLoaded', () => {
  const headerCatalogBurger = document.querySelector('.header-catalog-burger');
  const headerCatalogDropdown = document.querySelector('.header-catalog-dropdown');

  headerCatalogBurger.addEventListener('click', () => {
    headerCatalogBurger.classList.toggle('active');
    headerCatalogDropdown.classList.toggle('show');

  });
})

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('language-btn');
  const buttonText = button.querySelector('span');
  const dropdown = document.getElementById('language-dropdown');
  const option = document.querySelector('.language-option');

  // Показать/скрыть дропдаун при клике на кнопку
  button.addEventListener('click', function() {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Обработка выбора языка
  option.addEventListener('click', function(e) {
    e.preventDefault();
    dropdown.style.display = 'none';
    if (buttonText.textContent === 'RUS') {
      buttonText.textContent = 'ENG';
      option.textContent = 'RUS';
    } else {
      buttonText.textContent = 'RUS';
      option.textContent = 'ENG';
    }
    
  });

  // Закрыть дропдаун при клике вне его
  window.addEventListener('click', function(e) {
    if (!e.target.matches('#language-button')) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobSearchBtn = document.querySelector('.mobile-search-btn');
    const headerSearchForm = document.querySelector('.header-search-form');
    const headerTop = document.querySelector('.header-top');

  mobSearchBtn.addEventListener('click', () => {
    mobSearchBtn.classList.toggle('active');
    headerSearchForm.classList.toggle('active');
    headerTop.classList.toggle('active');
  });
})

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
        
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 3,
            },
        },
});
const aboutSwiper2 = new Swiper('.about-details .about-swiper', {
        slidesPerView: 3.5,
        spaceBetween: 24,
        pagination: {
            el: '.about-swiper-pagination',
           type: 'fraction',
           
        },

        navigation: {
            nextEl: '.about-btn-next',
            prevEl: '.about-btn-prev',
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 3.5,
            },
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

            pagination: {
                el: '.documents .swiper-pagination',
            },
            
            breakpoints: {
                0: {
                    slidesPerView: 2.2,
                    spaceBetween: 8,
                },
                576: {
                    slidesPerView: 3.5,
                },
                768: {
                    slidesPerView: 4.5,
                },
            },
    });

    const advantagesSwiper = new Swiper('.advantages-swiper', {
        slidesPerView: 3,
        grid: {
            rows: 3,
            fill: 'row',
        },

        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.advantages .swiper-btn-next',
            prevEl: '.advantages .swiper-btn-prev',
        },

        pagination: {
            el: '.advantages .swiper-pagination',
        },
        
        breakpoints: {

            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 16,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
            950: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            },
        },  
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const directionSwiper = new Swiper('.direction-swiper', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        navigation: {
            nextEl: '.direction-swiper .swiper-btn-next',
            prevEl: '.direction-swiper .swiper-btn-prev',
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


// Попап благодарности
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('success-popup');
    const closeBtn = document.getElementById('success-popup-close');
    const okBtn = document.getElementById('success-popup-ok');
    const form = document.getElementById('feedback-form');

    // Функция для показа попапа
    const showPopup = () => {
        popup.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    // Функция для скрытия попапа
    const hidePopup = () => {
        popup.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    // Обработчик отправки формы
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь можно добавить отправку данных на сервер
        const formData = new FormData(form);
        const phone = formData.get('tel') || form.querySelector('input[type="tel"]').value;
        
        console.log('Отправка заявки:', phone);
        
        // Очищаем форму
        form.reset();
        
        // Показываем попап
        showPopup();
    });

    // Закрытие попапа по кнопке "Хорошо"
    okBtn?.addEventListener('click', hidePopup);

    // Закрытие попапа по крестику
    closeBtn?.addEventListener('click', hidePopup);

    // Закрытие попапа по клику на overlay
    popup?.addEventListener('click', (e) => {
        if (e.target === popup) {
            hidePopup();
        }
    });

    // Закрытие попапа по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            hidePopup();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobMenuCatTtl = document.querySelector('.js-menu-category');
    const mobCatCtg = document.querySelector('.mobile-calalog-categories');
    const mobBack = document.querySelectorAll('.mobile-back');

    mobMenuCatTtl.addEventListener('click', () => {
        mobCatCtg.classList.toggle('active');
    });
    
    mobBack.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobMenuCat = document.querySelector('.js-menu-catalog');
    const mobCatMenu = document.querySelector('.mobile-catalog-menu');
    const mobBack = document.querySelector('.mobile-back');

    mobMenuCat.addEventListener('click', () => {
        mobCatMenu.classList.toggle('active');
    });
    
    mobBack.addEventListener('click', () => {
        mobCatMenu.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector('.header-burger');
    const mobMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobMneuOverlay = document.querySelector('.mobile-menu-overlay');

    headerBurger.addEventListener('click', () => {
        mobMenu.classList.toggle('active');
        document.body.classList.add('no-scroll');
        mobMneuOverlay.classList.add('active');
    });
    
    closeMenu.addEventListener('click', () => {
        mobMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        mobMneuOverlay.classList.remove('active');
    });
});

$(function () {
    $('.product-tabs__item:first-child').addClass('active')
    $('.product-description').addClass('active')
    $('.product-tabs__item').click(function () {
        $('.product-tabs__item').removeClass('active');
        $('.product-tabs__content').removeClass('active');
        $(this).addClass('active');
        $(`.product-tabs__content[data-tab="${this.dataset.tab}"]`).addClass('active');
    });
})

$(function () {
    $('.instruction-acc__title').click(function () {
        $(this).toggleClass('active')
        $(this).siblings('.instruction-acc__content').slideToggle();
    })
})
$(function () {
    $('.vacancy-acc-ttl').click(function () {
        $(this).toggleClass('active')
        $(this).siblings('.vacancy-acc-content').slideToggle();
    })
})

$(function () {
    $('.partners-address-tab:first-child').addClass('active')
    $('.partners-addresses-content-rf').addClass('active')
    $('.partners-address-tab').click(function () {
        $('.partners-address-tab').removeClass('active');
        $('.partners-addresses-content').removeClass('active');
        $(this).addClass('active');
        $(`.partners-addresses-content[data-tab="${this.dataset.tab}"]`).addClass('active');
    });
})


// -----------------------yandex-map--------------------------
ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
        center: [56.148243, 40.355898],
        zoom: 15
    });

    const pngPlacemark = new ymaps.Placemark([56.148243, 40.355898], {
        balloonContent: 'г. Владимир, ул. Лакина, Д. 4Б. а/я 11',
        hintContent: 'г. Владимир, ул. Лакина, Д. 4Б. а/я 11'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: './assets/icons/map-mark.png',
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -80],
        iconContentOffset: [0, 10], // Смещение текста относительно иконки
        iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="map-icon-content"> ул. Лакина, Д. 4Б</div>'
        )
    });

    myMap.geoObjects.add(pngPlacemark);
}
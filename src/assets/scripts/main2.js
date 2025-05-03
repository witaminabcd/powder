// import fortawesome from '@fortawesome/fontawesome-free';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';

import $ from 'jquery';
import jQuery from 'jquery';


const swiper = new Swiper('.swipergood', {
    // modules: [Navigation, Pagination, Scrollbar],
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    //allowTouchMove: false, // можно ещё отключить свайп
    autoplay: {
        delay: 0,
        disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    // Navigation arrows
    //     nextButton: '.swiper2-button-next',
    //     prevButton: '.swiper2-button-prev',

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiperWorks = new Swiper('.swiperworks', {
    // modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
    },
    longSwipesRatio: 0.5,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    // Navigation arrows
    //     nextButton: '.swiper2-button-next',
    //     prevButton: '.swiper2-button-prev',

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiperComments = new Swiper('.swipercomments', {
    // modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,

    autoplay: {
        delay: 4000,
    },
    longSwipesRatio: 0.5,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    // Navigation arrows
    //     nextButton: '.swiper2-button-next',
    //     prevButton: '.swiper2-button-prev',

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


document.addEventListener('DOMContentLoaded', () => {
    const faqToggles = document.querySelectorAll('.faq-question');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const item = toggle.parentElement;
            const answer = item.querySelector('.faq-answer');

            if (item.classList.contains('active')) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить интерактивность для рейтинга
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('i');

        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                // Подсвечиваем звезды при наведении (для активного рейтинга)
                for(let i = 0; i <= index; i++) {
                    stars[i].classList.add('hovered');
                }
            });

            star.addEventListener('mouseout', () => {
                // Убираем подсветку при уходе мыши
                // stars.forEach(s => s.classList.remove('hovered'));
            });

            star.addEventListener('click', () => {
                // При клике можно отправить оценку на сервер
                // console.log(`Оценка: ${index + 1}`);
            });
        });
    });
});
// Получаем элементы
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const openModal = document.getElementById('openModal');

const onenMiniForm = document.querySelector('.catalog__block');

document.addEventListener('click',(e)=>{
    if(e.target.closest('.catalog__block')==onenMiniForm){
        modalOverlay.classList.add('active');
    }else{
        console.log(e.target.closest('.catalog__block'))
        console.log(onenMiniForm)

    }
})
// Открытие модального окна
// openModal.addEventListener('click', () => {
//     modalOverlay.classList.add('active');
// });

// Закрытие модального окна
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Закрытие при клике вне модального окна
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Обработка формы
const form = document.querySelector('.modal-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
    modalOverlay.classList.remove('active');
});





const modalOverlay2 = document.getElementById('modalOverlay2');
const modalClose2 = document.getElementById('modalClose2');
const openModal2 = document.getElementById('openModal2');

// const openModal2 = document.get('openModal2');
//
// banner-btn
const onenBigForm = document.querySelector('.banner-btn');
    document.addEventListener('click', (e) => {
        if (e.target.closest('.banner-btn') == onenBigForm) {
            modalOverlay2.classList.add('active');
        } else {
            console.log(e.target.closest('.catalog__block'))
            console.log(onenBigForm)

        }
    })
// openModal2.addEventListener('click', () => {
//     modalOverlay2.classList.add('active');
// });

modalClose2.addEventListener('click', () => {
    modalOverlay2.classList.remove('active');
});

modalOverlay2.addEventListener('click', (e) => {
    if (e.target === modalOverlay2) {
        modalOverlay2.classList.remove('active');
    }
});

// Обработка формы
const form2 = document.querySelector('.modal-form2');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
    modalOverlay2.classList.remove('active');
});

const openMobileMenu = document.querySelector('.gamburger');
openMobileMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.header-mobile');
    mobileMenu.classList.add('header-mobile_active');
    mobileMenu.classList.add('active');

});
const closeMobileMenu = document.querySelector('.modal-close-menu');
closeMobileMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.header-mobile');
    mobileMenu.classList.remove('header-mobile_active');
    mobileMenu.classList.remove('active');

});








window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('header-top');
    } else {
        header.classList.remove('header-top');
    }
});






(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });



    $.fn.moreNav = function() {
        var nav = $(this);

        function setMoreNav() {

            var nav_width = nav.outerWidth(),
                nav_elem_width = 0,
                more_link = $('<li class="more"><a href="#">Еще</a><ul></ul></li>'),
                class_nav_item = 'nav-item',
                class_nav_item_more = 'nav-item-more';

            if( nav.find('.more').length > 0 ) {
                nav.append(nav.find('.more ul li'));
                nav.find('.more').remove();
            }

            $.each(nav.find('li'), function(i, elem){
                var elem_width = $(elem).outerWidth();

                nav_elem_width += elem_width;
            });

            if( nav_elem_width > nav_width ) {
                nav.append(more_link);
                nav_width -= more_link.outerWidth();

                nav_elem_width = 0;

                $.each(nav.find('li'), function(i, elem){
                    var elem_width = $(elem).outerWidth();

                    nav_elem_width += elem_width;

                    if( !$(elem).is('.more') ) {
                        if( nav_elem_width < nav_width ) {
                            $(elem).addClass(class_nav_item).removeClass(class_nav_item_more);
                        } else {
                            $(elem).addClass(class_nav_item_more).removeClass(class_nav_item);
                        }
                    }
                });
            }

            more_link.find('ul').append($('.' + class_nav_item_more));

        }
        setMoreNav();
        $(window).resize(function(){
            setMoreNav();
        });
    };

    $('#more-nav').moreNav();

})(jQuery);

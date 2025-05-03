const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list li a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const answer = btn.nextElementSibling;

        if (btn.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.paddingBottom = '15px';
        } else {
            answer.style.maxHeight = null;
            answer.style.paddingBottom = '0';
        }
    });
});

document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".swiper");
    const testiSwiper = document.querySelector(".testimonials-swiper");

    if (swiperContainer) {

        const swiper = new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }



    if (testiSwiper) {
        const testSwiper = new Swiper('.testimonials-swiper', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320:{
                    slidesPerView: 1,
                },
                990:{
                    slidesPerView: 2,
                }
            }
        });

    }









});






const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

// Открытие модального окна
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');

        modalImage.src = imageSrc;
        modal.style.display = 'flex';
    });
});

// Закрытие модального окна
if (closeModal){
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}



// Закрытие модального окна при клике вне его области
window.addEventListener('click', (e) => { 
    if (e.target === modal || e.target === modalImage) {
        modal.style.display = 'none';
    }
});  

modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
});

modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;

    const diffX = Math.abs(touchEndX - touchStartX);
    const diffY = Math.abs(touchEndY - touchStartY);

    // თუ ნებისმიერი მიმართულებით გავწიეთ თითი საკმარისი მანძილით
    if (diffX > 30 || diffY > 30) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookieBanner");
    const btn = document.getElementById("acceptCookies");

    // Проверка localStorage
    if (!localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "flex";
    }

    btn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });
});
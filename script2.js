// script.js

// Функция для анимации появления элементов на экране
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('fadeIn');
        } else {
            element.classList.remove('fadeIn');
        }
    });
}

// Добавляем событие прокрутки
window.addEventListener('scroll', animateOnScroll);

// Включаем анимацию при загрузке
window.addEventListener('load', animateOnScroll);

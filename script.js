// script.js

// Анимация появления элементов на экране
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

// Обработчик для изменения хедера при прокрутке
function handleHeaderOnScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Добавляем события прокрутки
window.addEventListener('scroll', () => {
    animateOnScroll();
    handleHeaderOnScroll();
});

// Включаем анимацию при загрузке
window.addEventListener('load', animateOnScroll);

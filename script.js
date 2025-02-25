// Анімації AOS
AOS.init();

// Темна тема
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    toggle.innerHTML = document.body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Таймер
const startDate = new Date('2023-01-01'); // Замініть на дату вашого знайомства
setInterval(() => {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}, 1000);

// Слайдер Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Функціонал для кнопки "Показати більше"
const loadMoreButton = document.getElementById('load-more');
const moreQuotes = document.getElementById('more-quotes');

loadMoreButton.addEventListener('click', () => {
    moreQuotes.style.display = 'block';
    loadMoreButton.style.display = 'none'; // Приховуємо кнопку після кліку
});

// Музика
const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-music');
const pauseButton = document.getElementById('pause-music');
const musicNotification = document.getElementById('music-notification');

// Відтворення музики після кліку
playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
});

// Пауза музики
pauseButton.addEventListener('click', () => {
    audio.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline-block';
});

// Автоматичне відтворення після взаємодії зі сторінкою
document.body.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
}, { once: true }); // Виконується лише один раз

// Показуємо повідомлення, якщо музика не відтворюється автоматично
audio.addEventListener('play', () => {
    musicNotification.style.display = 'none';
});

audio.addEventListener('pause', () => {
    musicNotification.style.display = 'block';
});

// Функція для створення сердечок
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw'; // Випадкове положення по горизонталі
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Випадкова швидкість падіння
    document.body.appendChild(heart);

    // Видаляємо сердечко після завершення анімації
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Створюємо нове сердечко кожні 300 мс
setInterval(createHeart, 300);

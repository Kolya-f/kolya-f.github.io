// Динамічна зміна кольору цитат
const quotes = document.querySelectorAll('blockquote');
const colors = ['#ff69b4', '#ff9a9e', '#fad0c4', '#fbc2eb'];

setInterval(() => {
    quotes.forEach((quote, index) => {
        quote.style.borderLeftColor = colors[Math.floor(Math.random() * colors.length)];
    });
}, 2000);

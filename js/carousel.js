const images = [
    'img/september.webp',
    'img/sept.png',
    'img/march.webp',
    'img/march2015.png',
    'img/may2021.webp',
    'img/may.png'
];
let currentSlide = 0;
function showCurrentSlide() {
    const imageContainer = document.querySelector('.products-carousel .product-image');
    imageContainer.src = images[currentSlide];
}
function next() {
    currentSlide ++;
    if (currentSlide > images.length - 1) currentSlide = 0;
    showCurrentSlide();
}
    setInterval(next, 3000);
    showCurrentSlide();

let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const carouselInner = document.querySelector('.carousel-inner');

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function updateCarousel() {
    const offset = -currentIndex * 100; // Calcula el desplazamiento
    carouselInner.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al inicio
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Vuelve al final
    }
    updateCarousel();
});

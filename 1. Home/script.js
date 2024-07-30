document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.banner .slide');
    var totalSlides = slides.length;
    var currentSlide = 0;
    var slideWidth = slides[0].clientWidth; // Width of each slide
    var slidesContainer = document.querySelector('.banner .slides');

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        var displacement = -currentSlide * slideWidth;
        slidesContainer.style.transform = 'translateX(' + displacement + 'px)';
    }

    setInterval(nextSlide, 3500); // Change slide every 3 seconds (adjust as needed)
});
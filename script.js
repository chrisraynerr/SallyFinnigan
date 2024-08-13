const images = [
    "https://github.com/chrisraynerr/SallyFinnigan/raw/main/KINGDOM/1.jpg",
    "https://github.com/chrisraynerr/SallyFinnigan/raw/main/KINGDOM/2.jpg",
    "https://github.com/chrisraynerr/SallyFinnigan/raw/main/KINGDOM/3.jpg"
    // Add more images if needed
];

let currentIndex = 0;
const slideshowElement = document.getElementById('slideshow');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowElement.src = images[currentIndex];
}

setInterval(changeImage, 10000); // Change image every 10 seconds

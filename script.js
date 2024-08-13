const images = [
    "KINGDOM/AJP_Burberry-SS_03.jpg",
    "KINGDOM/AJP_Burberry-SS_04.jpg",
    "KINGDOM/AJP_Burberry-SS_05.jpg"
    "KINGDOM/AJP_Burberry-SS_06.jpg"
    "KINGDOM/AJP_Burberry-SS_08.jpg"
    // Add more images if needed
];

let currentIndex = 0;
const slideshowElement = document.getElementById('slideshow');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowElement.src = images[currentIndex];
}

setInterval(changeImage, 10000); // Change image every 10 seconds

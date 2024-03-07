// Add image urls here
const imagePaths = [
    "/images/testtestimg2.jpg",
    "/images/testtestimg3.jpg",
    "/images/testtestimg4.jpg"
];

const carousel = document.getElementById('imageCarousel');
let currentIndex = 0;

function showImages() {
    carousel.innerHTML = ''; // Clear existing images
    const img = document.createElement("img");
    img.src = imagePaths[currentIndex];
    img.alt = "Carousel img";
    carousel.appendChild(img);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    showImages();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    showImages();
}

function autoChangeImage() {
    nextImage();
}

// Maybe add next btns
const interValid = setInterval(autoChangeImage, 3000);

document.addEventListener("DOMContentLoaded", showImages);

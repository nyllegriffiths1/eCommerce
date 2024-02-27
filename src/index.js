// Add image urls here

const imagePaths = [
    "/images/2022_1017_072552_002.JPG", 
    "/images/2022_1017_075055_001.JPG", 
    "/images/2022_1017_081004_002.JPG"
];

const carousel = document.getElementById('imageCarousel');

let currentIndex = 0;

function showImages() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
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

// create img elements dynamically

imagePaths.forEach((path) => {
    const img = 
    document.createElement("img");
    img.src = path;
    img.alt = "Carousel img";
    carousel.appendChild(img);

});

// Maybe add next btns
// const interValid = setInterval(autoChangeImage, 3000);

document.addEventListener("DOMContentLoaded", showImages);

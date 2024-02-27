// Add image urls here

const imagePaths = [
    "/images/2022_1017_072552_002.JPG", 
    "/images/2022_1017_075055_001.JPG", 
    "2022_1017_081004_002.JPG"
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

// create img elements dynamically

imagePaths.forEach((path) => {
    const img = 
    document.createElement("img");
    img.src = path;
    img.alt = "Carousel img";
    carousel.appendChild(img);

})

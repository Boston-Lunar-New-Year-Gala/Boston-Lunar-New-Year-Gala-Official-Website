document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('hero-slideshow');
    
    // List of available images. Update these paths to match your actual files in the 'images' folder.
    const allImages = [
        '../images/tupian1.jpg',
        '../images/tupian2.jpg',
        '../images/tupian3.jpg',
        '../images/tupian5.jpg',
        '../images/tupian8.jpg',
        '../images/tupian12.jpg',
        '../images/tupian13.jpg',
        '../images/tupian14.jpg',
        '../images/tupian15.jpg',
        '../images/tupian22.jpg',
        '../images/tupian29.jpg',
        '../images/tupian30.jpg',
        '../images/tupian32.jpg',
        '../images/tupian33.jpg'
    ];

    // Function to shuffle array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Select 5 random images
    const selectedImages = shuffle([...allImages]).slice(0, 5);

    // Create image elements
    selectedImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('hero-slide');
        if (index === 0) img.classList.add('active');
        slideshowContainer.appendChild(img);
    });

    // Cycle images
    const slides = document.getElementsByClassName('hero-slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Change every 5 seconds
});
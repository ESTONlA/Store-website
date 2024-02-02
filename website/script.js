// Get the background divs
var backgrounds = document.querySelectorAll('.background');

// Get the slider and images
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// Set the initial image index
let imageIndex = 0;

// Function to update the slider
function updateSlider() {
    // Remove classes from all images
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // Add classes to the current image and adjacent images
    images[imageIndex].classList.add('active');
    images[(imageIndex - 1 + images.length) % images.length].classList.add('previous');
    images[(imageIndex + 1) % images.length].classList.add('next');

    // Add 'inactive' class to non-active, non-adjacent images
    images.forEach((image, index) => {
        if (
            index !== imageIndex &&
            index !== (imageIndex - 1 + images.length) % images.length &&
            index !== (imageIndex + 1) % images.length
        ) {
            image.classList.add('inactive');
        }
    });

    // Update opacity of background divs
    backgrounds.forEach((background, index) => {
        background.style.opacity = index === imageIndex ? 1 : 0;
    });

    // Update image index for the next iteration
    imageIndex = (imageIndex + 1) % images.length;
}

// Call updateSlider initially
updateSlider();

// Update slider every 3 seconds
setInterval(updateSlider, 5000);

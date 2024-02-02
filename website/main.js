// get all the background divvs :DDDD
var backgrounds = document.querySelectorAll('.background');
// Get the slider and images :DD pls kill me
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// set the intial image index :(
    let imageIndex = 0;

    // update the slider
function updateSlider() {
    // remove the active previous next and inactive classes from all the images
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // add the active class to the current image
    images[imageIndex].classList.add('active');

    // add the 'previous' class to the current image before the current one
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    // add the 'next' class to the current image after the current one
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    // add the 'inactive' class to the images that are not active or next or previous
    images.forEach((image, index) => {
        if (
            index !== imageIndex &&
            index !== (imageIndex - 1 + images.length) % images.length &&
            index !== (imageIndex + 1) % images.length
        ) {
            image.classList.add('inactive');
        }
    });
}

//set the opacity
backgrounds.forEach((background) => {
    background.style.opacity = 0;
});

// pls kill me already
if (images[imageIndex].classList.contains('active')) {
    backgrounds[imageIndex].style.opacity = 1;
    //update image index
    imageIndex = (imageIndex + 1) % images.length;
}


updateSlider();
// update 3s 
setInterval(updateSlider, 3000);

images[1].classList.add('next');
images[2].classList.add('inactive');
images[3].classList.add('inactive');
images[4].classList.add('previous');
images[0].classList.add('active');

